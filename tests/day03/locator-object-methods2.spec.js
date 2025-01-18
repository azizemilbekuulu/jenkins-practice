import { test } from "@playwright/test";

test.describe("New Test Group", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://practice.cydeo.com/");
    });
  test("innerText()", async ({ page }) => {
    //locate header element: //h1/span[@class='h1y']
    let actualHeaderText = await page.locator("//h1/span[@class='h1y']").innerText();
    console.log(actualHeaderText);
  });


  test("inputValue(): only works with <input>, <textarea>, <select> tags and retrieves the input value", async ({ page }) => {
    let inputLink = page.locator("//a[text()='Inputs']");
    await inputLink.click();

    let inputBox = page.locator("//input[@type='number']");

        await page.waitForTimeout(3000);

        await inputBox.fill("123");

         await page.waitForTimeout(3000);

         let actualInput = await inputBox.inputValue();
         console.log(actualInput);

  });


  test("getAttribute(): retrievs the attribute value", async ({ page }) => {
    let abTestinLink = page.locator("text='A/B Testing'");
    let hrefLink = await abTestinLink.getAttribute("href");

    console.log(hrefLink);

  


  });
});
