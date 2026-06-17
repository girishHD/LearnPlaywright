function getToken() {
    return Promise.resolve("abc123");
}

// Playwright
// page.goto() - Promise()
// await page.goto();

// Whenever function return a promise, have to used await

async function run() {
    let token = await getToken();
    console.log(token);
}

run();