// 1. for ... of
// Iterates directly over the values of iterable objects.

const numbers = [1, 2, 3];

for (const num of numbers) {
    console.log(num); // Outputs: 1, 2, 3
}


// 2. for ... in
// Iterates over the enumerable property keys (or indices) of an object.

const person = { name: 'Alice', age: 30 };
for (const key in person) {
    console.log(`${key}: ${person[key]}`); // Outputs: name: Alice, age: 30
}

const colors = ['red', 'green', 'blue'];
for (const index in colors) {
    console.log(`Index ${index}: ${colors[index]}`); // Outputs: Index 0: red, Index 1: green, Index 2: blue
}


// 3.forEach - executes a provided function once for each array element.

const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach((fruit, index) => {
    console.log(`Fruit at index ${index}: ${fruit}`);
});



// 4. IIFE (Immediately Invoked Function Expression) - a function that runs as soon as it is defined.

(function() {
    console.log("This function runs immediately upon definition!");
})();



// 5. Currying - technique of transforming a function that takes multiple arguments into a sequence of functions that each take a single argument.

function add(x) {
    return function(y) {
        return x + y;
    };
}

const addFive = add(5);
console.log(addFive(3)); // Outputs: 8