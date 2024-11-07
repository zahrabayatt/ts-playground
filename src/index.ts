import { calculateTax } from "./tax";

// enable this setting to get some basic type checking for js codes:
// "checkJs": true,                                  /* Enable error reporting in type-checked JavaScript files. */0

// if we don't disable ts in tax.js and compile our code using tsc command, we see the compilation error for 11 line:
// src/tax.js:1:30 - error TS7006: Parameter 'income' implicitly has an 'any' type.
// 1 export function calculateTax(income)
// Found 1 error in src/tax.js:1

const tax = calculateTax("hello");
console.log(tax);
