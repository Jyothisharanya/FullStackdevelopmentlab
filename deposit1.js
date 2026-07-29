class BankAccount {
    accountHolder;
    balance;
    constructor(accountHolder, balance) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance = this.balance + amount;
        console.log("Deposited Amount: " + amount);
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance = this.balance - amount;
            console.log("Withdrawn Amount: " + amount);
        }
        else {
            console.log("Insufficient Balance");
        }
    }
    displayBalance() {
        console.log("Account Holder: " + this.accountHolder);
        console.log("Current Balance: " + this.balance);
    }
}
// Create object
let account = new BankAccount("akshaya", 5000);
account.displayBalance();
account.deposit(2000);
account.withdraw(1000);
account.displayBalance();
export {};
