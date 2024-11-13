"use strict";
{
    //3-2: Inheritance in OOP
    class Parent {
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        sleepingHour(sleep) {
            console.log(`${this.name} is sleeping ${sleep} hour`);
        }
    }
    class Student extends Parent {
        constructor(name, age, address) {
            super(name, age, address);
            this.name = name;
            this.age = age;
            this.address = address;
        }
    }
    class Teacher extends Parent {
        constructor(name, age, address, designation) {
            // super(name,age,address,designation);
            super(name, age, address);
            this.name = name;
            this.age = age;
            this.address = address;
        }
        /*
        sleepingHour(sleep:number){
            console.log(`${this.name} is sleeping ${sleep} hour`);
        }
            */
        takeClass(numberOfClass) {
            console.log(`${this.name} sir is take class ${numberOfClass} nos`);
        }
    }
    const std1 = new Student("sohel", 34, "ctg");
    const std2 = new Student("sumi", 32, "ctg");
    const std3 = new Student("jessi", 31, "dhaka");
    std1.sleepingHour(6);
    std2.sleepingHour(7);
    const tchr1 = new Teacher("Shahid", 34, "ctg", "professor");
    tchr1.takeClass(3);
}
