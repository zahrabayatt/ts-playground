class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  walk() {
    console.log("Walking");
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest() {
    console.log("Taking a test");
  }
}

class Teacher extends Person {
  override get fullName() {
    return "Professor " + super.fullName;
  }

  // we can do this but for best practice do above solution and enable noImplicitOverride to avoid doing this:

  // get fullName() {
  //   return "Professor " + super.fullName;
  // }
}

let teacher = new Teacher("John", "Smith");
console.log(teacher.fullName);
