{

    //3-8 Polymorphism
    class Person{
        getSleep(){
            console.log("a person sleeping 8 hour/day");
        }
    }

    class Student extends Person{
        getSleep(){
            console.log("a student sleeping 7 hour/day");
        }
    }

    class Developer extends Person{
        getSleep(){
            console.log("a developer sleeping 6 hour/day");
        }
    }

    const person1=new Person();
    const person2=new Student();
    const person3=new Developer();

    const getSleepingHour = (param:Person)=>{
        param.getSleep();
    }

    getSleepingHour(person1)
    getSleepingHour(person2)
    getSleepingHour(person3)


    class Area{
        getArea():number{
            return 0;
        }
    }

    class CircleArea extends Area{
        //r for radius
        r:number;
        constructor(r:number){
            super();
            this.r=r;
        }
        getArea(): number {
            // return 0;
            return (Math.PI*this.r*this.r);
        }
    }
    const circle=new CircleArea(5);
    console.log("circle area is : "+circle.getArea());

    class RectangleArea extends Area{
        width:number; 
        length:number;
       
        constructor(width:number,length:number){
            super()
            this.length=length;
            this.width=width;
        }
        getArea(): number {
            return (this.length * this.width);
        }
    }

    const rectangle=new RectangleArea(15,10);
    console.log("rectangle area is : "+rectangle.getArea());






}