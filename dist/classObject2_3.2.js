"use strict";
{
    class Vehicle {
        constructor(name, price, sound) {
            this.name = name;
            this.price = price;
            this.sound = sound;
        }
        makeSound() {
            console.log(`${this.name} sound is ${this.sound}`);
        }
    }
    const train = new Vehicle("train", 45, "pop pop");
    const bus = new Vehicle("bus", 15, "pep pep");
    train.makeSound();
    bus.makeSound();
}
