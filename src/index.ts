// while we import something, we can optionality rename it to something else using as
import { Circle, Square as MySquare } from "./shapes";

let circle = new Circle(1);
console.log(circle.radius);

let square = new MySquare(2);
console.log(square.width);
