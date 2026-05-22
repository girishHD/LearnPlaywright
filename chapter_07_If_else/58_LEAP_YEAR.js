// Leap Year Check

// Take a year and check if it's a leap year
// Rules:
// Divisible by 4 AND not divisible by 100 -> Leap year
// Or divisible by 400 -> Leap year
// Else -> Not a leap year

let year = 2000;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year, "is a leap year");
} else {
    console.log(year, "not a leap year");
}