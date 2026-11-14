const path = require('path');
const base = require('./karma.conf');

module.exports = function (config) {
  base(config);
  config.set({
    browsers: ['ChromeHeadlessCI'],
    customLaunchers: {
      ChromeHeadlessCI: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--disable-gpu']
      }
    },
    reporters: ['progress', 'coverage-istanbul'],
    coverageIstanbulReporter: {
      dir: path.join(__dirname, 'coverage'),
      reports: ['lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    singleRun: true,
    autoWatch: false
  });
};
