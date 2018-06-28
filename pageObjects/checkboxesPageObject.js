/**
 * checkboxes Page
 */

var CheckboxWrapper  = require('../utils/CheckboxWrapper.js');

var CheckboxesHomePage = function(){
	var rootCheckbox = new CheckboxWrapper(by.model('data.root'));

	var insideCheckbox = new CheckboxWrapper(by.model(''));

	this.get = function(){
		browser.get('http://www.way2automation.com/angularjs-protractor/checkboxes/');
	}	
	
	this.getRootCheckboxStatus = function(){
		return rootCheckbox.isChecked();
	}
	
	this.checkRootCheckbox = function(){
		rootCheckbox.ensureIsChecked();
	}
	
	this.unCheckRootCheckbox = function(){
		rootCheckbox.ensureIsNotChecked();
	}
	
}
module.exports = CheckboxesHomePage;