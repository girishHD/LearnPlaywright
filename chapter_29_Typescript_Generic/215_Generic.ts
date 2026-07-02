function getString(name: string): string {
    return "Amit";
}

getString("girish");
// getString(123); not possible

function getFirstResult<T>(results: T[]) {
    return results[0]!;
}

/* The ! is TypeScript's non-null assertion operator. It tells the TypeScript compiler: 
I know this expression won't be null or undefined, so treat it as definitely defined.*/

let firstCode = getFirstResult<number>([200, 400, 500]);
let firstTest = getFirstResult<string>(["Login", "Signup", "Cart"]);

console.log("First Code:", firstCode);
console.log("First Test:", firstTest);

