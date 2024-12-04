const { test, expect } = require('@playwright/test');
const { loginToAsana } = require('../util/util.js');

test.describe('Automation Tests for mobile application', () => {
    test.beforeEach(async ({ page }) => {
        await loginToAsana(page);
    });

    test('Verify "Push notification system" is in the "To Do" column', async ({ page }) => {
        const ele = await page.locator(`xpath=//h2[./text()='Mobile Application']`);
        await ele.click();
        const heading = 'Push notification system';
        const listitemsText = await page.locator(`xpath=//h2[./text()='To Do']//following-sibling::div//h3`).allTextContents();
        const itemFound = listitemsText.some(text => text.includes(heading));
        await expect(itemFound).toBe(true);
        await expect(page.locator(`xpath=//h2[./text()='To Do']//following-sibling::div//h3[./text()='Push notification system']//parent::div[1]/div/span`)).toHaveText([
            'Feature'
        ]);
    });

    test('Verify "Offline mode" is in the "In Progress" column', async ({ page }) => {
        const ele = await page.locator(`xpath=//h2[./text()='Mobile Application']`);
        await ele.click();
        const heading = 'Offline mode';
        const listitemsText = await page.locator(`xpath=//h2[./text()='In Progress']//following-sibling::div//h3`).allTextContents();
        const itemFound = listitemsText.some(text => text.includes(heading));
        await expect(itemFound).toBe(true);
        await expect(page.locator(`xpath=//h2[./text()='In Progress']//following-sibling::div//h3[./text()='Offline mode']//parent::div[1]/div/span`)).toHaveText([
            'Feature',
            'High Priority'
        ]);

    });

    test('Verify "App icon design" is in the "Done" column', async ({ page }) => {
        const ele = await page.locator(`xpath=//h2[./text()='Mobile Application']`);
        await ele.click();
        const heading = 'App icon design';
        const listitemsText = await page.locator(`xpath=//h2[./text()='Done']//following-sibling::div//h3`).allTextContents();
        const itemFound = listitemsText.some(text => text.includes(heading));
        await expect(itemFound).toBe(true);
        await expect(page.locator(`xpath=//h2[./text()='Done']//following-sibling::div//h3[./text()='App icon design']//parent::div[1]/div/span`)).toHaveText([
            'Design'
        ]);

    });

});