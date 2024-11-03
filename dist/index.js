"use strict";
class Shape {
    constructor(color) {
        this.color = color;
    }
    doSomething() {
        console.log("doing Something");
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log("Rendering a circle");
    }
}
let circle = new Circle(1, "red");
circle.doSomething();
circle.render();
//# sourceMappingURL=index.js.map