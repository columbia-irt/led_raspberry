var Gpio = require('pigpio').Gpio; //include pigpio to interact with the GPIO

var ledAusgabe = require("./ledAusgabe");

var express = require("express");
var app = express();
var server = require("http").Server(app);

var ledRed = new Gpio(22, {mode: Gpio.OUTPUT}); //use GPIO pin 22 as output for RED
var ledGreen = new Gpio(27, {mode: Gpio.OUTPUT}); //use GPIO pin 27 as output for GREEN
var ledBlue = new Gpio(17, {mode: Gpio.OUTPUT}); //use GPIO pin 17 as output for BLUE

app.get("/", function(req, res){
	res.send("works");	
});

app.get("/set_led", function(req, res){
	console.log(req.query);
	ledRed.pwmWrite(parseInt(req.query.red_value)); // Turn RED LED off
	ledGreen.pwmWrite(parseInt(req.query.green_value)); // Turn GREEN LED off
	ledBlue.pwmWrite(parseInt(req.query.blue_value)); // Turn BLUE LED off

	res.send("working..");
});

app.get("/start_binary", function(req, res){
        var inputString = "";
	if(req.query.binary_input == null || req.query.binary_input == undefined) {
        	var max = req.query.amount;
        	for(var i = 0; i < max; i++){
                	inputString += "10";
        	}
	}else{
		inputString = req.query.binary_input;
	}
        // ledAusgabe.binary_sequence(inputString);
        ledAusgabe.binary_sequence_polar_RZ(inputString, req.query.interval);
        res.send("working: " + max + " interval: " +req.query.interval + "  input:  "  + inputString);
});


app.get("/start_binary_two_bits", function(req, res){
        var inputString = req.query.binary_input;
        ledAusgabe.binary_sequence_polar_RZ_two_bits(inputString, req.query.interval);
        res.send("working:  interval: " +req.query.interval + "  input:  "  + inputString);
});

server.listen(8000);

