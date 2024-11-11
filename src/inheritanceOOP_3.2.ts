{
    //3-2: Inheritance in OOP
  class Student{
    constructor(public name:string,public age:number, public address:string){

    }
    sleepingHour(sleep:number){
        console.log(`${this.name} is sleeping ${sleep} hour`);
    }
  }

  const std1 = new Student("sohel",34,"ctg")
  const std2 = new Student("sumi",32,"ctg")
  const std3 = new Student("jessi",31,"dhaka")
  std1.sleepingHour(6);
  std2.sleepingHour(7);
}

//4 min done