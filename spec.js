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
	
	it('Calculator memory test with two results', function(){
		var calculatorHomePage = new CalculatorHomePage();
		
		calculatorHomePage.get();
		
		calculatorHomePage.operate('1','2','ADDITION');
		calculatorHomePage.operate('1','2','MULTIPLICATION');
		
		expect(calculatorHomePage.getResultsValueMemory()).toEqual(['2', '3']);		
		expect(calculatorHomePage.getMemorySize()).toEqual(2);
	})
	
})