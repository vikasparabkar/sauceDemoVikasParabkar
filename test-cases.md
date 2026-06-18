# Test Case Document

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority | Type |
| --- | --- | --- | --- | --- | --- | --- |
| TC_LOGIN_001 | Valid login with correct credentials | User is on login page | Enter valid username and password, click Login | User is redirected to inventory page, dashboard heading visible | High | Positive |
| TC_LOGIN_002 | Invalid login with wrong credentials | User is on login page | Enter invalid username/password, click Login | Error message displayed, login page remains | High | Negative |
| TC_LOGIN_003 | Login with empty username | User is on login page | Leave username blank, enter password, click Login | Required username error displayed, no navigation | Medium | Edge Case |
| TC_LOGIN_004 | Login with empty password | User is on login page | Enter username, leave password blank, click Login | Required password error displayed, no navigation | Medium | Edge Case |
| TC_LOGIN_005 | Login with empty username and password | User is on login page | Leave both credentials blank, click Login | Required username error displayed, no navigation | Medium | Edge Case |
| TC_LOGIN_006 | Login with special character credentials | User is on login page | Enter special characters in username/password, click Login | Invalid credentials error displayed, no navigation | Medium | Edge Case |
| TC_CART_001 | Add item to cart and verify count | User is logged in | Add one item to cart, open cart | Cart badge shows 1, item present in cart page | High | E2E |
| TC_LOGOUT_001 | Logout and verify protected page blocked | User is logged in | Click menu, select logout, navigate to protected page | User returns to login page, protected page blocked | High | E2E |
