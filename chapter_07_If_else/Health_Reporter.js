/* Question 4 — Build Health Reporter
Problem: Given the percentage of test cases passed in a CI build, report build health.
100% → Green Build
90–99% → Stable (investigate failures)
70–89% → Unstable
Below 70% → Broken Build (block deployment)*/

let score = 65;

if (score === 100) {
    console.log("🟢Green Signal");
} else if (score >= 90) {
    console.log("🟡Stable - Investigate Failures");
} else if (score >= 70) {
    console.log("🟠Unstable");
} else {
    console.log("🔴Broken Build : Block Deployment");
}
