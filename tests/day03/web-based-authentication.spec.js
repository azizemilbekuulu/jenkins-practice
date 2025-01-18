import { test } from "@playwright/test";

test("Bypass authentication by embedding the credentials in the URL", async ({ page }) => {
  //https:admin:admin@practice.cydeo.com
  await page.goto("https:admin:admin@practice.cydeo.com");
});

test("Bypass authentication by encoding credentials base64 format", async ({ page }) => {
  let encodedcredential = Buffer.from("admin:admin").toString("base64");

  await page.setExtraHTTPHeaders({'Authorization': `Basic ${encodedcredential}`});

  await page.goto("https://practice.cydeo.com/basic_auth");

  await page.waitForTimeout(3000);
});
 