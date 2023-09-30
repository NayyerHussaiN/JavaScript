let score = "Test User"

console.log(typeof score);//string
console.log(typeof(score));//string

let valueInNumber = Number(score)
console.log(typeof valueInNumber);//number
console.log(valueInNumber);//NaN cannot convert string to number
let valueInNumber2 = Number("33")
console.log(typeof valueInNumber);//number
console.log(valueInNumber);
// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "Test User"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
//console.log(stringNumber);//33
//console.log(typeof stringNumber);//string//

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

/*
undefined	NaN
null	0
true and false	1 and 0
string	Whitespaces (includes spaces, tabs \t, newlines \n etc.) from the start and end are removed. 
If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN.

Examples:

alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (error reading a number at "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0

Please note that null and undefined behave differently here: 
null becomes zero while undefined becomes NaN.

Boolean Conversion

The conversion rule:

Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
Other values become true.
For instance:

alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false
Please note: the string with zero "0" is true
Some languages (namely PHP) treat "0" as false. But in JavaScript, a non-empty string is always true.

alert( Boolean("0") ); // true
alert( Boolean(" ") ); // spaces, also true (any non-empty string is true)

Summary

String Conversion – Occurs when we output something. Can be performed with String(value). The conversion to string is usually obvious for primitive values.

Numeric Conversion – Occurs in math operations. Can be performed with Number(value).

The conversion follows the rules:

Value	      Becomes…
undefined -> 	NaN
null	-> 0
true / false	-> 1 / 0
string	- >The string is read “as is”, whitespaces (includes spaces, tabs \t, newlines \n etc.) from both sides are ignored. An empty string becomes 0. An error gives NaN.
Boolean Conversion – Occurs in logical operations. Can be performed with Boolean(value).

*/