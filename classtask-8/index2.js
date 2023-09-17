function uid() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

class Account {
  #balance;
  constructor(name, balance) {
    this.id = uid();

    this.name = name;
    this.#balance = balance;
  }
  get balance() {
    return this.#balance;
  }
  set balance(newBalance) {
    this.#balance = newBalance;
  }

  credit(increaseAmount) {
    this.#balance += increaseAmount;

    return this.#balance;
  }
  debit(debitAmount) {
    this.#balance -= debitAmount;

    return this.#balance;
  }
  transferTo(target, amount) {
    target.credit(amount);
    this.debit(amount);
  }

  static identifyAccounts(...args) {
    return args.map();
  }
}

const saving = new Account("saving", 1000);
const current = new Account("current", 8000);

console.log("credit ", saving.credit(5000));
console.log("debit ", saving.debit(1000));
console.log("debit ", saving.debit(2000));
saving.transferTo(current, 1000);
console.log("saving balance", saving.balance);
console.log("current balance", current.balance);
