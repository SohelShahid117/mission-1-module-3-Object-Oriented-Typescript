{

    //3-9 Abstraction in OOP
    /*
    abstraction 2 bhabe kora jai:
        1.using abstract
        2.using interface

        interface use korle tokon class k inherit korte chaile extends er poriborte implements use korte hobe

        abstraction,interface e kokono object create kora jai na.akhetre child class die method() inherit kora hoi.
        
    */

        //use interface
        //get idea from here,ki hobe
        interface Vehicle{
            // name:string;
            // model:number
            startCar():void;
            stopCar():void;
            moveCar():void;
        }

        //now all implent here ,kaj ki ki hosse
        class Car implements Vehicle{
            // name:"toyota";
            // model: 2006
            startCar():void{
                console.log("now i am starting the car");
            }
            stopCar(): void {
                console.log("now i am stoping the car");
            }
            moveCar(): void {
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

            test():void{
                console.log("now i am testing");
            }
        
        }
        // console.log(car1.model)  //undefined
        const car1 = new Car();
        car1.moveCar()
        car1.test()
        // console.log(car1.moveCar());

        class Vehicle2{
            startCar():void{
                console.log("now i am starting the car");
            }
            stopCar(): void {
                console.log("now i am stoping the car");
            }
            moveCar(): void {
                console.log("now i am moving the car");
                
            }
        }

        const bus = new Vehicle2();
        bus.startCar()
        bus.startCar()

        //here u get idea using abstarct
        abstract class Vehicle3{
            abstract startJeep():void;
            abstract stopJeep():void;
            abstract moveJeep():void;
        }

        //here u implement the abstraction
        class Jeep extends Vehicle3{
            startJeep():void{
                console.log("now i am starting the jeep");
            }
            stopJeep(): void {
                console.log("now i am stoping the jeep");
            }
            moveJeep(): void {
                console.log("now i am moving the jeep");
            }
            check():void{
                console.log("now checking the jeep ");
            }
        }
        const jp = new Jeep();
        jp.check()
        jp.startJeep()







}