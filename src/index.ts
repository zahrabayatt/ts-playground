// ES6 Module Format
import { Circle, Square as MySquare } from "./shapes";

let circle = new Circle(1);
console.log(circle.radius);

let square = new MySquare(2);
console.log(square.width);

// Module Formats:
// AMD
// UMD
// CommonJS
// ES2015 / ES6

// form ES6 modules have become natively supported in JS

// in tsconfig.ts, config for module by default set to commonjs, this is the format that comes by node by default:
// "module": "commonjs" /* Specify what module code is generated. */,
// this config specify what module code is in js code that generated not in .ts file, and because of that we can use the ES6 module format in .ts file no matter what format that we set for output generated .js file
