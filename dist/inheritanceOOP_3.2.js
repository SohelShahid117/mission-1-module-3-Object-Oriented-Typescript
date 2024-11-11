"use strict";
{
    //3-2: Inheritance in OOP
    class Student {
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        sleepingHour(sleep) {
            console.log(`${this.name} is sleeping ${sleep} hour`);
        }
    }
    const std1 = new Student("sohel", 34, "ctg");
    const std2 = new Student("sumi", 32, "ctg");
    const std3 = new Student("jessi", 31, "dhaka");
    std1.sleepingHour(6);
}
