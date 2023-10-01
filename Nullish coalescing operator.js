/*The nullish coalescing operator is written as two question marks ??.

As it treats null and undefined similarly, we’ll use a special term here, in this article. For brevity, we’ll say that a value is “defined” when it’s neither null nor undefined.

The result of a ?? b is:

if a is defined, then a,
if a isn’t defined, then b.*/

let user;

alert(user ?? "Anonymous"); // Anonymous (user is undefined)
//Here’s the example with user assigned to a name:

let user2 = "John";

alert(user2 ?? "Anonymous"); // John (user is not null/undefined)

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

let firstName1 = null;
let lastName1 = null;
let nickName1 = "Supercoder";

// shows the first true value:
alert(firstName1 || lastName1 || nickName1|| "Anonymous"); // Supercoder

let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0
/*The height || 100 checks height for being a falsy value, and it’s 0, falsy indeed.
so the result of || is the second argument, 100.
The height ?? 100 checks height for being null/undefined, and it’s not,
so the result is height “as is”, that is 0.*/