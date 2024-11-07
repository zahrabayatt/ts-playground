// to import js code, enable this setting in tsconfig.json:
// "allowJs": true,                                  /* Allow JavaScript files to be a part of your program. Use the 'checkJS' option to get errors from these files. */

import { calculateTax } from "./tax";

const tax = calculateTax(10000);
console.log(tax);
