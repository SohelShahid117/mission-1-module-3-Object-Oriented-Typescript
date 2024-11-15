"use strict";
{
    //3-8 Polymorphism
    class Person {
        getSleep() {
            console.log("a person sleeping 8 hour/day");
        }
    }
    class Student extends Person {
        getSleep() {
            console.log("a student sleeping 7 hour/day");
        }
    }
    class Developer extends Person {
        getSleep() {
            console.log("a developer sleeping 6 hour/day");
        }
    }
    const person1 = new Person();
    const person2 = new Student();
    const person3 = new Developer();
    const getSleepingHour = (param) => {
        param.getSleep();
    };
    getSleepingHour(person1);
}
