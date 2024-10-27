---
- Title: Playwright Documentation
- Description: Documentation on Playwright learning and setup for testing.
- Owner: Kaushal Raj
- Authors: Kaushal Raj
- Categories: Testing
- Tags: Playwright, Testing, Automation
---



# Playwright Documentation

---

## 1. Introduction

Playwright is a powerful testing tool for end-to-end testing across web applications, supporting multiple browsers and platforms. This guide provides examples and best practices for locating elements, interacting with the UI, and running tests.

---

## 2. Locators and Selectors

Playwright offers flexible locators to identify and interact with elements in a browser.

### Element Interactions

#### 1. Navigation and Clicks
- **Navigate to URL:** `page.goto("http://localhost:3000/")`
- **Click Element:** 
  ```javascript
  page.click("locator");  
  page.click("id=loginId"); // example
  ```

#### 2. Filling Inputs
- **Fill Input:**
  ```javascript
  page.fill("locator", "value");
  page.fill("input=[id='loginId']", "value"); // example
  ```

- **Type in Input:**
  ```javascript
  page.type("locator", "value");
  ```

### Locator Variants

Playwright’s `locator` API provides enhanced flexibility and precision:

- **Links/Buttons:**
  ```javascript
  page.click("locator");
  page.locator("locator").click();
  ```

- **Input Boxes:**
  ```javascript
  page.locator("locator").fill("value");
  page.locator("locator").type("value");
  ```

---

## 3. Built-in Locators

Playwright has built-in locators that simplify accessibility and semantic element selection:

- `page.getByRole()`: Locate by role attribute.
- `page.getByText()`: Locate by text content.
- `page.getByLabel()`: Locate by associated label’s text.
- `page.getByPlaceholder()`: Locate by placeholder attribute.
- `page.getByAltText()`: Locate by alt attribute.
- `page.getByTitle()`: Locate by title attribute.
- `page.getByTestId()`: Locate by `data-testid` attribute.

*Tip:* Use **Selector Hub** extension to extract precise element selectors.

---

## 4. Running Tests

### Run Commands

- **Run a Specific File:** 
  ```bash
  npx playwright test file-path/filename --project chromium --headed
  ```

You can adjust the project to specify other browsers or environments.

---

## 5. Additional Notes

- **Playwright Inspector:** Use this tool to debug tests by visually inspecting elements.
- **Handling Multiple Roles and Flows:** Design your tests with reusable functions and page object models for consistency.

---

