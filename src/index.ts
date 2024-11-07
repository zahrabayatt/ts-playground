import { calculateTax } from "./tax";

// const tax = calculateTax("hello"); // we got runtime error for argument that we pass
const tax = calculateTax(10_000);
console.log(tax);
