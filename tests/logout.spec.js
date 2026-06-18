const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { validUser } = require('../data/testData');

const config = require('../config/config');

test.describe('Logout Flow Automation', () => {
  test('Logout redirects to login and blocks protected page access', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    await loginPage.goto();
    await loginPage.login(validUser.username, validUser.password);
    await expect(page).toHaveURL(/inventory.html/);

    await productsPage.logout();
    await expect(page).toHaveURL(/login.html|\/$/);
    await expect(loginPage.loginButton).toBeVisible();

    await page.goto(`${config.baseURL}/inventory.html`);
    await expect(page).toHaveURL(/login.html|\/$/);
    await expect(loginPage.loginButton).toBeVisible();
  });
});
