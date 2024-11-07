import { calculateTax } from "./tax";

// const tax = calculateTax("hello"); // we got runtime error the income is number
const tax = calculateTax(10_000);
console.log(tax);

// when using declaration files we should declare all the functions from .js files otherwise we can import it somewhere else
