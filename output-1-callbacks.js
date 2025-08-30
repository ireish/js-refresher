// 1. Basics of async callbacks
// Whats the order of output?

console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");


// 2. Callback inside forEach
// What’s printed after 1 second?

[1, 2, 3].forEach((num) => {
  setTimeout(() => {
    console.log(num);
  }, 1000);
});


// 3. Classifc callback trap + Closures - var vs let
// What numbers are printed?

for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), i * 100);
}

for (let i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), i * 100);
}


// 4. Callback hell Ordering
// What’s the order of output?

setTimeout(() => {
  console.log("1");
  setTimeout(() => {
    console.log("2");
  }, 0);
}, 0);

Promise.resolve().then(() => console.log("3"));
console.log("4");


// 5. Mixing Promises and Callbacks
// In what order do logs appear?

setTimeout(() => console.log("X"), 0);

Promise.resolve().then(() => {
  console.log("Y");
  setTimeout(() => console.log("Z"), 0);
});

console.log("W");


// 6. Higher-order callback
// What’s the sequence?

function doSomething(cb) {
  console.log("Step 1");
  cb();
  console.log("Step 2");
}

doSomething(() => {
  console.log("Inside callback");
});