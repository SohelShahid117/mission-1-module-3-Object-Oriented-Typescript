{
    class Vehicle{
        constructor(public name:string,public price:number,public sound:string){}
        makeSound(){
            console.log(`${this.name} sound is ${this.sound}`);
        }
    }
    const train = new Vehicle("train",45,"pop pop");
    const bus = new Vehicle("bus",15,"pep pep");
    train.makeSound();
    bus.makeSound();




}