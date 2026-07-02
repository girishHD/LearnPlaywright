# Chapter 17 - Promises (Handling Asynchronous Operations Cleanly)

[← Back to Main README](../README.md)

---

---

## What This Chapter Is

A Promise represents a value that may be available now, later, or never. Promises provide a cleaner alternative to callbacks for handling asynchronous operations, with three states: pending, fulfilled, and rejected.

---

## Files in This Chapter

### 154_Promise.js
Basic Promise creation and consumption:
```js
let pizzaPromise = new Promise((resolve, reject) => {
  if (success) resolve("Pizza delivered!");
  else reject("Pizza burnt!");
});
```
Consume with `.then(success).catch(error)`:
```js
pizzaPromise
  .then(result => console.log(result))
  .catch(error => console.log(error))
```

### 155_Promise_REAL_API.js
Real API scenario: Promise returning an API response object with status and body.

### 156_Promise_REAL_API_PART2.js
Additional API promise examples with different response types.

### 157_Finally.js
`.finally()` — executes regardless of whether the promise was fulfilled or rejected. Useful for cleanup.

### 158_Call_Py_Problem.js
Callback vs Promise comparison. Same login flow:
- Callback: nested pyramid
- Promise: flat chain with `.then().then().then()`

### 159_Promise_ALL.js
Running multiple promises:
- `Promise.all([...])`: all must resolve; if any rejects, all fail
- `Promise.allSettled([...])`: all run independently; each reports its own result

Includes practical examples: checking auth/db/cache in parallel.

### 160_Promise_IQ.js
Promise interview questions covering various tricky scenarios.

---

## Why This Matters

Testing involves many asynchronous operations: page loads, API calls, database queries, file uploads. Promises handle all of these cleanly. `Promise.all` is essential for running tests or setup operations in parallel.

---

## What You'll Learn

- Promise: represents a future value
- Three states: pending, fulfilled, rejected
- `.then()` for success, `.catch()` for errors, `.finally()` for cleanup
- Chaining promises (flat structure)
- Promise.all (all at once, fail if any fails)
- Promise.allSettled (all at once, individual results)

---

## Key Terms

| Term | Definition |
|---|---|
| Promise | Represents a value that will be available in the future |
| Pending | Waiting for result |
| Fulfilled | Operation completed successfully |
| Rejected | Operation failed |
| Resolve | Fulfill the promise with a value |
| Reject | Fail the promise with a reason |
| Then | Handle fulfillment |
| Catch | Handle rejection |
| Finally | Execute regardless of outcome |

---

← [Back to Main README](../README.md)

---

*Happy coding!*
