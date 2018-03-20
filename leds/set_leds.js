module.exports

= {

  led: function(int red, int green, int blue){
	var Gpio = require('pigpio').Gpio,
	ledRed = new Gpio(22, {mode: Gpio.OUTPUT}), //use GPIO pin 22 as output for RED
	ledGreen = new Gpio(27, {mode: Gpio.OUTPUT}), //use GPIO pin 27 as output for GREEN
	ledBlue = new Gpio(17, {mode: Gpio.OUTPUT}), //use GPIO pin 17 as output for BLUE
	redRGB = 0,
	greenRGB = 0,
	blueRGB = 0;
	ledRed.digitalWrite(red); // Turn RED LED off
	ledGreen.digitalWrite(green); // Turn GREEN LED off
	ledBlue.digitalWrite(blue); // Turn BLUE LED off
  }
}
