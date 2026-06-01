function makeRetryTracker(max) {
    let attempts = 0;
    function retryAgain(testName) {
        attempts++;
        if (attempts > max) {
            return `${testName} exceed max retries ${max}`;
        }
        return `Attempt ${attempts}/${max} for ${testName}`;
    }
    return retryAgain;
}

const retry = makeRetryTracker(3);
console.log(retry("Login Test"));
console.log(retry("Login Test"));
console.log(retry("Login Test"));
console.log(retry("Login Test"));

