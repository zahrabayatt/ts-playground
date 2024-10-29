// using indexed property we can create properties dynamically like JS but we got type checking
class SeatAssignment {
  // indexed property
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = "Zahra";
seats.B1 = "Alex";
seats["C2"] = "Marry";
