import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


import { Mongo } from 'meteor/mongo';

Template.info.onRendered(function helloOnCreated() {

Meteor.call("getWeatherData", function(error, results) {

    console.log(results)

	var x, y, r, ctx, radians;
	  
	  ctx = window.compass.getContext("2d");
	  
	  radians = 0.0174533 * (results - 90);
	  x = ctx.canvas.width / 2;
	  y = ctx.canvas.height / 2;
	  r = x * 0.8;

	  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height );
	  ctx.beginPath();
	  ctx.strokeStyle = "red"
	  ctx.fillStyle = "rgba(255,0,0,0.5)";
	  ctx.lineCap = 'square';
	  ctx.shadowOffsetX = 4;
	  ctx.shadowOffsetY = 4;
	  ctx.shadowBlur = 2;
	  ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
	  ctx.lineWidth = 10;

	  ctx.moveTo(x, y);
	  ctx.lineTo(x + r * Math.cos(radians), y + r * Math.sin(radians));
	  ctx.fillRect(x - 20,y,45,15);

	  ctx.stroke();
	});


});


var rannad = {};
rannad = JSON.parse(Assets.getText("rannad.json"));


var rannadList = $.map(rannad, function(value, index) {
    return [value];
});


rannadList.forEach(tere)

function tere() {
	console.log("tere tere")
}

