import { test, expect } from "@playwright/test";

test.describe("Test Group", () => {
  // create beforeEach to navigate to https://practice.cydeo.com/.
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");

    await expect(page).toHaveTitle("Practice");

    expect(await page.title()).toBe("Practice");
  });

  test("Verify checkboxes are checked", async ({ page }) => {
    await page.getByText("Checkboxes").click();
    let firstCheckBox = page.locator("input#box1");
    let secondCheckBox = page.locator("input#box2");

    await firstCheckBox.check();
    await secondCheckBox.check();

    await expect(firstCheckBox).toBeChecked();
    await expect(secondCheckBox).toBeChecked();

    // ----------------------------------------------------------------
    expect (await firstCheckBox.isChecked()).toBeTruthy();
    expect (await secondCheckBox.isChecked()).toBeTruthy();
  });

  test("To verify checkboxes are unchecked", async ({ page }) => {
    await page.getByText("Checkboxes").click();
    let firstCheckBox = page.locator("input#box1");
    let secondCheckBox = page.locator("input#box2");

    await firstCheckBox.uncheck();
    await secondCheckBox.uncheck();

    await expect(firstCheckBox).not.toBeChecked();
    await expect(secondCheckBox).not.toBeChecked();

    // ----------------------------------------------------------------
    expect(await firstCheckBox.isChecked()).toBeFalsy();
    expect(await secondCheckBox.isChecked()).toBeFalsy();
  });

  test("Verify text of the element", async ({ page }) => {
    
    let headerElement = page.locator("//span[@class='h1y']");
    await expect (headerElement).toHaveText("Test Automation Practice");

    let actualText = await headerElement.innerText();
    expect(actualText).toBe("Test Automation Practice");

  });
});
