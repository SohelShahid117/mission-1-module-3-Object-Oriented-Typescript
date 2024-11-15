"use strict";
{
    //3-10: Encapsulation in OOP
    class BankAccount {
        // protected balance:number
        constructor(id, name, balance) {
            this.id = id;
            this.name = name;
            this.balance = balance;
        }
        //as like getter
        getBalance() {
            return this.balance;
        }
        //as like setter
        setBalance(amount) {
            this.balance = this.balance + amount;
        }
    }
    class StudentsAccount extends BankAccount {
        test() {
            // this.
        }
    }
    const sohelerAccount = new BankAccount(117, "sohel", 200);
    const sohelerBalance = sohelerAccount.getBalance();
    console.log(sohelerBalance);
}
