// import { Circle } from "./shapes/Circle";
// import { Square } from "./shapes/Square";

// or we can export it like this using re-exporting method to combined all shapes modules in single module called index.ts:
// import { Circle, Square } from "./shapes/index";
// we don't even to have to type index module:
import { Circle, Square } from "./shapes";

let circle = new Circle(1);
console.log(circle.radius);

let square = new Square(2);
console.log(square.width);
