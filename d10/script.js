const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

async function testCalculator() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Open the calculator HTML page
    await driver.get('file://' + __dirname + '/index.html'); // Replace with the actual path to your HTML file

    // Perform addition test
    await driver.findElement(By.id('num1')).sendKeys('5');
    await driver.findElement(By.id('num2')).sendKeys('3');
    await driver.findElement(By.xpath('//button[text()="Add"]')).click();
    let result = await driver.findElement(By.id('result')).getText();
    assert.strictEqual(result, 'Result: 8', 'Addition result is incorrect');

    // Perform subtraction test
    await driver.findElement(By.id('num1')).clear();
    await driver.findElement(By.id('num2')).clear();
    await driver.findElement(By.id('num1')).sendKeys('10');
    await driver.findElement(By.id('num2')).sendKeys('4');
    await driver.findElement(By.xpath('//button[text()="Subtract"]')).click();
    result = await driver.findElement(By.id('result')).getText();
    assert.strictEqual(result, 'Result: 6', 'Subtraction result is incorrect');

  } catch (err) {
    console.error('Test failed', err);
  } finally {
    await driver.wait();
    await driver.quit();
  }
}

testCalculator();
