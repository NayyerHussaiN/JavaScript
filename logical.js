let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder
//If all variables were false, "Anonymous" would show up.

//Short-circuit evaluation.

//Another feature of OR || operator is the so-called “short-circuit” evaluation.

//It means that || processes its arguments until the first truthy value is reached, and then the value is returned immediately, without even touching the other argument.

//The importance of this feature becomes obvious if an operand isn’t just a value, but an expression with a side effect, such as a variable assignment or a function call.


true || alert("not printed");
false || alert("printed");
//In the first line, the OR || operator stops the evaluation immediately upon seeing true, so the alert isn’t run.

// if the first operand is true,
// AND returns the second operand:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0
//We can also pass several values in a row. See how the first falsy one is returned:

alert( 1 && 2 && null && 3 ); // null

//When all values are truthy, the last value is returned:

alert( 1 && 2 && 3 ); // 3, the last one

//The answer: first 1, then 2.

alert( alert(1) || 2 || alert(3) );
/*The call to alert does not return a value. Or, in other words, it returns undefined.

The first OR || evaluates its left operand alert(1). That shows the first message with 1.
The alert returns undefined, so OR goes on to the second operand searching for a truthy value.
The second operand 2 is truthy, so the execution is halted, 2 is returned and then shown by the outer alert.
There will be no 3, because the evaluation does not reach alert(3).*/

//The answer: null, because it’s the first false value from the list.

alert(1 && null && 2);

//The answer: 1, and then undefined.

alert( alert(1) && alert(2) );
/*The call to alert returns undefined (it just shows a message, so there’s no meaningful return).

Because of that, && evaluates the left operand (outputs 1), and immediately stops, 
because undefined is a falsy value. And && looks for a falsy value and returns it, so it’s done.*/

alert( null || 2 && 3 || 4 );
//The precedence of AND && is higher than ||, so it executes first.

//The result of 2 && 3 = 3, so the expression becomes:

null || 3 || 4