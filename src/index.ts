// private members: only accessible in the class
// protected members: accessible in the class and the child classes.

// protected members should not used often because it makes problems in code.

class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + " " + this.lastName;
  }
  protected walk() {
    console.log("Walking");
    this.think();
  }

  private think() {
    console.log("thinking...");
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest() {
    console.log(this.walk);
    console.log("Taking a test");
  }
}

class Teacher extends Person {
  override get fullName() {
    return "Professor " + super.fullName;
  }
}

class Principal extends Person {
  override get fullName() {
    return "Principal " + super.fullName;
  }
}
