import RPi.GPIO as GPIO
import time

led_blue = 17
led_green = 27
led_red = 22

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

	while True:
		pwm_green.ChangeDutyCycle(0)
		pwm_red.ChangeDutyCycle(100)
		time.sleep(4.0)
		pwm_green.ChangeDutyCycle(50)
		time.sleep(2.0)
		pwm_red.ChangeDutyCycle(0)
		time.sleep(4.0)
		pwm_green.ChangeDutyCycle(100)
		pwm_red.ChangeDutyCycle(100)
		time.sleep(2.0)
except KeyboardInterrupt:
	pass

GPIO.cleanup()
