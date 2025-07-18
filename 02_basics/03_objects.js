// singleton
// Object.create


//object literals


const mySym = Symbol("key1")





const JsUser = {
    name:"Himanshu",
    "full name": "himanshu rautela",
    mySym: "mykey1",
    age:18,
    location: "uttrakhand",
    email:"himanshu@gmail.com",
    isLOggedIn: false,
    lastLoginDays: ["Monday","Saterday"]
}

console.log(JsUser.name);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(typeof JsUser.mySym);

