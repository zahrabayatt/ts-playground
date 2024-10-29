// Access Modifier:
// public
// private
// protected

// when we declare a property, all preopens are public by default.

class Account {
  readonly id: number;
  owner: string;
  // by convention we prefix the private member with _
  private _balance: number;
  nickname?: string;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this._balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid amount");
    }
    this._balance += amount;
  }

  getBalance(): number {
    return this._balance;
  }

  // private method
  private calculateTAx() {
    console.log("...");
  }
}

let account = new Account(1, "Zahra", 0);
// account.balance = -1; //we got a error because it is private member
console.log(account.getBalance());
