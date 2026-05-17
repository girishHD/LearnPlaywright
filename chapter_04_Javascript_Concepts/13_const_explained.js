const BASE_URL = "https://www.google.com";
BASE_URL = "https://www.facebook.com"; // TypeError: Assignment to constant variable.

const BASE_URL = "https://www.amazon.com"; // SyntaxError: Identifier 'BASE_URL' has already been declared

let name = "pending";
name = "done";
{
    let name = "scope";
}

function say() {
    let name = "scope";
}

say();
say();