Step 1: Install Json Server
  npm install -g json-server
Step 2: Make sure it runs after reboot
  a. Open terminal and run  "sudo nano /etc/rc.local"
  b. To turn on json db server add the below line and save the file
      json-server /home/pi/Desktop/db.json
Step 3: Add the cron to run the test every 10 mins
  a. Open terminal and run  "sudo crontab -e"
  b. Add  this "*/10 * * * * node /home/pi/Desktop/fast.js"
  c. save and Exit the crontab
