const { expect } = require('@playwright/test');

class ProductsPage {
  constructor(page) {
    this.page = page;
    this.pageHeading = page.locator('.title');
    this.productCards = page.locator('.inventory_item');
    this.headerLogo = page.locator('.app_logo');
    this.shoppingCartBadge = page.locator('.shopping_cart_badge');
    this.cartLink = page.locator('.shopping_cart_link');
    this.productSection = page.locator('.inventory_list');
    this.menuButton = page.locator('#react-burger-menu-btn');
    this.logoutLink = page.locator('#logout_sidebar_link');
  }

  async verifyPage() {
    await expect(this.pageHeading).toBeVisible();
    await expect(this.headerLogo).toBeVisible();
    await expect(this.productSection).toBeVisible();
  }

  async addItemToCart(selector) {
    await this.page.locator(selector).click();
  }

  async openCart() {
    await this.cartLink.click();
  }

  async logout() {
    await this.menuButton.click();
    await this.logoutLink.click();
  }
}

module.exports = { ProductsPage };
