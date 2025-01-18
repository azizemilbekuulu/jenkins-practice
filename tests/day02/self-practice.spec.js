import { test, expect } from '@playwright/test';

test.describe("Test autocompletion", () =>{

    test.beforeEach(async ({page}) => {
        await page.goto("https://practice.cydeo.com/");
        

    });
        test("Navigate and verify", async ({page}) => {
         let autoCompleteLink = page.locator("//a[@href='/autocomplete']");       
         let actualText = await autoCompleteLink.innerText();

         console.log(actualText);
         let expectedText= "Autocomplete";
         expect(actualText).toBe(expectedText);
         console.log(actualText===expectedText);
        console.log(expect(actualText).toBe(expectedText));
               


        });







});