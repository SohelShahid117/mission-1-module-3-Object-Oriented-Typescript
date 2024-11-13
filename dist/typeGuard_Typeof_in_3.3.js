"use strict";
{
    // const add=(param1:string | number,param2:string | number):string | number=>{
    const add = (param1, param2) => {
        // return param1+param2;
        //here use typeof guard
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2;
        }
        else {
            return param1.toString() + param2.toString();
        }
    };
    const result1 = add(4, 5);
    console.log(result1);
    const result2 = add("hello", 5);
    console.log(result2);
    const getUser = (user) => {
        // return user.
        if ("role" in user) {
            console.log(`i am ${user.name} & my role is ${user.role}`);
        }
        else {
            console.log(`i am ${user.name}`);
        }
    };
    const Normaluser = {
        name: "normal bhai"
    };
    const Adminuser = {
        name: "admin bhai",
        role: "admin"
    };
    getUser(Normaluser);
    getUser(Adminuser);
}
