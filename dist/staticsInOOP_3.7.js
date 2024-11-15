"use strict";
{
    //3-7 Statics in OOP
    class Counter {
        constructor() {
            // count:number;
            this.count = 0;
        }
        increment() {
            // this.count++;
            // return this.count++;
            return (this.count = this.count + 1);
        }
        decrement() {
            // this.count--;
            return (this.count = this.count - 1);
        }
    }
    const instance1 = new Counter();
    console.log(instance1.increment());
    console.log(instance1.increment());
    const instance2 = new Counter();
    console.log('increment from instance2 is: ' + instance2.increment());
    console.log(instance2.decrement());
    //instance1 & instance2 both r in different memory place
    //when use static every instance is in same memory place & sei somoi this er poriborte class er nam dore dakte hobe
    class Counter2 {
        increment() {
            // this.count = this.count+1;
            return (Counter2.count = Counter2.count + 1);
        }
        decrement() {
            return (Counter2.count = Counter2.count - 1);
        }
    }
    Counter2.count = 0;
    const instanceee1 = new Counter2();
    console.log(instanceee1.increment());
    const instanceee2 = new Counter2();
    console.log(instanceee2.increment());
    const instanceee3 = new Counter2();
    console.log(instanceee3.increment());
    const instanceee4 = new Counter2();
    console.log("now decrement " + instanceee4.decrement());
    class Counter3 {
        constructor() {
            this.count = 0;
        }
        // constructor(count:number){
        //     this.count=count;
        // }
        increment() {
            this.count = this.count + 1;
        }
        decrement() {
            this.count = this.count - 1;
        }
    }
    const result1 = new Counter3();
    console.log(result1.increment());
    const result2 = new Counter3();
    console.log(result2.increment());
}
