const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { validUser, invalidUser, edgeCases } = require('../data/testData');

const loginErrors = {
  invalidLogin: 'Epic sadface: Username and password do not match any user in this service',
  emptyUsername: 'Epic sadface: Username is required',
  emptyPassword: 'Epic sadface: Password is required',
};

test.describe('Login Flow Automation', () => {
  let loginPage;
  let productsPage;

  test.beforeEach(async ({ page }) => {
    page.setDefaultTimeout(20000);
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    await loginPage.goto();
  });

  test('Valid Login', async () => {
    await loginPage.login(validUser.username, validUser.password);
    await expect(loginPage.page).toHaveURL(/inventory.html/);
    await productsPage.verifyPage();
    await expect(productsPage.pageHeading).toHaveText('Products');
  });

  test('Invalid Login with wrong credentials', async () => {
    await loginPage.login(invalidUser.username, invalidUser.password);
    await loginPage.expectError(loginErrors.invalidLogin);
    await expect(loginPage.page).toHaveURL(/saucedemo.com\/|login.html/);
  });

  test('Empty username should show error and stay on login page', async () => {
    await loginPage.login(edgeCases.emptyUsername.username, edgeCases.emptyUsername.password);
    await loginPage.expectError(loginErrors.emptyUsername);
    await expect(loginPage.page).toHaveURL(/saucedemo.com\/|login.html/);
  });

  test('Empty password should show error and stay on login page', async () => {
    await loginPage.login(edgeCases.emptyPassword.username, edgeCases.emptyPassword.password);
    await loginPage.expectError(loginErrors.emptyPassword);
    await expect(loginPage.page).toHaveURL(/saucedemo.com\/|login.html/);
  });

  test('Empty username and password should show error', async () => {
    await loginPage.login(edgeCases.emptyBoth.username, edgeCases.emptyBoth.password);
    await loginPage.expectError(loginErrors.emptyUsername);
    await expect(loginPage.page).toHaveURL(/saucedemo.com\/|login.html/);
  });

  test('Special characters in username and password', async () => {
    await loginPage.login(edgeCases.specialChars.username, edgeCases.specialChars.password);
    await loginPage.expectError(loginErrors.invalidLogin);
    await expect(loginPage.page).toHaveURL(/saucedemo.com\/|login.html/);
  });
});
