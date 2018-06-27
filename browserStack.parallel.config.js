/**
 * config.js
 */

var Jasmine2HtmlReporter = require('C:/Users/matias.gonnet/AppData/Roaming/npm/node_modules/protractor-jasmine2-html-reporter');

exports.config = {
	specs: ['./specs/calculatorTests.js', './specs/checkboxTests.js'],
	
	'seleniumAddress': 'http://hub-cloud.browserstack.com/wd/hub',
	'commonCapabilities': {
		'browserstack.user': 'matiasgonnet1',
		'browserstack.key': 'FieAfAdi9iszRwFWPguK'
	},

	'multiCapabilities': [{
	   	'browserName': 'Chrome'
	},{
		'browserName': 'Firefox'
	},{
	    'browserName': 'IE'
	}]
};

// Code to support common capabilities
exports.config.multiCapabilities.forEach(function(caps){
	for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
