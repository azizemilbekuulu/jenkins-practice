import { test, expect } from "@playwright/test";

test("Getting the title", async ({ page }) => {
  // Test steps go here
  //navigate to url https://practice.cydeo.com/
  await page.goto("https://practice.cydeo.com/");
  //await page.waitForTimeout(3000);
  let actualTitle = await page.title();
  console.log(actualTitle);
  // assert the title contains 'Cydeo'
  //await expect(page).toHaveTitle(/Practice/);
});

test("Getting the URL", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/");

  let actualUrl = page.url();

  console.log(actualUrl);
});


test("Set the window size", async ({ page }) => {
  // pause for 3 seconds
  await page.goto("https://practice.cydeo.com");
  await page.waitForTimeout(3000);

  page.setViewportSize({ width: 1280, height: 800 });

  await page.waitForTimeout(3000);
});
