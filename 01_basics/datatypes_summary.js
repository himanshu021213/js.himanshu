// premitive datatypes

// 7 types : String, Number , Boolean , null ,undefined ,Symbol , BigInt

const score = 100
const scoreValue = 100.3
const isLoggedInn= false
const outsideTemp =null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id ===anotherId);

//const bigNumbers = 346645667677666767654n





// Reference(Non primitive)

// Array , Objects , Functions

const heros = ['Thor', 'Ironman', 'Hulk']
let myObj ={
    name: 'Thor',
    age: 10,

}

 const myfunction =function(){
console.log("Hello World");

}

console.log(typeof bigNumbers);
console.log(typeof myfunction);
console.log(typeof anotherId);



//++++++++

//Stack(primitive)  , Heap(non-premitive)

let myyoutubename ="himanshudotcom"

let anothername = myyoutubename
anothername ="chaiaurcode"

console.log(myyoutubename);
console.log(anothername);


let userone ={
    email: "usergoogole.com",
    upi: "user@ybl"
}

let usertwo = userone

usertwo.email = "himanshu@gmail.com"       // . (dot) is used to access the value of  a variable like here it is used to access the email value , and changed it.

console.log(userone.email);
console.log(usertwo.email);


// the output is not changed bcz the heap dosnt change the value <like the stack did.