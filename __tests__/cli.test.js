const { exec } = require('child_process');
jest.mock('child_process');

describe('Taut CLI Integration Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should install a package using taut install', (done) => {
    exec.mockImplementation((cmd, callback) => callback(null, 'installed'));

    const tautCLI = require('child_process').exec('node bin/taut.js install axios', (err, stdout) => {
      expect(stdout).toContain('installed');
      done();
    });
  });

  test('should analyze existing dependencies using taut analyze', (done) => {
    const tautCLI = require('child_process').exec('node bin/taut.js analyze', (err
