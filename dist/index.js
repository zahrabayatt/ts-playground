"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Invalid amount");
        }
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
}
let account = new Account(1, "Zahra", 0);
console.log(account.balance);
//# sourceMappingURL=index.js.map