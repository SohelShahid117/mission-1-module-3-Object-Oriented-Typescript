{
    //3-2: Inheritance in OOP
    class Parent{
      constructor(public name:string,public age:number, public address:string){
      }
      sleepingHour(sleep:number){
          console.log(`${this.name} is sleeping ${sleep} hour`);
      }
    }
  class Student extends Parent{

    constructor(public name:string,public age:number, public address:string){
      super(name,age,address);
    }
    /*
    sleepingHour(sleep:number){
        console.log(`${this.name} is sleeping ${sleep} hour`);
    }
    */
  }
  class Teacher extends Parent{
    constructor(public name:string,public age:number, public address:string,designation:string){
      // super(name,age,address,designation);
      super(name,age,address);
    }
    /*
    sleepingHour(sleep:number){
        console.log(`${this.name} is sleeping ${sleep} hour`);
    }
        */
    takeClass(numberOfClass:number){
      console.log(`${this.name} sir is take class ${numberOfClass} nos`);
    }
  }

  const std1 = new Student("sohel",34,"ctg")
  const std2 = new Student("sumi",32,"ctg")
  const std3 = new Student("jessi",31,"dhaka")
  std1.sleepingHour(6);
  std2.sleepingHour(7);

  const tchr1 = new Teacher("Shahid",34,"ctg","professor");
  tchr1.takeClass(3);
}

//4 min done