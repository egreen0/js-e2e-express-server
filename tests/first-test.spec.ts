import {test, expect, Page} from '@playwright/test';

test.beforeEach(async({page}) => {
    await page.goto('localhost:8080');
})


test('example test', async ({page}) => {
  await page.type("#name", "Eli");
  await page.type("#mail", "myemail@123.com");
  await page.type("#pwd", "Password");

  await page.selectOption("#card", "mc");
  await page.type("#number", "1234123412341234");
  await page.type("#expiration", "03/03");

  await page.screenshot({ path: './images/before.png' })

  await page.click("button:has-text('Validate')")

  await page.screenshot({ path: './images/after.png' })

  await page.close()
});