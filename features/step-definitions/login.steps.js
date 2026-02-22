const { Given, When, Then } = require('@cucumber/cucumber');
const { LoginPage } = require('../../pages/LoginPage');
const{ expect } = require('chai');

Given('el usuario está en la página de login', async function(){
    this.loginPage = new LoginPage(this.driver);
    await this.loginPage.navigate();
});

When('ingresa usuario {string} y contraseña {string}', async function(username,password){
    await this.loginPage.enterUserName(username);
    await this.loginPage.enterPassword(password);
    await this.loginPage.clickLogin();
});

Then('debe ver un mensaje de éxito', async function (){
    const message = await this.loginPage.getSuccessMessage();
    expect(message).to.include('You logged into a secure area!')
});

Then('debe ver un mensaje de error', async function(){
    const message =await this.loginPage.getErrorMessage();
    expect(message).to.include('Your username is invalid!')
})