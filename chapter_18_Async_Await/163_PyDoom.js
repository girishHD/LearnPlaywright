function openBrowser() {
    return new Promise(function (resolve) {
        // Code to open browser
        resolve("Open the Browser");
    });
};

function goToLoginPage() {
    return new Promise(function (resolve) {
        resolve("Login page Loaded");
    });
}

function enterCredentials() {
    return new Promise(function (resolve) {
        resolve("Credential entered");
    });
}

function clickLogin() {
    return new Promise(function (resolve) {
        resolve("Logged in Successfully!");
    });
}

// openBrowser()
//     .then(function (msg) {
//         console.log("Step 1 :", msg);
//         return goToLoginPage();
//     }).then(function (msg) {
//         console.log("Step 2 :", msg);
//         return enterCredentials();
//     }).then(function (msg) {
//         console.log("Step 3 :", msg);
//         return clickLogin();
//     }).then(function (msg) {
//         console.log("Step 4 :", msg);
//     }).catch(function (error) {
//         console.log("Error :", error);
//     }).finally(function () {
//         console.log("Done execution!");
//     });

async function runTheE2E() {
    let msg1 = await openBrowser();
    console.log("Step 1:", msg1);

    let msg2 = await goToLoginPage();
    console.log("Step 2:", msg2);

    let msg3 = await enterCredentials();
    console.log("Step 3:", msg3);

    let msg4 = await clickLogin();
    console.log("Step 4:", msg4);
}

runTheE2E();