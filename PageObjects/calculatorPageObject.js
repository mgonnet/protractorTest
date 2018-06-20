/**
 * Calculator Page 
 */

var SelectWrapper  = require('../utils/SelectWrapper.js');

var CalculatorHomePage = function(){
	var firstNumberElement = element(by.model('first'));
	var secondNumberElement = element(by.model('second'));
	var operatorElement = new SelectWrapper(by.model('operator'));
	var calculateElement = element(by.id('gobutton'));
	var resultElement = element(by.css('.ng-binding'));	
	
	var valuesMemory = element.all(by.repeater('result in memory').column('result.value'));
	var operatorsMemory = element.all(by.repeater('result in memory').column('result.operator'));
	
	this.get = function(){
		browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
	}
	
	this.operate = function(firstNumber, secondNumber, operator){
		firstNumberElement.sendKeys(firstNumber);
		secondNumberElement.sendKeys(secondNumber);
		operatorElement.selectByValue(operator);
		calculateElement.click();		
	}
	
	this.getResult = function(){
		return resultElement.getText();
	}
	
	this.getValuesMemory = function(){
		return valuesMemory.getText();
	}	
	
	this.getValuesMemorySize = function(){
		return valuesMemory.count();
	}
	
	this.getOperatorsMemory = function(){
		return operatorsMemory.getText();
	}
	
	this.getOperatorsMemorySize = function(){
		return operatorsMemory.count();
	}
	
}
module.exports = CalculatorHomePage;