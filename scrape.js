const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  try {
    const url = process.env.SCRAPE_URL || 'https://www.tripadvisor.in';
    console.log('Scraping:', url);

    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });

    const data = await page.evaluate(() => {
      return {
        title: document.title,
        heading: document.querySelector('h1')?.innerText || 'No H1 found'
      };
    });

    fs.writeFileSync('scraped_data.json', JSON.stringify(data, null, 2));
    console.log('Scraping done!');

    await browser.close();
  } catch (err) {
    console.error('❌ Error during scraping:', err);
    process.exit(1);
  }
})();