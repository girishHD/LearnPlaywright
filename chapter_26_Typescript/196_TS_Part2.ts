// Primitive types

let name: string = "John";
let age: number = 30;
let pi: number = 3.14;
// let pi: float = 3.14;
let distance_to_moon: number = 3587129089;
let isActive: boolean = true;
let nothing: null = null;
let notDefined: undefined = undefined;

// Arrays
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["John", "Jake"];

// Any (avoid when possible)
let anything: any = "hello";

// Unknown (safer than any)
let unknown: unknown = "hello";

let message: string = "Hello, Typescript!";
let count: number = 14;
let isActive1: boolean = true

console.log("Message:", message);
console.log("Count:", count);
console.log("Is Active:", isActive);
