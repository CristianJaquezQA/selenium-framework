const { Before, After, setDefaultTimeout, Status } = require('@cucumber/cucumber');
const { buildDriver } = require('./driver');

setDefaultTimeout(30000);

Before(async function () {
  this.driver = await buildDriver();
});

After(async function (scenario) {
  try {
    if (scenario.result?.status === Status.FAILED) {
      const screenshotBase64 = await this.driver.takeScreenshot();
      await this.attach(Buffer.from(screenshotBase64, 'base64'), 'image/png');
    }
  } finally {
    if (this.driver) {
      await this.driver.quit();
    }
  }
});