// const tinderUser =new Object()
const tinderUser = {}

tinderUser.id ="123abc"
tinderUser.name ="sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularuser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"himanshu",
            lastname:"rautela"
        }
    }
}
// console.log(regularuser.fullname?.userfullname.firstname);




const obj1 ={1: "a", 2: "b"}
const obj2 ={3: "a", 4: "b"}
const obj4 ={5: "a", 6: "b"}

// const obj3 ={ obj1, obj2}
// const obj3 = Object.assign({},obj1, obj2, obj4)

const obj3 ={...obj1, ...obj2}
console.log(obj3);


// const users =[
//     {
//         id: 1,
//         email: "h@gmail.com"
//     }
// ]

// users[1].email
// console.log(Object.users());


const course ={
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "himanshu"

}
 course.courseInstructor

const {courseInstructor: instructor}= course
// console.log(courseInstructor);
console.log(instructor);

const navbar = () => {

}

   navbar(company ="himanshu")