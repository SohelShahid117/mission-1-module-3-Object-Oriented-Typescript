"use strict";
{
    const a = "hi/hello";
    console.log(a);
    //3-1: Class and object
    // class Animal = {
    class Animal {
        // name:string;
        // projati:string;
        // age:number;
        // sound:string
        /***
        constructor e public keyword add kore dile property name upore dite hobena ***/
        // constructor( name:string,projati:string,age:number,sound:string){
        constructor(name, projati, age, sound) {
            this.name = name;
            this.projati = projati;
            this.age = age;
            this.sound = sound;
            // this.name = name;
            // this.projati =projati;
            // this.age =age;
            // this.sound = sound;
        }
        // vvi---->()=>{} function e this kaj korena so ai khetre amader normal function f(){} use korte hobe.
        makeSound() {
            console.log(`${this.name} says ${this.sound}`);
        }
    }
    // const dog = new Animal;
    // const dog = new Animal(name:string,projati:string,age:number,sound:string);
    const crow = new Animal("kawa kader", "indian", 5, "ka ka");
    const cat = new Animal("sakib", "pakistan", 45, "mew mew");
    // cat.
    //class er bitor j attribute takbe segoloke bolbe property r function k bolbe method
    cat.makeSound();
    crow.makeSound();
}
