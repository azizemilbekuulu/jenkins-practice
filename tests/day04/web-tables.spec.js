import { test, expect } from "@playwright/test";

test("Web Table Practice @smoke", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/web-tables");

  let table = page.locator("//table[@id='ctl00_MainContent_orderGrid']");

  let rows = await table.locator("//tr").all();

  let columns = await table.locator("//th").all();

  let columnNames = await table.locator("//td").all();

  let cells = await table.locator("//td").all();

  expect(rows.length).toBe(9);
  expect(columns.length).toBe(13);
  expect(columnNames.length).toBe(104);

  for (let cell of cells) {
    // /console.log(await cell.textContent());
    let cellText = await cell.innerText();
    console.log(cellText);
  }
});

test("Web Table Practice2", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/web-tables");

  let table = page.locator("//table[@id='ctl00_MainContent_orderGrid']");

  let rows = await table.locator("//tr").all();
  // create a loop that can print each cell's data of each row.
  for (let row of rows) {
    let cells = await row.locator("//td").all();
    if (cells.length > 2) {
      // Ensure there are at least 3 cells to exclude first and last
      for (let i = 1; i < cells.length - 1; i++) {
        let cellText = await cells[i].innerText();
        console.log(cellText);
      }
      console.log("-----------------------------");
    }
    //now the loop which will exclude the last and the first cell information done with AI.
  }
  for (let row of rows) {
    let cells = await row.locator("//td").all();
    if (cells.length > 2) {
      // Ensure there are at least 3 cells to exclude first and last
      for (let i = 1; i < cells.length - 1; i++) {
        let cellText = await cells[i].innerText();
        console.log(cellText);
      }
      console.log("-----------------------------");
    }
  }
});

test("Web Table Practice3", async ({ page }) => {
  let table = page.locator("//table[@id='ctl00_MainContent_orderGrid']");

  let checkboxes = await table.locator("//input[@type='checkbox']").all();

  for (let checkbox of checkboxes) {
    await checkbox.check();
    expect(checkbox).toBeChecked();
  }
});
