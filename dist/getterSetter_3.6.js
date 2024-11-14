"use strict";
{
    //3-6: Getter and setter
    class BankAccount {
        constructor(id, name, balance) {
            this.id = id,
                this.name = name,
                this.balance = balance;
        }
        //now use getter
        get myBalance() {
            return this.balance;
        }
        //now use setter
        set sumirDeposit(depositAmmount) {
            this.balance = this.balance + depositAmmount;
        }
    }
    const sumirAccount = new BankAccount(121, "sumi", 50);
    let sumirBal = sumirAccount.myBalance;
    console.log(sumirBal);
    //getter-setter e function er call hobe as like property not like as function()
    // sumirAccount.sumirDeposit(100);
    //function er get-set bosai dile seti property hoye jabe.
    sumirAccount.sumirDeposit = 100;
    console.log(sumirBal);
    console.log(sumirAccount.balance);
}
