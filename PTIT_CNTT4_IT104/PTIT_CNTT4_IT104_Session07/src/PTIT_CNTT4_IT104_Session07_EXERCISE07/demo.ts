class Accountz {
  public accountNumber: number;
  protected balance: number;
  protected history: string[];
  protected status: string;
  constructor(
    accountNumber: number,
    balance: number,
    history: string[],
    status: string
  ) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.history = history;
    this.status = status;
  }
  withdraw(num: number) {
    this.balance = this.balance - num;
    this.history.push(`rút tiền ${num}`);
  }
  deposit(num: number) {
    this.balance = this.balance + num;
    this.history.push(`nạp tiền ${num}`);
  }
  showHistory() {
    console.log(`lịch sử: ${this.history}`);
  }
}
class SavingAccount extends Accountz {
  public interestRate: number;
  constructor(
    accountNumber: number,
    balance: number,
    history: string[],
    status: string,
    interestRate: number
  ) {
    super(accountNumber, balance, history, status);
    this.interestRate = interestRate;
  }
  withdraw(num: number): void {
    if (this.balance >= 0) {
      this.balance = this.balance - num;
      this.history.push(`rút tiền ${num}`);
    }
  }
}

const current = new SavingAccount(12345, 1000, [], "active", 0.05);

current.withdraw(200);
current.deposit(500);
current.showHistory();
