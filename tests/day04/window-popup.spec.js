import { test , expect } from '@playwright/test';

test('Window popup practice', async ({ page }) => {
    //creating event listener for monitoring window popups
    //FIRST PAGE 
    let promisedNewPageEvent = page.waitForEvent("popup") //<-- although promise, NO AWAIT keyword here.

    await page.goto("https://practice.cydeo.com/windows");

    page.click("text='Click Here'"); //triggers the popup event
    
    //SECOND PAGE POPPED UP BELOW
    let newpage = await promisedNewPageEvent; //await for the promise to be resolved

    await expect(newpage).toHaveTitle("New Window");
    await expect(page).toHaveTitle("Windows");
     
    let firstWindowElement = page.getByText("Opening a new window");
    await expect(firstWindowElement).toBeVisible();
   
    //TO LOCATE ELEMENT FROM 2ND TO 3RD. 
    let secondWindowElement = newpage.getByText("New Window");
    await expect(secondWindowElement).toBeVisible();

    //if you want to bring a specific page to front: 
    // --> await page.bringToFront();
    
});