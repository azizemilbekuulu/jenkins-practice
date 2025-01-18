import { test } from "@playwright/test";

test("@env-test Testing environment variables", async ({ page }) => {
  console.log(process.env.PRACTICE_USERNAME);
  console.log(process.env.PRACTICE_PASSWORD);

  console.log(`username is ${process.env.PRACTICE_USERNAME}`);
  console.log(`password is ${process.env.PRACTICE_PASSWORD}`);

});


test("Bypass authentication by encoding credentials base64 format", async ({
  page,
}) => {
    
  let encodedcredential = Buffer.from(
    `${process.env.PRACTICE_USERNAME}:${process.env.PRACTICE_PASSWORD}`).toString("base64");

  await page.setExtraHTTPHeaders({
    Authorization: `Basic ${encodedcredential}`,
  });

  await page.goto("https://practice.cydeo.com/basic_auth");

  await page.waitForTimeout(3000);
});