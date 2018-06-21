/**
 * checkboxes Page
 */

var CheckboxesHomePage = function(){
	var firstNumberElement = element(by.model('data.root'));

	this.get = function(){
		browser.get('http://www.way2automation.com/angularjs-protractor/checkboxes/');
	}	
	
}
module.exports = CheckboxesHomePage;