// how we can enhance our methods in class using decorators:

// we need three type of parameters for method decorators:
function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  console.log(target, methodName);
  // we can complexly replace the method with new implementor
  // descriptor.value = function () {
  //   console.log("new implementation");
  // };
  // but it is better to enhance the original method:
  const original = descriptor.value as Function;
  // the args is equal to parameters of methods that we applied this decorator
  descriptor.value = function (...args: any) {
    console.log("Before");
    original.call(this, ...args); // use function named instead of arrow function for descriptor.value because arrow function doesn't have their own this
    console.log("After");
  };
}

class Person {
  @Log
  say(message: string) {
    console.log("Person says " + message);
  }
}

let person = new Person();
person.say("Hello");
