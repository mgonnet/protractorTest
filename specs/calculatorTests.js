/**
 * spec.js 
 */

var CalculatorHomePage = require('../pageObjects/calculatorPageObject.js');

describe('Angular Calculator Test Suite', function(){
	var calculatorHomePage;
	
	beforeEach(function(){
		calculatorHomePage = new CalculatorHomePage();
		calculatorHomePage.get();
	})
	
	it('Calculator addition test', function(){
		calculatorHomePage.operate('1','2','ADDITION');
		
		expect(calculatorHomePage.getResult()).toEqual('3');
	})
	
	it('Calculator multiplication test', function(){
		calculatorHomePage.operate('1','2','MULTIPLICATION');	
		
		expect(calculatorHomePage.getResult()).toEqual('2');
	})
	
	it('Calculator results memory test with two results', function(){	
		calculatorHomePage.operate('1','2','ADDITION');
		calculatorHomePage.operate('1','2','MULTIPLICATION');
		
		expect(calculatorHomePage.getValuesMemory()).toEqual(['2', '3']);		
		expect(calculatorHomePage.getValuesMemorySize()).toEqual(2);
	})
	
	it('Calculator operations memory test with three results', function(){
		calculatorHomePage.operate('1','2','ADDITION');
		calculatorHomePage.operate('1','2','MULTIPLICATION');
		calculatorHomePage.operate('1','2','DIVISION');
		
		expect(calculatorHomePage.getOperatorsMemory()).toEqual(['/', '*', '+']);		
		expect(calculatorHomePage.getOperatorsMemorySize()).toEqual(3);
	})
	
	it('Calculator memory records operation date', function(){
		calculatorHomePage.operate('1','2','ADDITION');
		
		calculatorHomePage.getDateMemory().then(function (dateMemory){
			expect(dateMemory[0]).toMatch(/\d{1,2}:\d{1,2}:\d{1,2} (?:AM|PM)/);
		});		
	})
	
	xit('Skipped spec',function(){
		//This spec is skipped because it starts with x
		expect(true).toBe(true);
	})
	
	it('Calculator operation test using external data from json', function(){
		var data = require("../data/calculatorTestData.json");
		
		data.forEach(function(dataElement){
			calculatorHomePage.operate(dataElement.FirstNumber,dataElement.SecondNumber,dataElement.Operation);
			
			expect(calculatorHomePage.getResult()).toEqual(dataElement.Result);
		})
	})
		
})

xdescribe('Skipped test suite', function(){
	it('true to be true', function(){
		expect(true).toBe(true);
	})
})