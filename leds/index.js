var Gpio = require('pigpio').Gpio; //include pigpio to interact with the GPIO

var express = require("express");
var app = express();
var server = require("http").Server(app);

var python_shell = require("python-shell");


var ledRed = new Gpio(22, {mode: Gpio.OUTPUT}); //use GPIO pin 22 as output for RED
var ledGreen = new Gpio(27, {mode: Gpio.OUTPUT}); //use GPIO pin 27 as output for GREEN
var ledBlue = new Gpio(17, {mode: Gpio.OUTPUT}); //use GPIO pin 17 as output for BLUE

app.get("/", function(req, res){
	res.send("works");	
});
app.get("/startlights", function(req, res){

	python_shell.run("../led_trafficlights.py", function(err) {
	  if (err) throw err;
	});
	res.send("inProgress");
});
app.get("/set_led", function(req, res){
	console.log(req.query);
/*	#var options = {
	args: [req.query.red_value, req.query.green_value, req.query.blue_value]
	}
	python_shell.run("../led_set.py", options, function(err,result){
		if (err) throw err;
		res.send(result);
	});

	var redRGB = 0; //set starting value of RED variable to off (0 for common cathode)
	var greenRGB = 0; //set starting value of GREEN variable to off (0 for common cathode)
	var blueRGB = 0; //set starting value of BLUE variable to off (0 for common cathode)
*/	ledRed.pwmWrite(parseInt(req.query.red_value)); // Turn RED LED off
	ledGreen.pwmWrite(parseInt(req.query.green_value)); // Turn GREEN LED off
	ledBlue.pwmWrite(parseInt(req.query.blue_value)); // Turn BLUE LED off

});

server.listen(8000);
