// 1. IIFE (Immediately Invoked Function Expression) - a function that runs as soon as it is defined.
// Why? - To avoid polluting the global scope
(function() {
    console.log("This function runs immediately upon definition!");
})();



// 2. Currying - technique of transforming a function that takes multiple arguments into a sequence of functions that each take a single argument.

//Without currying
function volume(l, w, h) {
    return l * w * h;
}
console.log(volume(2, 3, 4));

//With currying
function curriedVolume(l) {
    return function(w) {
        return function(h) {
            return l * w * h;
        };
    };
}

const volumeWith2 = curriedVolume(2);
const volumeWith2And3 = volumeWith2(3);
console.log(volumeWith2And3(4)); // Outputs: 24

// Why? - allows partial application of functions; -can create more specialized functions from general ones;
// Eg: If we often need to calculate volume but its length and width remains contant, and only height changes, we can create a specialized function:

const volumeWith2And3Fixed = curriedVolume(2)(3);
console.log( volumeWith2And3Fixed(5) );