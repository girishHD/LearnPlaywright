# Chapter 19 - Playwright Basics (Browser Automation)

[← Back to Main README](../README.md)

---

---

## What This Chapter Is

Playwright is a browser automation framework that lets you control web browsers programmatically. After 18 chapters of JavaScript fundamentals, this chapter finally applies those concepts to real browser testing.

---

## Files in This Chapter

### package.json
Project dependencies: `playwright` (core) and `@playwright/test` (testing framework), version 1.61.0.

### playwright.config.ts
Test configuration:
- Browsers: Chromium, Firefox, Google Chrome
- Reporter: HTML (generates a visual report)
- Trace on retry: captures execution details on failure
- Parallel mode: runs multiple tests simultaneously

### tests/example.spec.ts
Simple test: navigate to playwright.dev, verify the title contains "Playwright", click "Get started".

### tests/example1.spec.ts
Navigate to a test shopping site (TTACart Login page) and verify the page title.

### tests/valid-scenario-tta-cart.spec.ts
Full valid login flow:
1. Navigate to login page
2. Enter valid username
3. Enter valid password
4. Click login button
5. Wait for "Products" page
6. Verify "Products" is visible

### tests/invalid-scenario-tta-cart.spec.ts
Full invalid login flow:
1. Navigate to login page
2. Enter invalid username
3. Enter invalid password
4. Click login button
5. Wait for error message
6. Verify error message appears

### caveman.pdf & sdetlive.pdf
Supplementary reference materials (PDFs).

### playwright-report/ & test-results/
Directories created when tests run — contain pass/fail reports and artifacts.

---

## Why This Matters

This is the practical application of everything learned in previous chapters. Instead of manually clicking buttons thousands of times, Playwright automates the browser — faster, consistently, and without fatigue.

---

## What You'll Learn

- What Playwright is (browser automation tool)
- Test structure: `test("name", async () => { })`
- Navigation: `page.goto(url)`
- Input: `page.fill(selector, text)`
- Click: `page.click(selector)`
- Assertions: `expect(page).toHaveTitle(title)`
- Valid vs Invalid test scenarios
- Configuration: browsers, reporters, parallel mode

---

## Test Recipe (Playwright Style)

```
1. Navigate to URL           await page.goto("...")
2. Find element on page      let input = page.locator("#username")
3. Type into it              await input.fill("Ugg")
4. Click button              await page.click("#login")
5. Verify result             await expect(page).toHaveText("Welcome")
```

---

## Key Terms

| Term | Definition |
|---|---|
| Playwright | Browser automation framework |
| Test | A function that verifies behavior |
| Spec | A file containing tests |
| Locator | A way to find elements on a page |
| Assertion | A check that verifies a condition |
| Config | Centralized settings for test execution |
| Parallel | Running multiple tests simultaneously |
| Valid | Happy path — expected successful flow |
| Invalid | Sad path — testing error handling |

---

← [Back to Main README](../README.md)

---

*Happy coding!*
