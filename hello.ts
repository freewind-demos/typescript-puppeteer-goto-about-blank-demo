import * as puppeteer from 'puppeteer';

async function sleep(ms: number) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, ms);
  })
}

async function run() {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  console.log('open github');
  await page.goto("http://github.com", {waitUntil: 'domcontentloaded'});

  await sleep(1000);

  await page.goto("about:blank");

  await sleep(5000);

  await browser.close();
}

run();
