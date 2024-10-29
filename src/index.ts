// a class is a blueprint for creating objects.
// we use capital naming for class names
class Account {
  id: number; // we need to initialize these properties in constructor
  owner: string;
  balance: number;
  // we can't annotate a type for constructor and it always return a instance a Account class
  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid amount");
    }
    this.balance += amount;
  }
}
