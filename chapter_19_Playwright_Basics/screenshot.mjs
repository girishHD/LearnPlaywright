import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.goto('https://google.com');
await page.screenshot({ path: 'google.png', fullPage: true });
await browser.close();
