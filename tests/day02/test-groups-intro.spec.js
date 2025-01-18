import { test } from "@playwright/test";

test.describe("", () => {
  test.beforeAll(async () => {
    console.log("BEFORE ALL test cases");
  });

  test.afterAll(async () => {
    console.log("AFTER all test cases");
  });

  test.beforeEach(async () => {
    console.log("Before each test case");
  });

  test.afterEach(async () => {
    console.log("After each test case");
  });

  test("Test case 1", () => {
    console.log("Test case 1 executed");
  });
  test("Test case 2", () => {
    console.log("Test case 2 executed");
  });
  test("Test case 3", () => {
    console.log("Test case 3 executed");
  });
});
