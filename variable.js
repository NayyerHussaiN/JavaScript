const accountId = 123456
let accountEmail = "my@google.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;//undefined if no value assign

// accountId = 2 // cannpt assign value because const


accountEmail = "my@my.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

//console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


//console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
/*(index) │   Values    │
├─────────┼─────────────┤
│    0    │   123456    │
│    1    │ 'my@my.com' │
│    2    │ '21212121'  │
│    3    │ 'Bengaluru' │
│    4    │  undefined |
*/
console.log(typeof accountEmail)//string

console.log(typeof accountId)//number
console.log(typeof accountPassword)//string
console.log(typeof accountCity)//string
console.log(typeof accountState)//undefined

/*
Seven primitive data types:
1.integer or floating-point, integers are limited by ±(253-1).
2. bigint for integer numbers of arbitrary length.
3. string for strings. A string may have zero or more characters, there’s no separate single-character type.
4. boolean for true/false.
5. null for unknown values – a standalone type that has a single value null.
6. undefined for unassigned values – a standalone type that has a single value undefined.
7. symbol for unique identifiers.
one non-primitive data type:
1.object for more complex data structures.

*/