let testRun = new Promise(function (resolve, reject) {
    reject("Assertion Failed");
});

testRun.then(function (data) {
    console.log(data);
}).catch(function (error) {
    console.log(error);
}).finally(function () {
    // This code will be always excuted anyhow.
    console.log("I will be execute anyhow!");
});

console.log("----------------------------");

let testRun1 = new Promise(function (resolve, reject) {
    let apiCall1 = true;
    if (apiCall1) {
        resolve({ "status": "done " });
    } else {
        reject("Assertion Failed");
    }
});

testRun1.then(function (data) {
    console.log(data);
}).catch(function (error) {
    console.log(error);
}).finally(function () {
    // This code will be always excuted anyhow.
    console.log("I will be execute anyhow!");
});

