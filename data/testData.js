module.exports = {
  validUser: {
    username: 'standard_user',
    password: 'secret_sauce',
  },
  lockedUser: {
    username: 'locked_out_user',
    password: 'secret_sauce',
  },
  invalidUser: {
    username: 'wrong_user',
    password: 'wrong_password',
  },
  edgeCases: {
    emptyUsername: { username: '', password: 'secret_sauce' },
    emptyPassword: { username: 'standard_user', password: '' },
    emptyBoth: { username: '', password: '' },
    specialChars: { username: '!@#$%^&*()', password: '<script>alert(1)</script>' },
  },
  cartItem: {
    name: 'Sauce Labs Backpack',
    addButton: '#add-to-cart-sauce-labs-backpack',
    expectedLabel: 'Sauce Labs Backpack',
  },
};
