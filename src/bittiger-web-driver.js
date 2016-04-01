/**
 * Created by paul on 3/21/16.
 */
var webdriver = require('selenium-webdriver');
require('chromedriver');

module.exports.build = function () {
  return new webdriver.Builder()
    .forBrowser('chrome')
    .build();
};
