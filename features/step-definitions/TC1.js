const {Given, Then, When, Before, After} = require('@cucumber/cucumber')
const assert = require('assert')
const webdriver = require('selenium-webdriver');
var faker = require('faker');
//SETUP CHROME DRIVER
var chrome = require('selenium-webdriver/chrome');
const {By} = require('selenium-webdriver');
var options   = new chrome.Options().headless(); // desbilitando verifica o teste real

let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .withCapabilities(webdriver.Capabilities.chrome())
    .setChromeOptions(options)// desbilitando verifica o teste real

    .build();

// SETUP FIREFOX DRIVER 
// const firefox = require('geckodriver');
// const {By, Builder} = require('selenium-webdriver');
// let driver = new Builder()
//          .forBrowser('firefox')
//          .build();
Scenario: 'cadastro'

Given('visitar o site Publicazo',{timeout: 20 * 15000}, async () => {    
    
    await driver.get("http://publicazo.insprak.com/")
    await driver.manage().window().setRect({ width: 1280, height: 777 })
    await driver.findElement(By.linkText("Cadastre-se")).click()
    
          });

When('preencho os campos de teste', {timeout: 15 * 1000}, async () => {
    await driver.findElement(By.id("user_fullname")).sendKeys("Ana Maria")
    await driver.findElement(By.id("user_email")).click()
    await driver.findElement(By.id("user_email")).sendKeys(faker.internet.email())
    await driver.findElement(By.id("user_password")).sendKeys("112233")
    await driver.findElement(By.id("user_password_confirmation")).sendKeys("112233")
    await driver.findElement(By.name("commit")).click()
          });

Then('aparece uma mensagem de sucesso', async () => {
    
    assert(await driver.findElement(By.css(".toast-message")).getText() == "Bem-vindo! Você se registrou com sucesso.")
    
          });
