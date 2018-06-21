/**
 * Checkbox Wrapper
 */

var CheckboxWrapper = function(selector) {
    this.webElement = element(selector);
};

CheckboxWrapper.prototype.isChecked = function() {
	return this.webElement.getAttribute('checked').then(function(checkedAttribute){
    	if(checkedAttribute=='true'){
    		return true;
    	}else{
    		return false;
    	}
    })
}

CheckboxWrapper.prototype.ensureIsChecked = function() {     
    if(!this.isChecked()){
    	this.webElement.click();
    }
};