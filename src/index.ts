// how to create a decorator to applied to accessors meaning getters and setters:

// parameters of accessor decorators are like method decorators:
function Capitalize(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  console.log(target, methodName);
  const original = descriptor.get;
  // getters doesn't have any arguments
  descriptor.get = function () {
    // original(getter) can be undefined
    const result = original?.call(this);

    return typeof result === "string" ? result.toUpperCase() : result;
  };
}

class Person {
  constructor(public firstName: string, public lastName: string) {}

  @Capitalize
  get fullName() {
    //return `${this.firstName} ${this.lastName}`;
    //return null;
    return 0;
  }
}

let person = new Person("Alex", "King");
console.log(person.fullName);
