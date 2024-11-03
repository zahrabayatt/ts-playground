// Classes are blueprints for creating objects

// abstract class Calender {
//   constructor(public name: string) {}

//   abstract addEvent(): void;
//   abstract removeEvent(): void;
// }

// or we can use interface to define a shape of object which is shorter:

interface Calender {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

interface CloudCalender extends Calender {
  sync(): void;
}

// implement calender
class GoogleCalendar implements Calender {
  constructor(public name: string) {}
  addEvent(): void {
    throw new Error("Method not implemented.");
  }
  removeEvent(): void {
    throw new Error("Method not implemented.");
  }
}

// if you don't have any logic and only decorations use interface otherwise use abstract class.
