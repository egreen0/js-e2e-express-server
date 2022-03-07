import {test, expect, Page} from '@playwright/test';

test.beforeEach(async({page}) => {
    await page.goto('https://www.symetrix.co/');
})


test('example test', async ({page}) => {
  await page.screenshot({ path: './images/before.png' })

  expect(page.locator('span.title:has-text("Products")')).not.toBeVisible();

  await page.screenshot({ path: './images/after.png' })
});