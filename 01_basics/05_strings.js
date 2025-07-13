const name ="himanshu"
const repoCount = 50

//console.log(name + repoCount + "Value");                // old synatx use new syntax instead.

console.log('Hello my name is ${name} and my repo count is $ {repoCount}');


const gameName = new String('himanshu-hc-com')

console.log(gameName [0]);
console.log(gameName .__proto__);


//console.log(gameName.length);
//console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('m'));

 const newString = gameName.substring(0, 4)
 console.log(newString);

 const anotherString = gameName.slice(-7, 6)
 console.log(anotherString);
 
 
 const newStringOne = "       himanshu     "

console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://www.youtube.com/Himanshu%20rautela"

console.log( url.replace('%20', ' _'))
console.log( url.includes('Himanshu'))

console.log(gameName.split('-'));


