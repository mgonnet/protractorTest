/**
 * Checkbox Wrapper
 */

var truthy = true;
var falsy = false;
var nully = null;

var CheckboxWrapper = function(selector) {
    this.webElement = element(selector);
};

CheckboxWrapper.prototype.isChecked = function() {	
	return this.webElement.getAttribute('checked');
};

CheckboxWrapper.prototype.ensureIsChecked = function() { 
	var webElement = this.webElement;
	
	this.isChecked().then(function(checkValue){
		if(checkValue!=truthy){
			webElement.click();
		}
	})
};

CheckboxWrapper.prototype.ensureIsNotChecked = function(){
	var webElement = this.webElement;
	
	this.isChecked().then(function(checkValue){
		switch(checkValue){
		case truthy:
			webElement.click();
			break;
		case nully:
			webElement.click();
			webElement.click();
			break;			
		}
	})
};

module.exports = CheckboxWrapper;