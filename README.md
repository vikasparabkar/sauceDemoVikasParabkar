# SauceDemo Playwright Automation Framework

## Project Overview
This repository contains a Playwright + JavaScript automation framework for the SauceDemo application (`https://www.saucedemo.com`). The framework covers login validation, dashboard verification, cart flow automation, logout validation, and edge-case handling.

## Tech Stack
- JavaScript
- Playwright Test
- Page Object Model (POM)
- Config-driven test data
- HTML reporting
- Screenshot and video capture on failure

## Project Structure
- `config/` — environment and test configuration
- `data/` — test data and edge case values
- `pages/` — page objects and reusable UI actions
- `tests/` — end-to-end test suites
- `utils/` — reusable helper utilities
- `reports/` — generated HTML reports
- `screenshots/` — test failure screenshots

## Setup
1. Install dependencies:
   ```powershell
   npm install
   ```
2. Install Playwright browsers:
   ```powershell
   npx playwright install
   ```

## Running Tests
- Run the full suite:
  ```powershell
  npx playwright test
  ```
- Run tests with HTML report generation:
  ```powershell
  npx playwright test
  npx playwright show-report reports/html-report
  ```
- Run a specific file:
  ```powershell
  npx playwright test tests/login.spec.js
  ```

## Test Coverage
Covered scenarios:
- Valid login
- Invalid login
- Empty username
- Empty password
- Empty username and password
- Special character input
- Dashboard and product page validation
- Add to cart flow
- Cart badge count validation
- Cart item detail verification
- Logout and protected page access validation

## Assumptions
- SauceDemo is available and stable at `https://www.saucedemo.com`
- `standard_user` is a valid login credential
- `locked_out_user` is used for negative login validation
- Playwright built-in failure capture is sufficient for screenshots/videos

## Notes
- No hard-coded waits are used; Playwright waits are used for actions and assertions.
- HTML reports are generated under `reports/html-report`.
- JUnit test results are generated at `reports/junit/results.xml`.
- Screenshots and videos are retained only on failure.

## Azure DevOps Pipeline
To generate reports in Azure DevOps, run the Playwright suite and publish the generated report folders and JUnit results as pipeline artifacts.

Example:
- Run tests: `npx playwright test`
- Publish HTML report folder: `reports/html-report`
- Publish JUnit results file: `reports/junit/results.xml`

In Azure DevOps, use `PublishPipelineArtifact@1` for the HTML report and `PublishTestResults@2` for JUnit results.
