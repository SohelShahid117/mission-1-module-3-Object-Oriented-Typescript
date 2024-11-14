"use strict";
{
    //3-7 Statics in OOP
    class Counter {
        constructor() {
            // count:number;
            this.count = 0;
        }
        increment() {
            this.count++;
        }
        decrement() {
            this.count--;
        }
    }
    const instance1 = new Counter();
    console.log(instance1.increment());
}
