
let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)

alert( n ); // 14
//Short “modify-and-assign” operators exist for all arithmetical and bitwise operators: /=, -=, etc.

//Such operators have the same precedence as a normal assignment, so they run after most other calculations:

let n2 = 2;

n *= 3 + 5; // right part evaluated first, same as n *= 8

alert( n ); // 16

let x = 1;

x = -x;
alert( x ); // -1, unary negation was applied
//An operator is binary if it has two operands. The same minus exists in binary form as well:

let x2= 1, y = 3;
alert( y - x2 ); // 2, binary minus subtracts values

alert( 2 ** 2 ); // 2² = 4
alert( 2 ** 3 ); // 2³ = 8
alert( 2 ** 4 ); // 2⁴ = 16

alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)

alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"
//it doesn’t matter whether the first operand is a string or the second one.



alert(2 + 2 + '1' ); // "41" and not "221"
//Here, operators work one after another. The first + sums two numbers, so it returns 4, then the next + adds the string 1 to it, so it’s like 4 + '1' = '41'.

alert('1' + 2 + 2); // "122" and not "14"

//Here, the first operand is a string, the compiler treats the other two operands as strings too. The 2 gets concatenated to '1', so it’s like '1' + 2 = "12" and "12" + 2 = "122".

//The binary + is the only operator that supports strings in such a way. Other arithmetic operators work only with numbers and always convert their operands to numbers.

//Here’s the demo for subtraction and division:

alert( 6 - '2' ); // 4, converts '2' to a number
alert( '6' / '2' ); // 3, converts both operands to numbers

//the unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.



// No effect on numbers
let a = 1;
alert( +a ); // 1

let b = -2;
alert( +b ); // -2

// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0
//It actually does the same thing as Number(...), but is shorter.

//the need to convert strings to numbers arises very often. For example, if we are getting values from HTML form fields, they are usually strings. What if we want to sum them?

T//he binary plus would add them as strings:

let apples = "2";
let oranges = "3";

alert( apples + oranges ); // "23", the binary plus concatenates strings
//If we want to treat them as numbers, we need to convert and then sum them:

let apples1 = "2";
let oranges2 = "3";

// both values converted to numbers before the binary plus
alert( +apples1 + +oranges2); // 5

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5

//The operators ++/-- can be used inside expressions as well. Their precedence is higher than most other arithmetical operations.

alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1
//For boolean values, true becomes 1 and false becomes 0.

//For example:

alert( true == 1 ); // true
alert( false == 0 ); // true

let k = 0;
alert( Boolean(a) ); // false

let l = "0";
alert( Boolean(b) ); // true

alert(a == b); // true!

let counter = 1;
alert( 2 * ++counter ); // 4

//Strict equality
//A regular equality check == has a problem. It cannot differentiate 0 from false:

alert( 0 == false ); // true


alert( '' == false ); // true
//This happens because operands of different types are converted to numbers by the equality operator ==. An empty string, just like false, becomes a zero.


//A strict equality operator === checks the equality without type conversion.

//In other words, if a and b are of different types, then a === b immediately returns false without an attempt to convert them.

\

alert( 0 === false ); // false, because the types are different
//There is also a “strict non-equality” operator !== analogous to !=.

//The strict equality operator is a bit longer to write, but makes it obvious what’s going on and leaves less room for errors.

//Comparison with null and undefined
//There’s a non-intuitive behavior when null or undefined are compared to other values.

//For a strict equality check ===
//These values are different, because each of them is a different type.

alert( null === undefined ); // false
//For a non-strict check ==
//There’s a special rule. These two are a “sweet couple”: they equal each other (in the sense of ==), but not any other value.

alert( null == undefined ); // true
//For maths and other comparisons < > <= >=
//null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN.


//Strange result: null vs 0
//Let’s compare null with a zero:

alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true

/*5 > 4 → true
"apple" > "pineapple" → false
"2" > "12" → true
undefined == null → true
undefined === null → false
null == "\n0\n" → false
null === +"\n0\n" → false
*/

/* true.
Dictionary comparison, hence false. "a" is smaller than "p".
Again, dictionary comparison, first char "2" is greater than the first char "1".
Values null and undefined equal each other only.
Strict equality is strict. Different types from both sides lead to false.
Similar to (4), null only equals undefined.
Strict equality of different types.*/