// Variables (var, let, const)
let age = 25; // 'let' for mutable variable
const name = "Alice"; // 'const' for immutable variable
var isStudent = true; // 'var' for legacy variable declaration (function-scoped)

// Data Types (Strings, Numbers, Booleans)
let height = 180; // Number
let greeting = "Hello"; // String
let isActive = true; // Boolean

// Basic Operators (+, -, *, /, %)
let sum = 10 + 5; // Addition
let difference = 10 - 5; // Subtraction
let product = 10 * 5; // Multiplication
let quotient = 10 / 5; // Division
let remainder = 10 % 3; // Modulus (remainder)

// Conditional Statements (if, else)
if (age >= 18) {
    console.log(name + " is an adult.");
} else {
    console.log(name + " is not an adult.");
}

// Loops (for, while)
for (let i = 0; i < 5; i++) {
    console.log("For loop iteration:", i);
}

let i = 0;
while (i < 5) {
    console.log("While loop iteration:", i);
    i++;
}

// Functions (Declaration, Expressions)
function greet(person) { // Function declaration
    return "Hello, " + person;
}
const sayGoodbye = function(person) { // Function expression
    return "Goodbye, " + person;
};
console.log(greet(name));
console.log(sayGoodbye(name));

// Basic Array Methods (push, pop, shift, unshift)
let numbers = [1, 2, 3];
numbers.push(4); // Adds at the end
numbers.pop(); // Removes from the end
numbers.shift(); // Removes from the start
numbers.unshift(0); // Adds at the start

// Simple DOM Manipulation (querySelector, getElementById)
// Note: These lines should be run in a browser environment
// document.getElementById("myElement").innerHTML = "New Content";
// document.querySelector(".myClass").textContent = "Updated Content";

// Basic Event Handling (onClick, onLoad)
// Note: These lines should be run in a browser environment
// document.getElementById("myButton").onclick = function() { alert("Button clicked!"); };
// window.onload = function() { console.log("Page loaded!"); };

// Console Logging for Debugging
console.log("This is a debug message.");
