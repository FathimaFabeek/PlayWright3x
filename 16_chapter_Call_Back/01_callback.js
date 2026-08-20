function placeOrder1(item, callback)
{
console.log("order placed........");
callback();
}
//calling this fn
placeOrder1("burger", function()// it is the anonyms fn to call calback() fn
{
    console.log("order is ready...");
});
//we can create function to call callback in different ways
//first way
//define
function print()
{
    console.log("normal fn-done with order..");
}
//to call callback()
placeOrder1("burger",print);
// second way-arrow fn
placeOrder1("burger", ()=>{
    console.log("arrow function to call with order");
});

//example in playwright.dev
//import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });