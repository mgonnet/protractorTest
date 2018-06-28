var SelectWrapper  = require('../utils/SelectWrapper.js');

var CityHabitatHomePage = function(){
	var salesMenu = element(by.css('.citi_header--menu-item sales'));

	this.get = function(){
		browser.get('https://www.citihabitats.com');
	}

	this.goToSales = function(){
        salesMenu.click();
        return new
	}


}
module.exports = CityHabitatHomePage;