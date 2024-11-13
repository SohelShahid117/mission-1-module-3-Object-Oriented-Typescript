"use strict";
{
    //3-2: Inheritance in OOP-->again enjoy
    //parent class
    class Person {
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        ;
        getSleep(sleepingHr) {
            let sleep = `${this.name} is sleeping ${sleepingHr} hour.`;
            console.log(sleep);
        }
    }
    //child class
    class Student extends Person {
        // name:string;
        // age:number;
        // address:string
        constructor(name, age, address) {
            super(name, age, address);
            // this.name = name;
            // this.age = age;
            // this.address = address;
        }
    }
    const stdunet1 = new Student("abdullah", 4, "Rangunia");
    const stdunet2 = new Student("Aadil", 3, "Pomra");
    stdunet1.getSleep(7);
    //child class
    class Teacher extends Person {
        constructor(name, age, address, designation) {
            super(name, age, address);
            // this.name = name;
            // this.age = age;
            // this.address = address;
            this.designation = designation;
        }
        // getSleep(sleepingHr:number){
        //     let sleep:string =`${this.name} is sleeping ${sleepingHr} hour.`
        //     console.log(sleep) 
        // }
        getClass(nmbrOfClass) {
            const takeCls = `${this.name} sir taken ${nmbrOfClass} nos class.`;
            console.log(takeCls);
        }
    }
    const teacher1 = new Teacher("Eunus", 40, "Boalkahli", "Professor");
    teacher1.getClass(4);
    teacher1.getSleep(6);
}
