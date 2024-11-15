{
    //3-10: Encapsulation in OOP
    //kiso property,method private or hidden rakbe r kiso property,method public rakbe atakei bolbe encapsulation

    class BankAccount{
        public readonly id:number;
        public readonly name:string;
        private balance:number
        // protected balance:number

        constructor( id:number,name:string,balance:number){
            this.id=id
            this.name=name
            this.balance=balance
        }

        //as like getter
        // public getBalance(){
        private getBalance(){
                return this.balance
        }

        public getHiddenBalance(){
            return this.getBalance()
        }

        //as like setter
        public setBalance(amount:number){
            this.balance=this.balance+amount;
        }
    }

    class StudentsAccount extends BankAccount{
        test(){
            // this.
        }
    }

    const sohelerAccount = new BankAccount(117,"sohel",200);
    const sohelerBalance =  sohelerAccount.getBalance();
    console.log("soheler balance is : "+sohelerBalance + "/-")









}