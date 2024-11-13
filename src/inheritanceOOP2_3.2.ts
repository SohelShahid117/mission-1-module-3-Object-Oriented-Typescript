{
    //3-2: Inheritance in OOP-->again enjoy

    //parent class
    class Person{
        name:string;
        age:number;
        address:string;
        constructor(name:string,age:number,address:string){
            this.name = name;
            this.age = age;
            this.address = address;
        };
        getSleep(sleepingHr:number){
            let sleep:string =`${this.name} is sleeping ${sleepingHr} hour.`
            console.log(sleep) 
        }

    }

    //child class
    class Student extends Person {
        // name:string;
        // age:number;
        // address:string
        constructor(name:string,age:number,address:string){
            super(name,age,address)
            // this.name = name;
            // this.age = age;
            // this.address = address;
        }
        // getSleep(sleepingHr:number){
        //     let sleep:string =`${this.name} is sleeping ${sleepingHr} hour.`
        //     console.log(sleep) 
        // }
    }

    const stdunet1 = new Student("abdullah",4,"Rangunia");
    const stdunet2 = new Student("Aadil",3,"Pomra");
    stdunet1.getSleep(7);


    //child class
    class Teacher extends Person {
        // name:string;
        // age:number;
        // address:string
        designation:string
        constructor(name:string,age:number,address:string,designation:string){
            super(name,age,address);
            // this.name = name;
            // this.age = age;
            // this.address = address;
            this.designation = designation;
        }
        // getSleep(sleepingHr:number){
        //     let sleep:string =`${this.name} is sleeping ${sleepingHr} hour.`
        //     console.log(sleep) 
        // }
        getClass(nmbrOfClass:number){
            const takeCls:string =`${this.name} sir taken ${nmbrOfClass} nos class.` ;
            console.log(takeCls);
        }
    }

    const teacher1=new Teacher("Eunus",40,"Boalkahli","Professor");
    teacher1.getClass(4);
    teacher1.getSleep(6);




}