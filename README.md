# 🎭 Playwright Cucumber Brightly Test

An end-to-end automation test framework built with **Playwright**, **TypeScript**, and **Cucumber BDD** for technical automation testing.

---

## 🛠️ Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| [Playwright](https://playwright.dev/) | ^1.60.0 | Browser automation |
| [Cucumber JS](https://cucumber.io/) | ^12.9.0 | BDD test framework |
| [TypeScript](https://www.typescriptlang.org/) | ^6.0.3 | Programming language |
| [ts-node](https://typestrong.org/ts-node/) | ^10.9.2 | TypeScript execution |
| [fs-extra](https://github.com/jprichardson/node-fs-extra) | ^11.4.0 | File system utilities |
| [multiple-cucumber-html-reporter](https://github.com/WasiqB/multiple-cucumber-html-reporter) | ^3.10.0 | HTML test reporting |

---

## 📁 Project Structure

```
playwright_cucumber_brightly_test/
├── src/
│   ├── test/
│   │   ├── features/        # Cucumber feature files (.feature)
│   │   └── steps/           # Step definition files (.ts)
│   └── hooks/
│       ├── hooks.ts          # Before/After hooks
│       └── pageFixture.ts    # Page fixture setup
├── test-result/             # Test results & screenshots
├── cucumber-report.html     # HTML test report
├── cucumber-report.json     # JSON test report
├── cucumber.json            # Cucumber configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Project dependencies
```

---

## ⚙️ Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) v18 or higher
- [npm](https://www.npmjs.com/) v8 or higher

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/sigitapri/playwright_cucumber_brightly_test.git
cd playwright_cucumber_brightly_test
```

### 2. Install dependencies
```bash
npm install
```

### 3. Install Playwright browsers
```bash
npx playwright install
```

---

## ▶️ Running Tests

### Run all tests
```bash
npm run test
```

### Re-run failed tests only
```bash
npm run test:failed
```

---

## 📊 Test Reports

### HTML Report
After running tests, an HTML report is automatically generated at:
```
cucumber-report.html
```
Open it in your browser to view detailed test results.

### JSON Report
Raw JSON report is available at:
```
cucumber-report.json
test-result/cucumber-report.json
```

### Generate HTML Report with multiple-cucumber-html-reporter
```bash
mchr
```

---

## 📸 Screenshots

Screenshots are automatically captured on test failure and saved to:
```
test-result/screenshots/
```

---

## 🔧 Configuration

### Cucumber Configuration (`cucumber.json`)
```json
{
  "default": {
    "paths": ["src/test/features/*"],
    "require": [
      "src/test/steps/*.ts",
      "src/hooks/hooks.ts"
    ],
    "requireModule": ["ts-node/register"],
    "format": [
      "progress-bar",
      "html:cucumber-report.html",
      "json:cucumber-report.json",
      "rerun:@rerun.txt"
    ],
    "parallel": 1,
    "timeout": 30000
  }
}
```

---

## ✍️ Writing Tests

### Feature File Example
```gherkin
Feature: Sign In

  Scenario Outline: Sign in with different credentials
    Given navigate user to url link
    And user enter the username as "<username>"
    And user enter the password as "<password>"
    When user click on the login button
    Then verify "<expectedResult>" message is displayed

    Examples:
      | username      | password     | expectedResult |
      | standard_user | secret_sauce | success        |
      | standard_user | wrong_pass   | error message  |
```

### Step Definition Example
```typescript
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../../hooks/pageFixture';

Given('navigate user to url link', async function () {
    await pageFixture.page.goto('https://your-app-url.com');
});

When('user enter the username as {string}', async function (username: string) {
    await pageFixture.page.locator('#user-name').fill(username);
});
```

---

## 📝 Available Scripts

| Script | Command | Description |
|---|---|---|
| `test` | `cucumber-js` | Run all tests |
| `test:failed` | `cucumber-js -p rerun @rerun.txt` | Re-run failed tests |

---

## 👤 Author

**Sigit Apri**
- GitHub: [@sigitapri](https://github.com/sigitapri)

---

## 📄 License

This project is licensed under the **ISC License**.
