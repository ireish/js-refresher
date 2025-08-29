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