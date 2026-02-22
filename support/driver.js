const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function buildDriver(){
    const options = new chrome.Options();
    // options.addArguments('--headless'); // Descomentar esto para modo headless

    const driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build()

    await driver.manage().setTimeouts({ implicit: 5000 });
    await driver.manage().window().maximize();

    return driver;

}


module.exports = { buildDriver };