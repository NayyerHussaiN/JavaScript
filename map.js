//Map is a collection of keyed data items, just like an Object.
// But the main difference is that Map allows keys of any type.

//Methods and properties are:
/*
new Map() // creates the map.
map.set(key, value) // stores the value by the key.
map.get(key) // returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) // returns true if the key exists, false otherwise.
map.delete(key) // removes the element (the key/value pair) by the key.
map.clear() // removes everything from the map.
map.size // returns the current element count.*/

let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
//console.log( map.get(1)   ); // 'num1'
//console.log( map.get('1') ); // 'str1'

//console.log( map.size ); // 3

let TestUser = { name: "John" };

// for every user, let's store their visits count
let visitsCountMap = new Map();

// john is the key for the map
visitsCountMap.set(TestUser, 123);

//console.log(( visitsCountMap.get(TestUser) )); // 123

let john = { name: "John" };
let ben = { name: "Ben" };

let visitsCountObj = {}; // try to use an object

visitsCountObj[ben] = 234; // try to use ben object as the key
visitsCountObj[john] = 123; // try to use john object as the key, ben object will get replaced

// That's what got written!
//console.log( visitsCountObj["[object Object]"] ); // 123

/*Iteration over Map
For looping over a map, there are 3 methods:

map.keys() – returns an iterable for keys,
map.values() – returns an iterable for values,
map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.
For instance:
*/
let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
 // console.log(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
   // console.log(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) { // the same as of recipeMap.entries()
   // console.log(entry); // cucumber,500 (and so on)
}
//The insertion order is used
//The iteration goes in the same order as the values were inserted. Map preserves this order, unlike a regular Object.

//Besides that, Map has a built-in forEach method, similar to Array:

// runs the function for each (key, value) pair
recipeMap.forEach( (value, key, map) => {
    //console.log(`${key}: ${value}`); // cucumber: 500 etc
});

//If we have a plain object, and we’d like to create a Map from it, 
//then we can use built-in method Object.entries(obj) that returns an array of key/value pairs for an object exactly in that format.

//So we can create a map from an object like this:

let obj = {
  name: "John",
  age: 30
};

let map2 = new Map(Object.entries(obj));

//console.log( map2.get('name') ); // John

let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
  ]);
  console.log(prices.orange); // 2
  