class Account {
  readonly id: number; // readonly property
  owner: string;
  balance: number;
  nickname?: string; // optional property
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
// account.id = 1; // we got a compilation error because id is readonly property
