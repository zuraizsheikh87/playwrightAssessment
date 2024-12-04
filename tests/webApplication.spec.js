const { test, expect } = require('@playwright/test');
const { loginToAsana } = require('../util/util.js');

test.describe('Automation Tests for web application', () => {
    test.beforeEach(async ({ page }) => {
        await loginToAsana(page);
    });

    test('Verify "Implement user authentication" is in the "To Do" column', async ({ page }) => {
        const ele = await page.locator(`xpath=//h2[./text()='Web Application']`);
        await ele.click();
        const heading = 'Implement user authentication';
        const listitemsText = await page.locator(`xpath=//h2[./text()='To Do']//following-sibling::div//h3`).allTextContents();
        const itemFound = listitemsText.some(text => text.includes(heading));
        await expect(itemFound).toBe(true);
        await expect(page.locator(`xpath=//h2[./text()='To Do']//following-sibling::div//h3[./text()='Implement user authentication']//parent::div[1]/div/span`)).toHaveText([
            'Feature',
            'High Priority'
        ]);
    });

    test('Verify "Fix navigation bug" is in the "To Do" column', async ({ page }) => {
        const ele = await page.locator(`xpath=//h2[./text()='Web Application']`);
        await ele.click();
        const heading = 'Fix navigation bug';
        const listitemsText = await page.locator(`xpath=//h2[./text()='To Do']//following-sibling::div//h3`).allTextContents();
        const itemFound = listitemsText.some(text => text.includes(heading));
        await expect(itemFound).toBe(true);
        await expect(page.locator(`xpath=//h2[./text()='To Do']//following-sibling::div//h3[./text()='Fix navigation bug']//parent::div[1]/div/span`)).toHaveText([
            'Bug'
        ]);
        
    });

    test('Verify "Design system updates" is in the "In Progress" column', async ({ page }) => {
        const ele = await page.locator(`xpath=//h2[./text()='Web Application']`);
        await ele.click();
        const heading = '';
        const listitemsText = await page.locator(`xpath=//h2[./text()='In Progress']//following-sibling::div//h3`).allTextContents();
        const itemFound = listitemsText.some(text => text.includes(heading));
        await expect(itemFound).toBe(true);
        await expect(page.locator(`xpath=//h2[./text()='In Progress']//following-sibling::div//h3[./text()='Design system updates']//parent::div[1]/div/span`)).toHaveText([
            'Design'
        ]);

    });

});