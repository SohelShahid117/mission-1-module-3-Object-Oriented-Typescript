"use strict";
{
    //3-2: Inheritance in OOP-->again enjoy
    class Student {
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(sleepingHr) {
            let sleep = `${this.name} is sleeping ${sleepingHr} hour.`;
            console.log(sleep);
        }
    }
    const stdunet1 = new Student("abdullah", 4, "Rangunia");
    const stdunet2 = new Student("Aadil", 3, "Pomra");
    stdunet1.getSleep(7);
}
