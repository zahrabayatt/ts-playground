abstract class Shape {
  constructor(public color: string) {}

  // abstract method can only exist in abstract classes.
  abstract render(): void;

  // abstract classes can have not abstract methods
  doSomething() {
    console.log("doing Something");
  }
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }

  override render() {
    console.log("Rendering a circle");
  }
}

// the shape class is abstract and it is only a sample and can not create a n instance of an abstract class.
// let shape = new Shape("red");
// shape.render();

let circle = new Circle(1, "red");
circle.doSomething();
circle.render();
