import RPi.GPIO as GPIO
import time
import sys

led_blue = 17
led_green = 27
led_red = 22

red_value = int(sys.argv[1])
green_value = int(sys.argv[2])
blue_value = int(sys.argv[3])
try:
	GPIO.setmode(GPIO.BCM)
	GPIO.setup(led_blue, GPIO.OUT)
	GPIO.setup(led_green, GPIO.OUT)
	GPIO.setup(led_red, GPIO.OUT)

	pwm_blue = GPIO.PWM(led_blue, 100)
	pwm_green = GPIO.PWM(led_green, 100)
	pwm_red = GPIO.PWM(led_red, 100)

	pwm_blue.start(0)
	pwm_green.start(0)
	pwm_red.start(0)

	pwm_red.ChangeDutyCycle(red_value)
	pwm_green.ChangeDutyCycle(green_value)
	pwm_blue.ChangeDutyCycle(blue_value)
	time.sleep(2.0)	

except KeyboardInterrupt:
	pass

GPIO.cleanup()
