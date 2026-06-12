let apiCall = new Promise(function (resolev, reject) {

    reject("500 Error");
});

apiCall.then(function (data) {
    console.log("Success or Resolve");
}).catch(function (error) {
    console.log(error);
});

// .catch() is only call when response reject successfully.
// in these case .then() is skipped1