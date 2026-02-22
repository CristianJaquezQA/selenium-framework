const { By, until } = require('selenium-webdriver')


class LoginPage{
    constructor(driver){  
    this.driver = driver;
    this.url = 'https://the-internet.herokuapp.com/login'
}

    async navigate(){
        await this.driver.get(this.url);
    }
    async enterUserName(username){
        const input = await this.driver.findElement(By.id('username'));
        await input.sendKeys(username);
    }
    async enterPassword(password){
        const input = await this.driver.findElement(By.id('password'));
        await input.sendKeys(password);
    }
    async clickLogin(){
        await this.driver.findElement(By.css('#login button')).click();
    }
    async getSuccessMessage(){
        const alert = await this.driver.wait(
            until.elementLocated(By.css('.flash.success')),
            10000
        );
        return alert.getText();
    }
    async getErrorMessage(){
        const alert = await this.driver.wait(
            until.elementLocated(By.css('.flash.error')),
            10000
        )
        return alert.getText();
    }
}

module.exports = { LoginPage }