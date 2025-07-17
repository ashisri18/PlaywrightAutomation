const {test, expect} = require('@playwright/test');

test('Home Page Test', async ({page}) => {
  // Navigate to the home page
  await page.goto('https://demoblaze.com/');

  // Check if the title is correct
  await expect(page).toHaveTitle('STORE');

  // Check if the main heading is present
//   const mainHeading = page.locator('h1');
//   await expect(mainHeading).toHaveText('Welcome to the Home Page');

//   // Check if the navigation links are present
//   const navLinks = page.locator('nav a');
//   await expect(navLinks).toHaveCount(3);
//   await expect(navLinks.nth(0)).toHaveText('Home');
//   await expect(navLinks.nth(1)).toHaveText('About');
//   await expect(navLinks.nth(2)).toHaveText('Contact');

  await page.goto('https://uk.pandora.net/');
  const pageTitle = await page.title();
  expect(pageTitle).toContain('Official Pandora™ UK');
  await expect(page.locator('h1')).toHaveText('Pandora');
  await page.close();
})
