// Ternary Operator

let rajkumar = 18;

let rj_will_goa = rajkumar > 18 ? "RJ will go to Goa" : "RJ will not go to Goa";
console.log(rj_will_goa);

rj_will_goa = rajkumar >= 18 ? "RJ will go to Goa" : "RJ will not go to Goa";
console.log(rj_will_goa);

let actualStatusCode = 200;
let expectedStatusCode = 200;

let testResult = actualStatusCode === expectedStatusCode ? "Test Passed" : "Test Failed";
console.log(testResult);

let environment = "stagging";
let baseUrl = environment === "prod"
    ? "https://www.production.com "
    : "https://www.stagging.com ";
console.log(baseUrl);

let isCI = true;
let browserMode = isCI ? "headless" : "headed";
console.log("Launching browser in:", browserMode, "mpde");

let responseTime = 850;
let sla = 1000;
let slaStatus = responseTime <= sla ? "Within SLA" : "SLA Breached";
console.log(`Response: ${responseTime}ms - ${slaStatus}`);

// Condition ? True : False

let condition = true;
let isSKMale = condition ? true : false;
console.log(isSKMale);

// Nested Ternray
// Multiple Condition

let age = 26;
let is_pramode_goa = age > 26 ? "Yes, he will goa" : "else hie will not go";
console.log(is_pramode_goa);

let age_pramod = 45;
let is_pramode_d = age_pramod > 18 ? (age_pramod > 26 ? "Drink" : "No Drink") : "No Goa";
console.log(is_pramode_d);

// IQ 
let statusCode = 404;
let category =
    statusCode < 300 ? "Success" :
        statusCode < 400 ? "Redirect" :
            statusCode < 500 ? "Client Error" : "Server Error";
console.log(`Status ${statusCode}: ${category}`);

let temp = 35;
let feel = (temp >= 40) ? "Very Hot" :
    (temp >= 30) ? "Hot" :
        (temp >= 20) ? "Warm" :
            (temp >= 10) ? "Cool" : "Cold";
console.log(`Temparture: ${temp} | Feel: ${feel}`);