// we can apply multiples decorators to the class or its members:

type ComponentOptions = {
  selector: string;
};

function Component(options: ComponentOptions) {
  return (constructor: Function) => {
    console.log("Component decorator called");
    constructor.prototype.options = options;
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
      console.log("Inserting the component in the DOM");
    };
  };
}

function Pipe(constructor: Function) {
  console.log("Pipe decorator called");
  constructor.prototype.pipe = true;
}

@Component({ selector: "#my-profile" })
@Pipe
class ProfileComponent {}

// console output:
// Pipe decorator called
// Component decorator called

// our decorators applied in reverse order that we added in code:
// they called something like this: f(g(x))
