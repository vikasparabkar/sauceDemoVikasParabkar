const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { CartPage } = require('../pages/CartPage');
const { validUser, cartItem } = require('../data/testData');

const productLabel = cartItem.expectedLabel;

test.describe('Cart Flow Automation', () => {
  test('Add item to cart and verify badge and cart details', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    await loginPage.goto();
    await loginPage.login(validUser.username, validUser.password);

    await expect(page).toHaveURL(/inventory.html/);
    await productsPage.verifyPage();

    await productsPage.addItemToCart(cartItem.addButton);
    await expect(productsPage.shoppingCartBadge).toHaveText('1');

    await productsPage.openCart();
    await cartPage.verifyCartContainsItem(productLabel);
  });
});
