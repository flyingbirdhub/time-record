module.exports = {
  modulePathIgnorePatterns: ['dist'],
  testMatch: [
    '**/tests/**/*.spec.[jt]s?(x)',
    '**/__tests__/*.[jt]s?(x)'
  ],
  coverageReporters: ["json", "lcov", "text", "clover"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,ts,vue}", "!node_modules/**", "!dist/**"],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
  ],
};
