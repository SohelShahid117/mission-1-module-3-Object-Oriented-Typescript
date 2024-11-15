"use strict";
{
    //now all implent here ,kaj ki ki hosse
    class Car {
        // name:"toyota";
        // model: 2006
        startCar() {
            console.log("now i am starting the car");
        }
        stopCar() {
            console.log("now i am stoping the car");
        }
        moveCar() {
            console.log("now i am moving the car");
        }
        // startCar(): void{
        //     console.log("now i am starting the car");
        // }
        // stopCar(): void(){
        //     console.log("now i am stoping the car");
        // }
        // moveCar(): void(){
        //     console.log("now i am moving the car");
        // }
        test() {
            console.log("now i am testing");
        }
    }
    // console.log(car1.model)  //undefined
    const car1 = new Car();
    car1.moveCar();
    car1.test();
    // console.log(car1.moveCar());
    class Vehicle2 {
        startCar() {
            console.log("now i am starting the car");
        }
        stopCar() {
            console.log("now i am stoping the car");
        }
        moveCar() {
            console.log("now i am moving the car");
        }
    }
    const bus = new Vehicle2();
    bus.startCar();
    bus.startCar();
    //here u get idea using abstarct
    class Vehicle3 {
    }
    //here u implement the abstraction
    class Jeep extends Vehicle3 {
        startJeep() {
            console.log("now i am starting the jeep");
        }
        stopJeep() {
            console.log("now i am stoping the jeep");
        }
        moveJeep() {
            console.log("now i am moving the jeep");
        }
        check() {
            console.log("now checking the jeep ");
        }
    }
    const jp = new Jeep();
    jp.check();
    jp.startJeep();
}
