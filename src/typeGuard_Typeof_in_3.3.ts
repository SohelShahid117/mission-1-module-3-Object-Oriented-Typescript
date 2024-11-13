{
    //3-3: Type guard using typeof & in
    //type guard or type narrowing

    type Alphanumeric = string | number;

    // const add=(param1:string | number,param2:string | number):string | number=>{
    const add=(param1:Alphanumeric,param2:Alphanumeric):Alphanumeric=>{
        // return param1+param2;
        //here use typeof guard
        if(typeof param1 ==="number" && typeof param2 ==="number"){
            return param1 + param2;
        }
        else{
            return param1.toString() + param2.toString();
        }
    }
    const result1 = add(4,5);
    console.log(result1);
    const result2 = add("hello",5);
    console.log(result2);

    //now use in guard
    type Normaluser = {
        name:string;
    }
    type Adminuser = {
        name:string;
        role:string;
    }
    const getUser=(user:Normaluser | Adminuser)=>{
        // return user.
        if("role" in user){
            console.log(`i am ${user.name} & my role is ${user.role}`)
        }
        else{
            console.log(`i am ${user.name}`)
        }
    }
   const Normaluser = {
    name:"normal bhai"
   }
   const Adminuser={
    name:"admin bhai",
    role:"admin"
   }
   getUser(Normaluser);
   getUser(Adminuser);





}