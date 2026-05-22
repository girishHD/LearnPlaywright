/* Question 5 — Login Lockout After Failed Attempts
Problem: Track failed login attempts. Lock the account after 3 failed attempts.*/

let attempts = 2;

if (attempts === 0) {
    console.log("Login Successful");
} else if (attempts === 2) {
    console.log("1 attempt left before lockout");
} else {
    console.log("🔒Account Locked - Contact Support");
}