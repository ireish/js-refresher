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



// 3. Throttle - a technique to limit the number of times a function can be called over time.
// Why? - useful for performance optimization, especially for events that can fire rapidly, like scrolling or resizing aw window.

function handleResize(e){
    console.log('resize happened on event: ' + e)
}

function throttle(func, delay) {
    let throttleTimeout = null
    return (e) => {
        if(!throttleTimeout) {
            func(e)
            throttleTimeout = setTimeout( () => {
                throttleTimeout = null
            }, delay)
        }
    }
}

const throttledHandleResize = throttle(handleResize, 1000)
window.addEventListener('resize', throttledHandleResize)

// Without throttle, handleResize would be called multiple times during a single resize action, causing performance issues. 
// With throttle, it will only be called once every second (1000 milliseconds).



// 4. Debounce - a technique to ensure that a function is only called after a certain period of inactivity.
// Why? - useful for scenarios like search input, where you want to wait until the user has stopped typing before firing an event / making an API call.

function debounce(func, delay) {
    let debounceTimer
    return function() {
        clearTimeout(debounceTimer)
        debounceTimer = setTimeout(()=> {
            func.apply(this, arguments)  // .apply() ? - to preserve the context and pass arguments correctly;
        }, delay)
    }
}

function handleInput(e) {
    console.log('Input detected from element with id ' + e.target.id)
}

// handleInput fires only when there has been no activity in the input field for ‘delay’ seconds. 
document.getElementById('name-input').addEventListener('input', debounce(handleInput, 500))

// Alt. way to write debounce function
function debounce(func, delay) {
    let debounceTimer
    return (e) => {
        clearTimeout(debounceTimer)
        debounceTimer = setTimeout(()=> {
            func(e)
        }, delay)
    }
}