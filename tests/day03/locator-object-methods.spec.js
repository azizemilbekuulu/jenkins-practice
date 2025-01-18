import { test } from "@playwright/test";

test.describe("Test group", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
  }); // no tear down needed in playwright as it it gets automatically closed when the test suite finishes

  test("Check: checks radio button and check boxes if they haven't been checked yet", async ({
    page,
  }) => {
    let checkboxesLink = page.locator("//a[text()='Checkboxes']");
    await checkboxesLink.click();
    

    let checkBox1 = page.locator("//input[@id='box1']");

    await checkBox1.check(); //checks the checkbox if it hasn't been checked//+

    await page.waitForTimeout(3000);
  });

  test("Uncheck: Unchecks radio button and check boxes if they haven't been unchecked yet", async ({
    page,
  }) => {
    let checkboxesLink = page.locator("//a[text()='Checkboxes']");
    await checkboxesLink.click();

    await page.waitForTimeout(3000);

    let checkBox2 = page.locator("//input[@id='box2']");

    await checkBox2.uncheck(); //unchecks the checkbox if it has been checked//

    await page.waitForTimeout(3000);
  });

  test("Select Option", async ({ page }) => {
    let dropdownLink = page.getByText("Dropdown");
    dropdownLink.click();
    await page.waitForTimeout(3000);

    let simpleDropdownLink = page.locator("//select[@id='dropdown']");

    //await simpleDropdownLink.selectOption("1"); //selecting by the value
    //simpleDropdownLink.selectOption({ label: "Option 1" }); //selecting by text
    await simpleDropdownLink.selectOption({ index: 1 }); //selecting by value
    await page.waitForTimeout(3000);

});
  
});
