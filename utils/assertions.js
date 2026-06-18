const { expect } = require('@playwright/test');

async function expectVisible(locator, text) {
  await expect(locator).toBeVisible();
  if (text) {
    await expect(locator).toHaveText(text);
  }
}

module.exports = {
  expectVisible,
};
