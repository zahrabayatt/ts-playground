// how to create a decorator that we can apply to our class:

// we use pascal naming for decorator names
// parameter of decorator that we applied to class is constructor of class
function Component(constructor: Function) {
  console.log("Component decorator called");
  // every object in JS has a prototype from which it inherits various properties and methods, so each class or it's members that has this decorator tha have these new members:
  constructor.prototype.uniqueId = Date.now();
  constructor.prototype.insertInDOM = () => {
    console.log("Inserting the component in the DOM");
  };
}

@Component
class ProfileComponent {}

// we can do this using inheritance:

class Component1 {
  uniqueId: number = Date.now();
  insertInDOM(): void {
    console.log("Inserting the component in the DOM");
  }
}

class ProfileComponent1 extends Component1 {}
