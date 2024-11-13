"use strict";
{
    //3-5: Access modifiers
    class BankAccount {
        constructor(id, name, balance) {
            this.id = id,
                this.name = name,
                this.balance = balance;
        }
    }
    const sohelerAccount = new BankAccount(117, "sohel", 20);
    sohelerAccount.id = 118;
    console.log(sohelerAccount.id);
}
