

import {test} from "@playwright/test";

test("simple google test example", async ({ page }) => {
    //test codes
    await page.goto("https://google.com")
    await page.waitForTimeout(3000)

    await page.click("//button[@id='L2AGLb']");

    let searchBox = page.locator("//textarea[@id='APjFqb']");
    //let searchBox = await page.$$("//textarea[@class='gLFyf']");

    //await searchBox.type("CYDEO");

    await searchBox.fill("CYDEO");

    await page.waitForTimeout(3000)

    await searchBox.press("Enter");

    await page.waitForTimeout(3000);

});

/*
<textarea class="gLFyf" aria-controls="Alh6id" aria-owns="Alh6id" autofocus="" title="Search" value="" jsaction="paste:puy29d;" aria-label="Search" placeholder="" aria-autocomplete="both" aria-expanded="true" aria-haspopup="false" autocapitalize="off" autocomplete="off" autocorrect="off" id="APjFqb" maxlength="2048" name="q" role="combobox" rows="1" spellcheck="false" data-ved="0ahUKEwjK7Z7M3tSKAxXzVUEAHX3xLE4Q39UDCAc" aria-activedescendant="" style=""></textarea>
*/

//textarea[@class='gLFyf']