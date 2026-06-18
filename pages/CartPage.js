const { expect } = require('@playwright/test');

class CartPage {
  constructor(page) {
    this.page = page;
    this.cartTitle = page.locator('.title');
    this.cartItems = page.locator('.cart_item');
    this.cartItemName = page.locator('.inventory_item_name');
    this.continueShoppingButton = page.locator('#continue-shopping');
  }

  async verifyCartContainsItem(itemName) {
    await expect(this.cartTitle).toHaveText('Your Cart');
    await expect(this.cartItems).toHaveCount(1);
    await expect(this.cartItemName).toHaveText(itemName);
  }
}

module.exports = { CartPage };
