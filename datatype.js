"use strict"; // treat all JS code as newer version

let name = "Test User"
let age = 18
let isLoggedIn = false
let state;
let bigInt = 126786885714354165345614n

// number => 2 to power 53
// bigint => end eith small n 1234567788n
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique
// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof bigInt); // bigint

//let – is a modern variable declaration.
//var – is an old variable declaration. Normally we don’t use it at all
//const – is like let, but the value of the variable can’t be changed.

//The typeof operator allows us to see which type is stored in a variable.

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)