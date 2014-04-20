exports.config = {
  baseUrl: 'http://127.0.0.1:9000/',
  chromeOnly: true,
  chromeDriver: 'node_modules/protractor/selenium/chromedriver',
  capabilities: {
    'browserName': 'chrome'
  },
  specs: ['test/spec/acceptance/**/*.js'],
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
