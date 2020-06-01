module.exports = {
  testRegex: 'packages/.*/tests/.*?(test)\\.js$',
  setupFiles: ['<rootDir>setupTests.js'],
  moduleNameMapper: {
    'cross-fetch': 'jest-fetch-mock',
    'yoga-layout-prebuilt': 'yoga-layout-prebuilt',
  },
};
