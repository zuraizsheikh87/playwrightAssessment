const { chromium } = require('playwright');
async function loginToAsana(page) {
    const loginURL = 'https://animated-gingersnap-8cf7f2.netlify.app/';
    const email = 'admin';
    const password = 'password123';

    await page.goto(loginURL); await page.fill(`#username`, email);
    await page.fill(`#password`, password);
    await page.click(`text=Sign in`);
}

module.exports = { loginToAsana };