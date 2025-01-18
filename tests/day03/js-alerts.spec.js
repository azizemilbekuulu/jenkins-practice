import { test } from "@playwright/test";

test.describe("Test Group", () => {
  //create before each to navigate to this: https://practice.cydeo.com/javascript_alerts
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/javascript_alerts");
  });

  test("Regular Alert", async ({ page }) => {
    //after clicking the alert is handled automatically by playwright
    //BUT to handle alert MANUALLY
    page.on("dialog", async (alert) => {
      console.log(`Alert Message: ${alert.message()}`);
      // await page.waitForTimeout(3000);
      await alert.accept();
    });

    let clickForJSAlertButton = page.locator("//button[contains(@class, 'btn-primary') and @onclick='jsAlert()']");
    await clickForJSAlertButton.click();
    await page.waitForTimeout(3000);
  });

  test("Confirmation Alert", async ({ page }) => {
    page.on("dialog", async (alert) => {
      console.log(`Alert Message: ${alert.message()}`);
      await page.waitForTimeout(3000);
      await alert.dismiss();
    });
    let clickJSConfirmAlert = page.locator("button[onclick='jsConfirm()']");
    await clickJSConfirmAlert.click();
    await page.waitForTimeout(3000);
  });

  test("Prompt Alert", async ({ page }) => {
    page.on("dialog", async (alert) => {
      console.log(`Alert Message: ${alert.message()}`);
      await page.waitForTimeout(3000);
      await alert.accept("CYDEO"); //whatever string you give here will be typed into the alert before accepting/dismissing.
    });

    let clickForJSPromptAlertButton = page.locator("button.btn-primary[onclick='jsPrompt()']");
    await clickForJSPromptAlertButton.click();
  });
});
