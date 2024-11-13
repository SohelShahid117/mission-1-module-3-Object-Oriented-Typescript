{

    //3-5: Access modifiers

    class BankAccount{
        // id:number;
        readonly id:number;
        // name:string;
        public readonly name:string;
        // public balance:number
        private balance:number
        constructor(id:number,name:string,balance:number){
            this.id=id,
            this.name=name,
            this.balance=balance
        }
        addDeposit(amount:number){
            this.balance=this.balance+amount;
        }
        getBalance(){
            return this.balance;
        }
    }

    const sohelerAccount = new BankAccount(117,"sohel",500);
    // sohelerAccount.id=118;
    // sohelerAccount.balance=0
    // sohelerAccount.name="shahid";

    console.log(sohelerAccount.id)
    // console.log(sohelerAccount.balance)
    console.log(sohelerAccount.name)
    sohelerAccount.addDeposit(1500)
    sohelerAccount.addDeposit(1200);
    const myBalance = sohelerAccount.getBalance(); 
    // sohelerAccount.addDeposit(1200);
    console.log(myBalance)

    //10 min done








}