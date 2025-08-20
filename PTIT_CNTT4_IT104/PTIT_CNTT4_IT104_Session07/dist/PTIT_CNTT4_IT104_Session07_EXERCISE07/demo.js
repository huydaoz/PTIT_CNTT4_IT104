class Accountz {
    constructor(accountNumber, balance, history, status) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = history;
        this.status = status;
    }
    withdraw(num) {
        this.balance = this.balance - num;
        this.history.push(`rút tiền ${num}`);
    }
    deposit(num) {
        this.balance = this.balance + num;
        this.history.push(`nạp tiền ${num}`);
    }
    showHistory() {
        console.log(`lịch sử: ${this.history}`);
    }
}
class SavingAccount extends Accountz {
    constructor(accountNumber, balance, history, status, interestRate) {
        super(accountNumber, balance, history, status);
        this.interestRate = interestRate;
    }
    withdraw(num) {
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
