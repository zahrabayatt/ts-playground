class Account {
  //   readonly id: number;
  //   owner: string;
  //   private _balance: number;
  //   nickname?: string;

  //   constructor(id: number, owner: string, balance: number) {
  //     this.id = id;
  //     this.owner = owner;
  //     this._balance = balance;
  //   }
  // or we can write it like this using parameter properties:
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

  getBalance(): number {
    return this._balance;
  }

  private calculateTAx() {
    console.log("...");
  }
}

let account = new Account(1, "Zahra", 0);
