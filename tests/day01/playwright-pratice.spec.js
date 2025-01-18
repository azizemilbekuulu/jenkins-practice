import { test } from "@playwright/test";

test("Google test", async ({ page }) => {
  // navigate to google url
  await page.goto("https://google.com");
  // wait for 3 seconds
  await page.waitForTimeout(3000);
});
