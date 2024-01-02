// Variables (var, let, const)
let age = 25; // 'let' for mutable variable
const name = "Alice"; // 'const' for immutable variable
var isStudent = true; // 'var' for legacy variable declaration (function-scoped)

// Data Types (Strings, Numbers, Booleans)
let height = 180; // Number
let greeting = "Hello"; // String
let isActive = true; // Boolean

/**
 * Data Types 
 *      Primitive Type 
 *          Number, String, Boolean, Undefined, Null, Symbol, BigInt
 *      Reference Type
 *          Object, Arrays, Function, Date, RegExp
 */

/**
 * Email, Phone Number, ID, 
 */

/**
 * Call by value and Call by reference 
 *      Primitive Type - Call by value 
 *      Reference Type - Call by reference 
 */

//Call By value 
let num1 = 100;
let num2 = num1; // Copying value of num1 into num2

num2 = 200; // Changing num2 doesn't affect num1

console.log(num1); // 100
console.log(num2); // 200

//Call by refernce 
let obj1 = { name: 'Alice' };
let obj2 = obj1; // obj2 is a reference to the same object

obj2.name = 'Bob'; // Changing property through obj2

console.log(obj2);
console.log(obj1);

console.log(obj1); // { name: 'Bob' }
console.log(obj2); // { name: 'Bob' }


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
console.log("numbers :", numbers);
numbers.push(4); // Adds at the end
console.log("Push 4:", numbers);
numbers.pop(); // Removes from the end
console.log("Pop 4:", numbers);
numbers.shift(); // Removes from the start
console.log("Shift :", numbers);
numbers.unshift(5); // Adds at the start
console.log("Unshift :", numbers);

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
