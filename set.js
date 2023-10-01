/*Set – is a collection of unique values.

Methods and properties:

new Set([iterable]) – creates the set, with optional iterable (e.g. array) of values for initialization.
set.add(value) – adds a value (does nothing if value exists), returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.
Iteration over Map and Set is always in the insertion order, so we can’t say that these collections are unordered,
but we can’t reorder elements or directly get an element by its number.*/

let set = new Set();

set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.add(5);
//console.log(set) Set(5) { 1, 2, 3, 4, 5 }
//console.log(set.size) 5
for ( let value of set) {
    //console.log(value)//1 2 3 4 5
}
let test = { name: "test"};
//console.log(test)//{ name: 'test' }

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

let testSet = new Set();
testSet.add(john)
testSet.add(pete)
testSet.add(mary)

//for( let value of testSet){
   // console.log(value)//{ name: 'John' } { name: 'Pete' } { name: 'Mary' }
//}

let setTest = new Set(["oranges", "apples", "bananas"]);

//for (let value of setTest) 
    //console.log(value);//oranges apples bananas

// the same with forEach:
setTest.forEach((val) => {
    console.log(val);
});