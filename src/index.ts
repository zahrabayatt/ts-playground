class Account {
  id: number;
  owner: string;
  balance: number;
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

let account = new Account(1, "Zahra", 0);
account.deposit(100);
console.log(account.balance);
console.log(account);

// for narrowing use instanceof instead of typeof
console.log(typeof account); // object - the type of object always return object no matter what is underline class
console.log(account instanceof Account); // true
