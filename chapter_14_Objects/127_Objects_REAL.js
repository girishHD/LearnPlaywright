let config = {};

config.browser = "chrome";
config.timeout = 3000;
config.testname = "login test";

console.log(config);

if (config.browser === "chrome") {
    console.log("I will execute my TC");
}

// delete the key & value
delete config.browser;
console.log(config);

let config2 = {
    browser: "chrome",
    timeout: 3000,
    testname: "login test"

};

console.log(config2);