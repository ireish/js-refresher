// 1. Closures

/*
a function that has access to its own scope, the outer function's scope, and the global scope, even after the outer function has finished executing.

WHY?
1. Data Privacy: allows you to create private variables and functions, which can help encapsulate functionality and avoid polluting the global scope. 
2. Stateful Functions: maintain state across multiple invocations; useful for things like counters, event handlers, and more.
*/

function createCounter() {
  let count = 0; // This is the 'private' variable

  return function() {
    count++;
    return count;
  };
}

// `myCounter` holds a closure (function) that has access to `count`
// even after `createCounter` has finished executing.
const myCounter = createCounter();
console.log(myCounter()); // Output: 1
console.log(myCounter()); // Output: 2
console.log(myCounter()); // Output: 3


// Function Factories: You can create specialized functions with pre-configured behavior.

function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}
const double = multiplier(2);
const triple = multiplier(3);

console.log(double(3))
console.log(triple(4))



// 2. Higher-Order Functions

/*
a function that either takes one or more functions as arguments or returns a function as its result

WHY?
- Instead of writing a loop every time you want to do something to a list of items, you can use a higher-order function that already has that logic built-in. 
- Core concept of `FUNCTIONAL PROGRAMMING`.

- Common HOF: map, filter, reduce
*/


// map(): creates a new array by applying a function to each element of the original array.

const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(num => num * num);
console.log(squared); // Output: [1, 4, 9, 16, 25]


// filter(): iterates over each element of the array. For each element, it executes the callback function. 
// If the callback function returns true for an element, its included in the newArray

const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 32 },
  { name: 'Diana', age: 15 },
  { name: 'Eve', age: 19 }
];

const eligibleUsers = users.filter(user => user.age > 18)


// reduce(): applies a callback function against an accumulator and each element in the array (from left to right) to reduce it to a single value. 

numbers = [1, 2, 3, 4];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0); 
console.log(sum);



// 3. ITERATION over collections

// for ... of
// Iterates directly over the values of iterable objects.

const numbers_2 = [1, 2, 3];

for (const num of numbers_2) {
    console.log(num); // Outputs: 1, 2, 3
}


// for ... in
// Iterates over the enumerable property keys (or indices) of an object.

const person = { name: 'Alice', age: 30 };
for (const key in person) {
    console.log(`${key}: ${person[key]}`); // Outputs: name: Alice, age: 30
}

const colors = ['red', 'green', 'blue'];
for (const index in colors) {
    console.log(`Index ${index}: ${colors[index]}`); // Outputs: Index 0: red, Index 1: green, Index 2: blue
}


// forEach - executes a provided function once for each array element.

const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach((fruit, index) => {
    console.log(`Fruit at index ${index}: ${fruit}`);
});



// 4. Callbacks - function that is passed into another function as an argument and is executed later

// fetching data might have looked like this in older JavaScript. 
// We pass a function that gets called when the data is ready (or an error occurs).

function fetchUsersWithCallbacks(callback) {

  setTimeout(() => {
    const users = [{ name: 'Abc' }, { name: 'Xyz' }];
    callback(null, users); 
  }, 2000);

}

// "Callback Hell" can start if you nest more requests here
fetchUsersWithCallbacks((error, users) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Callback result:", users);
  }
});



// 5. Promisess - we initiate the fetch and then chain .then() and .catch() blocks to handle success and failure, respectively
// <Promise> is an object representing the eventual completion or failure of an asynchronous operation.


function fetchUsersWithPromises() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = [{ name: 'Maria' }, { name: 'Luis' }];
      resolve(users);
    }, 2000);
  });
}

fetchUsersWithPromises()
  // .then() is called when the above promise is resolved successfully
  // .catch() is called when promise is rejected (an error occurs)
  .then(users => {
    console.log("Promise result:", users);
  })
  .catch(error => {
    console.error(error);
  });



// 6. Destructuring Assignment - way to 'extract values from arrays' or 'properties from objects' into distinct variables

const user = { name: 'Alice', age: 30 };
const { name, age } = user;



// 7. Spread and Rest Operators - it does two very different things depending on where you use it.

// Spread: expands an iterable (like an array or string) into individual elements.
// Why Useful? - allows to easily copy arrays or objects, merge them, or pass multiple elements as individual arguments to functions.

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; 


// Rest: collects multiple elements or arguments into a single array.
// Why Useful? - allows to create functions that can accept a variable number of arguments.

function sumAll(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sumAll(1, 2, 3, 4)); // Output: 10
console.log(sumAll(5, 10, 15));   // Output: 30