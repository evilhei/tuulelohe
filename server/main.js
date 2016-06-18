import { Meteor } from 'meteor/meteor';
import '../imports/api/weatherData.js';

const WeatherData = new Mongo.Collection('weatherData')
var cheerio = require('cheerio');



Meteor.methods({
		getWeatherData: function() {
		var vaatlusPunkt = "Tallinna vanasadam"
		var url = 'http://on-line.msi.ttu.ee/tallinn/';
        var result = Meteor.http.call("GET", url);
        var $ = cheerio.load(result.content);
        var tuuleSuund = $('.tuulesuund').text().replace(/[^a-zA-Z0-9 ]/g, "");
        var tuuleKiirus = $('.tuulekiirus').text().replace(/[ms/, ]/g, "");
        var tuulePuhang = $('.tuulepuhang').text().replace(/[puhangutims/ ]/g, "");
        var veeTemp = $('.veetemp').text().replace(/[°C ]/g, "");
        var ohuTemp = $('.ohutemp').text().replace(/[°C ]/g, "")

        WeatherData.insert({
        	tuuleSuund: tuuleSuund,
        	tuuleKiirus: tuuleKiirus,
        	tuulePuhang: tuulePuhang,
        	veeTemp: veeTemp,
        	ohuTemp: ohuTemp,
        	checkDate: new Date(),
        	vaatlusPunkt: vaatlusPunkt

        })
        return tuulePuhang;
	}
})
