// singleton
// Object.create


//object literals


const mySym = Symbol("key1")





const JsUser = {
    name:"Himanshu",
    "full name": "himanshu rautela",
    [mySym]: "mykey1",
    age:18,
    location: "uttrakhand",
    email:"himanshu@gmail.com",
    isLOggedIn: false,
    lastLoginDays: ["Monday","Saterday"]
}

// console.log(JsUser.name);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser [mySym]);


JsUser.email = "babbu@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hima@micro.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
    console.log(`Hello Js user, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greeting);

