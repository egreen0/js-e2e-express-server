import {test, expect, Page} from '@playwright/test';

test.beforeEach(async({page}) => {
    await page.goto('https://www.symetrix.co/');
})


test('example test', async ({page}) => {
  await page.screenshot({ path: './images/before.png' })

  expect(await page.title).toBe("Symetrix - Inspired AV Processing & Control Solutions")

  await page.click("button:has-text('Validate')")

  await page.screenshot({ path: './images/after.png' })
});