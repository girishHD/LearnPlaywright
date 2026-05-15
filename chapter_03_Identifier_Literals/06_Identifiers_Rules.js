// -------------------------------------------------------
// JavaScript Identifier Rules - Example Guide
// -------------------------------------------------------

// RULE 1: Allowed characters — letters, digits, $, _
var userName = "Girish";
var $ = "dollar";
var _ = "underscore";
var account$ = "valid";
var _privateVal = 42;
var user_name = "snake_case";

// RULE 2: Cannot start with a digit
// var 123abc = 10;     // ❌ SyntaxError (uncomment to test)

// RULE 3: Case-sensitive — name and Name are DIFFERENT variables
var name = "lowercase";
var Name = "Uppercase";
var NAME = "ALL CAPS";
console.log(name, Name, NAME); // lowercase, Uppercase, ALL CAPS

// RULE 4: Cannot use reserved keywords
// var var = 1;          // ❌ SyntaxError
// var let = 2;          // ❌ SyntaxError
// var const = 3;        // ❌ SyntaxError
// var if = 4;           // ❌ SyntaxError
// var function = 5;     // ❌ SyntaxError
// var class = 6;        // ❌ SyntaxError

// RULE 5: No spaces in identifiers
// var my var = 10;      // ❌ SyntaxError (uncomment to test)

// RULE 6: Unicode letters are allowed (ES5+)
var español = "spanish";
var 中文 = "chinese";
var русский = "russian";
var όνομα = "greek";
console.log(español, 中文, русский, όνομα);

// RULE 7: Identifier length — practical naming conventions

// Camel Case (JavaScript standard)
var firstName = "Girish";
var lastName = "Ujjwal";
function getUserData() { }

// Pascal Case (for classes / constructors)
class PersonAccount { }

// UPPER_SNAKE_CASE (for constants)
const MAX_LIMIT = 100;
const API_BASE_URL = "https://example.com";

// ------------------------- Summary -------------------------
// ✅ Allowed:  a–z, A–Z, 0–9 (not first char), _, $
// ✅ Case-sensitive
// ✅ Unicode letters supported
// ❌ Cannot start with a digit
// ❌ Cannot use reserved keywords
// ❌ Cannot contain spaces
