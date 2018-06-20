/**
 * spec.js 
 */

var CalculatorHomePage = require('./PageObjects/calculatorPageObject.js');

describe('Angular Calculator Test Suite', function(){
	
	it('Calculator addition test', function(){
		var calculatorHomePage = new CalculatorHomePage();
		
		calculatorHomePage.get();			
		
		calculatorHomePage.operate('1','2','ADDITION');
		
		expect(calculatorHomePage.getResult()).toEqual('3');
	})
	
	it('Calculator multiplication test', function(){
		var calculatorHomePage = new CalculatorHomePage();
		
		calculatorHomePage.get();			
		
		calculatorHomePage.operate('1','2','MULTIPLICATION');
		
		expect(calculatorHomePage.getResult()).toEqual('2');
	})
	
	it('Calculator results memory test with two results', function(){
		var calculatorHomePage = new CalculatorHomePage();
		
		calculatorHomePage.get();
		
		calculatorHomePage.operate('1','2','ADDITION');
		calculatorHomePage.operate('1','2','MULTIPLICATION');
		
		expect(calculatorHomePage.getValuesMemory()).toEqual(['2', '3']);		
		expect(calculatorHomePage.getValuesMemorySize()).toEqual(2);
	})
	
	it('Calculator operations memory test with three results', function(){
		var calculatorHomePage = new CalculatorHomePage();
		
		calculatorHomePage.get();
		
		calculatorHomePage.operate('1','2','ADDITION');
		calculatorHomePage.operate('1','2','MULTIPLICATION');
		calculatorHomePage.operate('1','2','DIVISION');
		
		expect(calculatorHomePage.getOperatorsMemory()).toEqual(['/', '*', '+']);		
		expect(calculatorHomePage.getOperatorsMemorySize()).toEqual(3);
	})
		
})