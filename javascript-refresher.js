// const declaration ensures immutability of the reference itself, 
// not the data it points to.
const t = [1, -1, 3];
t.push(4) // t = [1, -1, 3, 4]

// One way to loop through Array - forEach
// calls the func for each items in the array, always passing individual els as an argument
t.forEach(value => {
    console.log(value)
})

// In react, techniques from functional programming are often used
// One example is the use of immutable data structures. 
// Like using concat method, creating a new array while keeping the original array unchanged.
const t2 = t.concat(5) 

// Using map method
const m1 = t2.map(value => value * 2)
// console.log(m1) 
// Example: An array with int values is transformed into an array containing strings of HTML
const m2 = t2.map(value => '<li>' + value + '</li>')
// console.log(m2)

// Destructuring assignment
const [first, second, ...rest] = t
// console.log(first)
// console.log(rest)

// Object Literals
const obj1 = {
    name: 'Ajay Singh',
    grades: [2, 4, 6, 6],
    age: 33,
}

console.log(obj1.name)

const fieldName = 'age'
console.log(obj1[fieldName])
obj1.address = 'Germany'

// Function in Javascript
// One way to reference: Function declaration
function prod(a, b) {
    return a * b
}

// Other way to reference: Function expression
const average = function(a, b) {
    return (a + b) / 2
}

const result = average(2, 5)