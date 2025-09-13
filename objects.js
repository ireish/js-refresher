// 1. Object.entries() 
// Return Value: An array of arrays, where each inner array represents a [key, value] pair from the original object.

const books = {
  "b001": { title: "To Kill a Mockingbird", price: 18.99, isAvailable: true },
  "b002": { title: "1984", price: 15.99, isAvailable: false },
  "b003": { title: "The Great Gatsby", price: 12.49, isAvailable: true },
  "b004": { title: "Moby Dick", price: 22.50, isAvailable: false }
}

const bookEntries = Object.entries(books)
console.log(bookEntries)

// Output: [ ['b001', {title: 'To Kill a Mockingbird', price: 18.99, isAvailable: true}], 
//           ['b002', {title: '1984', price: 15.99, isAvailable: false}], 
//         [ ... ] ]



// 2. this & bind keyword in Object Methods

const gamer = {
    name: 'Dave',
    score: 0,
    incrementScore: function(){

        // console.log() below logs the gamer object; 
        // But if we use arrow function here, it will log Window object or undefined because arrow functions do not have their own 'this' context 
        // and instead inherit 'this' from the surrounding lexical scope.
        console.log(this)
        this.score++   
    }
}

gamer.incrementScore()


const product = {
    name: 'Vanilla Lip Gloss',
    sku: 'w234fg',
    stock: 276,
    getProductInfo: function() {
        console.log(`Stock level for ${this.name} (SKU: ${this.sku}): ${this.stock}`)
    }
}

const productDetails = product.getProductInfo
// Console.log() in the getProductInfo method will throw an error because 'this' is undefined in this context
// So we need to bind the method to the product object to ensure 'this' refers to the product object

// SOLUTION: 
const prodctDetails = product.getProductInfo.bind(product)

productDetails()
