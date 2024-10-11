const { fetchPackageInfo, analyzePackage } = require('../lib/inspect');
const axios = require('axios');
jest.mock('axios');

describe('fetchPackageInfo', () => {
  test('should fetch package information from npm registry', async () => {
    const mockData = { name: 'mock-package' };
    axios.get.mockResolvedValue({ data: mockData });

    const result = await fetchPackageInfo('mock-package');

    expect(result).toEqual(mockData);
    expect(axios.get).toHaveBeenCalledWith('https://registry.npmjs.org/mock-package');
  });

  test('should throw an error if unable to fetch package information', async () => {
    axios.get.mockRejectedValue(new Error('Network error'));

    await expect(fetchPackageInfo('mock-package')).rejects.toThrow('Network error');
  });
});

describe('analyzePackage', () => {
  test('should return an issue if tarball exceeds 5MB', async () => {
    axios.get.mockImplementation(() => ({
      data: {
        on: (event, callback) => {
          if (event === 'data') callback(Buffer.alloc(6 * 1024 * 1024)); // 6MB
          if (event === 'end') callback();
        }
      }
    }));

    const result = await analyzePackage({ versions: { latest: { dist: { tarball: 'mock-tarball-url' } } } });

    expect(result).toContain('Package exceeds size limit of 5MB.');
  });

  test('should not return an issue for packages under 5MB', async () => {
    axios.get.mockImplementation(() => ({
      data: {
        on: (event, callback) => {
          if (event === 'data') callback(Buffer.alloc(4 * 1024 * 1024)); // 4MB
          if (event === 'end') callback();
        }
      }
    }));

    const result = await analyzePackage({ versions: { latest: { dist: { tarball: 'mock-tarball-url' } } } });

    expect(result).toHaveLength(0);
  });
});
