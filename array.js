//function

let add = (a, b)=> a+b;

console.log(add(2, 3));

let age = 18;

let welcome = (age < 18) ?
  () => console.log('Hello!') :
  () => console.log("Greetings!");

welcome();

let sum = (a, b) => {  // the curly brace opens a multiline function
    let result = a + b;
    return result; // if we use curly braces, then we need an explicit "return"
  };
  
console.log(sum(1, 2)) // 3