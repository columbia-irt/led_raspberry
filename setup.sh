# this file cointains all required installations in order to get pi running the LED project
#!/bin/sh

echo "Script running.."
sudo apt-get update

curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
node -v
npm install express
sudo apt-get install pigpio
npm install pigpio
