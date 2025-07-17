import { test, expect } from "@playwright/test";        
import { beforeEach } from "node:test";
// const { test, expect } = require('@playwright/test'); // for CommonJS

test.describe("Locator Tests", () => {
    test.beforeEach(async ({page}) => {
        // Navigate to the home page before each test
        await page.goto("https://uk.pandora.net/");

        // Accept cookies if the popup appears
        const cookiesBanner = await page.locator('id=onetrust-banner-sdk');
        if (await cookiesBanner.isVisible()) {
            await page.click('id=onetrust-accept-btn-handler');
        }

    });

    test("Gift Card Test", async ({page}) => {
        await page.goto("https://uk.pandora.net/");
        
        // Check if Search Icon is present
        const searchIcon = await page.locator('data-auto=inptSearchBar');
        await expect(searchIcon).toBeVisible();

        // Search "Gift Card"
        await searchIcon.fill("Gift Card");
        await searchIcon.press("Enter");

        // Save name of all the products
        const productNames = await page.locator("data-auto=btnPLPProductName").allTextContents();
        console.log("Product Names:", productNames);
    });

    test("Purchase EGC Test", async ({page}) => {
        // const product_egc = await page.locator("data-auto=btnPLPProductName").hasText("Pandora E-Gift Card");
        const product_egc = await page.locator("data-auto=btnPLPProductName").filter({ hasText: "Pandora E-Gift Card" });
        // Check if the product is visible and click on it
        await expect(product_egc).toBeVisible().click();
    })
})

