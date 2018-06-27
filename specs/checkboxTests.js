/**
 * 
 */

var CheckboxesHomePage = require('../pageObjects/checkboxesPageObject.js');

describe('Angular checkboxes page Test Suite', function(){
	var checkboxesHomePage;
	
	beforeEach(function(){
		checkboxesHomePage = new CheckboxesHomePage();
		checkboxesHomePage.get();
	})
	
	it('The root checkbox should not be selected on page load', function(){
		expect(checkboxesHomePage.getRootCheckboxStatus()).toBeNull();
	})
	
	it('The root checkbox should be checked after clicking it', function(){
		checkboxesHomePage.checkRootCheckbox();
		expect(checkboxesHomePage.getRootCheckboxStatus()).toBeTruthy();
	})
	
	it('The root checkbox should not be checked after ensuring is not checked',function(){
		checkboxesHomePage.unCheckRootCheckbox();
		expect(checkboxesHomePage.getRootCheckboxStatus()).toBeFalsy();
	})
})