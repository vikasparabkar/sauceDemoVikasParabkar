const env = process.env.TEST_ENV || 'staging';

const baseUrls = {
  staging: 'https://www.saucedemo.com',
};

module.exports = {
  env,
  baseURL: baseUrls[env],
  defaultTimeout: 30000,
  credentials: {
    valid: { username: 'standard_user', password: 'secret_sauce' },
    lockedUser: { username: 'locked_out_user', password: 'secret_sauce' },
    invalid: { username: 'invalid_user', password: 'wrong_password' },
  },
  expectedTitle: 'Swag Labs',
};
