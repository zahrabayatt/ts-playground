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
}

class Principal extends Person {
  override get fullName() {
    return "Principal " + super.fullName;
  }
}

function printNames(people: Person[]) {
  for (const person of people) {
    console.log(person.fullName);
  }
}

// Polymorphism
printNames([
  new Student(1, "Alex", "Bing"),
  new Teacher("John", "Smith"),
  new Principal("Marry", "King"),
]);

// Open Closed Principle: Classes should be open for extension and closed for modification.
