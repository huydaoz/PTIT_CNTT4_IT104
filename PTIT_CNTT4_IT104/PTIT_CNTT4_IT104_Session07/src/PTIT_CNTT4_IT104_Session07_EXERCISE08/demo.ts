class Accountzs {
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
class CheckingAccount extends Accountzs {
  public overdraftLimit: number;
  constructor(
    accountNumber: number,
    balance: number,
    history: string[],
    status: string,
    overdraftLimit: number
  ) {
    super(accountNumber, balance, history, status);
    this.overdraftLimit = overdraftLimit;
  }
  withdraw(num: number): void {
    if (this.balance - num >= -this.overdraftLimit) {
      this.balance = this.balance - num;
      this.history.push(`rút tiền ${num}`);
    } else {
      console.log("Vượt quá hạn mức thấu chi cho phép.");
    }
  }
  deposit(num: number) {
    this.balance = this.balance + num;
    this.history.push(`nạp tiền ${num}`);
  }
  showHistory() {
    console.log(`lịch sử: ${this.history}`);
  }
}
const checking = new CheckingAccount(12345, 1000, [], "active", 500);

checking.withdraw(1200);
checking.showHistory();
checking.withdraw(400);
checking.showHistory();
