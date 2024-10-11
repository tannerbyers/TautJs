const { installPackage } = require('../lib/install');
const { fetchPackageInfo, analyzePackage } = require('../lib/inspect');
const { exec } = require('child_process');

jest.mock('../lib/inspect');
jest.mock('child_process', () => ({
  exec: jest.fn()
}));

describe('installPackage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should install package if no issues are found', async () => {
    fetchPackageInfo.mockResolvedValue({ name: 'mock-package' });
    analyzePackage.mockResolvedValue([]);

    await installPackage('mock-package');

    expect(exec).toHaveBeenCalledWith('npm install mock-package', expect.any(Function));
  });

  test('should report issues if found and not proceed with installation', async () => {
    fetchPackageInfo.mockResolvedValue({ name: 'mock-package' });
    analyzePackage.mockResolvedValue(['Issue found']);

    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    await installPackage('mock-package');

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('Potential issues found'));
    expect(exec).not.toHaveBeenCalled();
  });

  test('should fail gracefully if package info cannot be fetched', async () => {
    fetchPackageInfo.mockRejectedValue(new Error('Network error'));

    const logSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    await installPackage('mock-package');

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('Failed to fetch package info'));
  });
});
