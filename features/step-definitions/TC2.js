const {Given, Then, When, Before, After} = require('@cucumber/cucumber')
const assert = require('assert')
const webdriver = require('selenium-webdriver');

//SETUP CHROME DRIVER
var chrome = require('selenium-webdriver/chrome');
const {By} = require('selenium-webdriver');
var options   = new chrome.Options().headless();
var faker = require('faker');
let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .withCapabilities(webdriver.Capabilities.chrome())
    .setChromeOptions(options)
    .build();

// SETUP FIREFOX DRIVER 
// const firefox = require('geckodriver');
// const {By, Builder} = require('selenium-webdriver');
// let driver = new Builder()
//          .forBrowser('firefox')
//          .build();
Scenario: 'Scenario: O usuário não preenche nenhum campo'

Given('Usuario no campo cadastro', {timeout: 10 * 10000}, async () => {    
    
    await driver.get("http://publicazo.insprak.com/")
    
    await driver.findElement(By.linkText("Cadastre-se")).click()
    
          });

When('Nao preenche nenhum campo',{timeout: 10 * 10000}, async () => {

    await driver.findElement(By.name("commit")).click()

          });

Then('O sistema exibe uma mensagem de erro', async () => {
    
    assert(await driver.findElement(By.css(".toast:nth-child(1)")).getText() == "Fullname não pode ficar em branco")
    assert(await driver.findElement(By.css(".toast:nth-child(2) > .toast-message")).getText() == "Password não pode ficar em branco")
    
          });
