// Template Literals - It is a new way to create strings in JavaScript. It allows you to embed expressions and variables inside a string using backticks (`) and ${} syntax.

let firstname = "Prrammod";
let fullname = `Hi ${firstname} Dutta`;
console.log(fullname); // Hi Pramod Dutta

const env = "stagging";
const userId = 12345;
const apiUrl = `https://api-${env}.tekion.com/users/${userId}`;
console.log(apiUrl); // https://api-stagging.tekion.com/users/12345

//Playwright Locator
// const rowIndex = 5;
// const columnName = "email";
// await page.locator(`[data-row="${rowIndex}"] [data-col="${columnName}"]`).click();

//Logs
const testName = "Login Test";
const status = "Failed";
const duration = 2.3;
console.log(`[${status}] ${testName} completed in ${duration}`);

const userName = "Girish";
const role = "Admin";

const payload = `{
  "user": "${userName}",
  "role": "${role}"
  "timestamp": "${new Date().toISOString()}"
  }`;
console.log(payload);


