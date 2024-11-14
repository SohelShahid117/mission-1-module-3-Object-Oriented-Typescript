"use strict";
{
    //3-5: Access modifiers
    class BankAccount {
        // private property sodo tar nijer classei kaj korbe onno kono class || methode e kaj korbena
        //protected others class || methode e kaj korbe
        // protected _balance:number;
        constructor(id, name, balance) {
            this.id = id,
                this.name = name,
                this._balance = balance;
        }
        addDeposit(amount) {
            this._balance = this._balance + amount;
        }
        // private getBalance(){
        getBalance() {
            return this._balance;
        }
    }
    const sohelerAccount = new BankAccount(117, "sohel", 500);
    // sohelerAccount.id=118;
    // sohelerAccount.balance=0
    // sohelerAccount.name="shahid";
    console.log(sohelerAccount.id);
    // console.log(sohelerAccount.balance)
    console.log(sohelerAccount.name);
    sohelerAccount.addDeposit(1500);
    sohelerAccount.addDeposit(1200);
    const myBalance = sohelerAccount.getBalance();
    // sohelerAccount.addDeposit(1200);
    console.log(myBalance);
    class StudentAccount extends BankAccount {
        test() {
            // this._balance=0;
        }
    }
    const std1 = new StudentAccount(119, "ashraf", 60);
    std1.test();
    console.log("now balance is:" + sohelerAccount.getBalance());
    console.log("now balance is:" + std1.getBalance());
}
