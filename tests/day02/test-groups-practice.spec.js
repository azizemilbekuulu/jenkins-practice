import { test } from "@playwright/test";

test.describe("Pratice.cydeo", () => {
  test.beforeEach(async ({ page }) => {
    //page fixture is used for automation
    await page.goto("https://practice.cydeo.com/");
  });
  test.afterEach(async ({ page }) => {
    await page.waitForTimeout(3000);
  });

  test("title of page", async ({ page }) => {
    console.log(await page.title());
  });

  test("url of page", async ({ page }) => {
    console.log(page.url());
  });
});
