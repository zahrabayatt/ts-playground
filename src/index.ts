class Account {
  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid amount");
    }
    this._balance += amount;
  }

  //   getBalance(): number {
  //     return this._balance;
  //   }
  // or we can use a getter:
  get balance(): number {
    return this._balance;
  }

  // we can also have a setter:

  //   set balance(value: number) {
  //     if (value < 0) {
  //       throw new Error("Invalid value");
  //     }
  //     this._balance = value;
  //   }
}

let account = new Account(1, "Zahra", 0);

console.log(account.balance);
// account.balance = 1; // we got the error because it it private
