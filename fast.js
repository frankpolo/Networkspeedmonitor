const puppeteer = require("puppeteer");
(async () => {
  let url = "https://fast.com/";
  const browser = await puppeteer.launch({ headless: true,
					executablePath: '/usr/bin/chromium-browser',
					args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.goto(url);
  
  await page.waitForTimeout(90000)

  await page.setViewport({ width: 1366, height: 657 });
  await page.waitForSelector('#show-more-details-link');
  await page.click('#show-more-details-link');
  await page.waitForSelector('#speed-progress-indicator-icon');
  const payload = await page.evaluate(() => {
    return {
      server_locations: document.getElementById('server-locations').textContent,
      user_loc: document.getElementById('user-location').textContent,
      user_ip: document.getElementById('user-ip').textContent,
      user_isp: document.getElementById('user-isp').textContent,
      dl_speed: document.getElementById('speed-value').textContent,
      ul_speed: document.getElementById('upload-value').textContent,
      dl_data: document.getElementById('down-mb-value').textContent,
      ul_data: document.getElementById('up-mb-value').textContent,
      latency_unloaded: document.getElementById('latency-value').textContent,
      latency_loaded: document.getElementById('bufferbloat-value').textContent,
      dl_speed_unit: document.getElementById('speed-units').textContent,
      ul_speed_unit: document.getElementById('upload-units').textContent,
    };
  });
  payload.datetime = new Date();
  await browser.close();
  console.log('Payload:', payload);
  var XMLHttpRequest = require('xhr2');
  var url4 = "http://localhost:3000/posts";
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url4);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

  xhr.send(JSON.stringify(payload, null, 4));

 
  
  
})();
