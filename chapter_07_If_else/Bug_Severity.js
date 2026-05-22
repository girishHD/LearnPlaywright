/* Question 3 — Bug Severity Classifier
Problem: Given a bug's impact score (1–10), classify the severity.
9–10 → Critical (block release)
7–8 → High
4–6 → Medium
1–3 → Low
Anything else → Invalid score*/

let input = 5;

if (input >= 9 && input <= 10) {
    console.log("Severirty: Critical - Block release");
} else if (input >= 7) {
    console.log("Severirty: High");
} else if (input >= 4) {
    console.log("Severirty: Medium");
} else if (input >= 1) {
    console.log("Severirty: Low");
} else {
    console.log("Invalid Score");
}