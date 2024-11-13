{
    //3-4: Type guard using instance of

    class Animal {
        name:string;
        species:string;
        constructor(name:string,species:string){
            this.name=name;
            this.species=species;
        }
        makeSound(){
            console.log("i am an animal.I have animal sound");
        }
    }
    // const dog = new Animal("dog","dogggiii");

    class Dog extends Animal{
        constructor(name:string,species:string){
            super(name,species)
        }
        makeBarking(){
            console.log(`${this.name} dog sound is gheow gheow.`);
        }
    }
    const dog1 = new Dog("netaniaho","dogggiii");
    dog1.makeBarking();

    
    class Cat extends Animal{
        constructor(name:string,species:string){
            super(name,species)
        }
        makeMeawo(){
            console.log(`${this.name} cat sound is Meawo Meawo.`);
        }
    }
    const cat1 = new Cat("biden","bilai");
    cat1.makeMeawo()

    // const isDog = (animal:Animal)=>{
    const isDog = (animal:Animal):animal is Dog=>{
        return animal instanceof Dog
    }
    console.log(isDog)
    
    const getAnimal = (animal:Animal)=>{
        // animal.
        // if(animal instanceof Dog){
        if(isDog(animal)){
            console.log("dog is kottta")
            animal.makeBarking();
        }
        else if(animal instanceof Cat){
            animal.makeMeawo()
        }
        else{
            animal.makeSound();
        }
    }
    getAnimal(cat1);
    getAnimal(dog1);





}