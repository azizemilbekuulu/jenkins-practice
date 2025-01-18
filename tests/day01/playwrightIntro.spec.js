//const {test} = require("@playwright/test");

import {test} from "@playwright/test";

test("simple google test example", async ({ page }) => {
    //test codes

    await page.goto("https://google.com")
    await page.waitForTimeout(3000)
});