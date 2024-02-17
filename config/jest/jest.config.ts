const config = {
  clearMocks: true,
  rootDir: '../../',
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  moduleDirectories: ['node_modules'],
  testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
};

export default config;
