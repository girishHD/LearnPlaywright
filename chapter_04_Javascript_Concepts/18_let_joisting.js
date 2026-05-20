console.log(score); // ReferenceError: Cannot access 'score' before initialization
let score = 100;

// ----- TDZ for "score" start here -----
// console.log(score); // ReferenceError: Cannot access 'score' before initialization
// score = 100; // ReferenceError: Cannot access 'score' before initialization
// typeof score; // ReferenceError: Cannot access 'score' before initialization
// ---- TDZX for "score" ends here ----
let score = 100;  // Declaration reched, TDZ ends
console.log(score); // 100 (safe to access "score" here)