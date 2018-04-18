var Gpio = require('pigpio').Gpio;

var ledRed = new Gpio(22, {mode:Gpio.OUTPUT});
var ledGreen = new Gpio(27, {mode: Gpio.OUTPUT});
var ledBlue = new Gpio(17, {mode: Gpio.OUTPUT});
var i = 0;
var j = 0;
var keepGoing = true;

module.exports = {
binary_sequence_polar_RZ_two_bits: async function(input, interval)
{	
var intInterval = parseInt(interval.toString());
console.log(intInterval);
console.log(intInterval / 2);
for(var i = 0; i < input.length - 1; i++)
	{
		switch(input[i].toString() + input[i+1].toString())
		{
			case ("00") :
				console.log((i+2)/2 + ": " + "RED");
				ledRed.pwmWrite(255);
				ledGreen.pwmWrite(0);
				ledBlue.pwmWrite(0);
				break;
			case ("01") :
				console.log((i+2)/2 + ": " + "GREEN");
				ledRed.pwmWrite(0);
				ledGreen.pwmWrite(255);
				ledBlue.pwmWrite(0);
				break;
			case ("10") :
				console.log((i+2)/2 + ": " + "BLUE");
				ledRed.pwmWrite(0);
				ledGreen.pwmWrite(0);
				ledBlue.pwmWrite(255);
				break;
			case ("11") :
				console.log((i+2)/2 + ": " + "YELLOW");
				ledRed.pwmWrite(255);
				ledGreen.pwmWrite(185);
				ledBlue.pwmWrite(0);
				break;
			default :
				console.log((i+2)/2 + ": " + "FAIL");
				ledRed.pwmWrite(255);
				ledGreen.pwmWrite(255);
				ledBlue.pwmWrite(255);
				break;
		}
		await sleep (intInterval / 2);
        	ledRed.pwmWrite(0);
       		ledGreen.pwmWrite(0);
        	ledBlue.pwmWrite(0);
       		 await sleep (intInterval / 2);
		i++;
        }
	ledRed.pwmWrite(255);
	ledGreen.pwmWrite(0);
	ledBlue.pwmWrite(190);
	console.log("Done");
	}
,binary_sequence: async function(input) {
		for(i = 0; i < input.length; i++) {
			switch(input[i].toString()) {
				case ("0") :
                                	console.log(i + ": " + "OFF " + Date.now());
                                	ledRed.pwmWrite(0);
                                	ledGreen.pwmWrite(0);
                                	ledBlue.pwmWrite(0);
                               		 break;
                        	case ("1") :
                                	console.log(i + ": " + "RED " + Date.now());
                                	ledRed.pwmWrite(255);
                                	ledGreen.pwmWrite(0);
                                	ledBlue.pwmWrite(0);
                                	break;	
                        	default :
                                	console.log((i+2)/2 + ": " + "FAIL");
                                	ledRed.pwmWrite(255);
                                	ledGreen.pwmWrite(255);
                                	ledBlue.pwmWrite(255);
                               		break;
			}
			await sleep (75);
		}
		console.log("done");
	}
,binary_sequence_polar_RZ: async function(input, interval) {
    
    /*
        This method receives the input, consisting of binarysequence, and the total interval for one symbol
     */
    var intInterval = parseInt(interval.toString());
    console.log(intInterval);
    console.log(intInterval / 2);
    for(i = 0; i < input.length; i++) {
        switch(input[i].toString()) {
            case ("0") :
                console.log(i + ": " + "Value = 0 " + Date.now());
                ledRed.pwmWrite(0);
                ledGreen.pwmWrite(0);
                ledBlue.pwmWrite(255);
                break;
            case ("1") :
                console.log(i + ": " + "Value = 1 " + Date.now());
                ledRed.pwmWrite(255);
                ledGreen.pwmWrite(0);
                ledBlue.pwmWrite(0);
                break;
            default :
                console.log(i+ ": " + "FAIL");
                ledRed.pwmWrite(255);
                ledGreen.pwmWrite(255);
                ledBlue.pwmWrite(255);
                break;
        }
        await sleep (intInterval / 2);
        
        ledRed.pwmWrite(0);
        ledGreen.pwmWrite(0);
        ledBlue.pwmWrite(0);
        
        await sleep (intInterval / 2);
    }
    console.log("done");
    ledRed.pwmWrite(0);
    ledGreen.pwmWrite(255);
    ledBlue.pwmWrite(0);   
    await sleep (500);
    ledRed.pwmWrite(0);
    ledGreen.pwmWrite(0);
    ledBlue.pwmWrite(0);
	// stopsign green
}
};



setTimeout(function() {
    // this will be executed in 3 minutes
    // causing the following while loop to exit
    keepGoing = false;
}, 10000);

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
  await sleep(1000);
}
