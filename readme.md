# Network Speed Monitor

Network Speed monitor using Puppeteer , Json-server and fast.com

## Installation

1. Install NodeJS/npm 
2. Install puppeteer

```bash
sudo npm install -g puppeteer --unsafe-perm=true -allow-root && sudo apt install chromium-browser -y
```
3. Install Json-server
```bash
npm install -g json-server
```



## Usage
Make sure Json-server runs after reboot and cron is set to run every 10 mins
1. Open terminal and run
   ```bash
   sudo nano /etc/rc.local
   ```
2. To turn on json db server add the below line and save the file
      ```bash
     json-server /home/pi/Desktop/db.json
     ```
3. Add cron to run test every 10 mins.
   ```bash
   sudo crontab -e
   ```
4. Add the below line  and save and exit
   ```bash
   */10 * * * * node /home/pi/Desktop/fast.js
   ```

## Contributing
Pull requests are welcome. 
Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
