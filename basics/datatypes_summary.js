// Primitive
// 7 types : String, Number, Boolean, Null, undefined, Symbol, BigInt
const score= 100
const scoreValue= 100.3
const isLoggedIn = false
const outsideTemp = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// Reference Tyoe/Non Primitive
// Array, Objects, Functions

const heros = ["superman","doga"]
let myObj = {
    name:"Nan",
    age:21,
}

const myFunction = function(){
    console.log("hii");
    
}
console.log(typeof myFunction);
