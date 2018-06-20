/**
 * config.js
 */

var Jasmine2HtmlReporter = require('C:/Users/matias.gonnet/AppData/Roaming/npm/node_modules/protractor-jasmine2-html-reporter');

exports.config = {
		framework: 'jasmine',
		onPrepare: function(){
			jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({savePath:'evidence'}))
		},
		seleniumAddress: 'http:localhost:4444/wd/hub',
		specs: ['spec.js'],
		directConnect: true //This line is to avoid manually starting the webdriver server
}