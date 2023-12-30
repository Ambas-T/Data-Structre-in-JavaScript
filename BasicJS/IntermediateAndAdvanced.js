// NOTE 1: Prototype and Constructor Function
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName;
};
let person = new Person('John', 'Doe');
console.log(person.nationality); 

Person.prototype.nationality = 'Ethiopia';

// Create instance of Person
let person1 = new Person('John', 'Doe');
console.log(person1.firstName); // John
console.log(person1.lastName); // Doe
console.log(person1.getFullName()); // John Doe
console.log(person1.nationality); // Ethiopia

//NOTE 2: Closure Example
function createCounter() {
    let count = 0;
    return function() {
        count += 1;
        return count;
    };
}

let counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2


function createGreeting(greeting) {
    return function(name) {
        return greeting + ', ' + name + '!';
    };
}

let sayHello = createGreeting("Hello");
let sayHi = createGreeting("Hi");

console.log(sayHello("Alice")); // Output: Hello, Alice!
console.log(sayHi("Bob")); // Output: Hi, Bob!




//NOTE 3 Higher-Order Function Example

// 3.1 Functions as Arguments
function forEach(array, action) {
    for (let i = 0; i < array.length; i++) {
        action(array[i]);
    }
}

const myArray = [1, 2, 3, 4, 5];
forEach(myArray, item => console.log(item)); // Logs each item in the array

// 3.2 Functions as Return Values
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(4)); // Output: 8
console.log(triple(4)); // Output: 12


//NOTE 4 Callback, Promises and Async/Await Example

function processOrder(order, callback) {
    console.log("Order processing started");
    // Simulate a delay like waiting for a server response
    setTimeout(() => {
        // Logic to process the order
        console.log("Order processed");
        callback(); // Call back when done
    }, 3000); // 3-second delay
}

function notifyUser() {
    console.log("Notification: Your order is ready!");
}

// Call processOrder and provide notifyUser as the callback
processOrder("Pizza", notifyUser);

let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data fetched successfully"); // Fulfill the promise
        // reject("Error fetching data"); // Or reject it
    }, 2000);
});

myPromise
    .then(data => console.log(data)) // Handle success
    .catch(error => console.error(error)); // Handle error

/**
 * States: A Promise has three states: pending (initial state), fulfilled (operation completed successfully), or rejected (operation failed).
 * Then/Catch: You handle the results with .then() for success and .catch() for errors.
 * Chaining: Promises can be chained, allowing for sequential asynchronous operations
 * 
 */
    

async function fetchData() {
    try {
        // Wait for the promise to resolve
        let response = await fetch('https://jsonplaceholder.typicode.com/users'); 
        let data = await response.json(); // Wait for this promise too
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchData();
        
//NOTE 5: Error Handling Example
try {
    throw new Error('An error occurred');
} catch (error) {
    console.log(error.message); // An error occurred
}

// NOTE 5: Destructuring and Spread Syntax Example

// 5.1 Destructuring 

// Array Destructuring 
const numbers = [1, 2, 3];
const [first, second, third] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(third); // Output: 3

// Object Destructuring
const person2 = { name: 'Alice', age: 30 };
const { name, age } = person2;

console.log(name); // Output: Alice
console.log(age); // Output: 30

// 5.2 Spread Syntax 

// Spread in Arrays 
const firstGroup = [1, 2, 3];
const secondGroup = [4, 5, 6];
const combined = [...firstGroup, ...secondGroup];

console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

// Spread in Objects 
const personDetails = { name: 'Alice', age: 30 };
const addressDetails = { city: 'Wonderland', country: 'Fairyland' };
const fullDetails = { ...personDetails, ...addressDetails };

console.log(fullDetails); 
// Output: { name: 'Alice', age: 30, city: 'Wonderland', country: 'Fairyland' }

//NOTE 6: Template Literals and Arrow Function Example

const getPerson = () => {
    const name = "John";
    const age = 30;
    return `Name: ${name}, Age: ${age}`;
};
console.log(getPerson()); // Output: Name: John, Age: 30


//************************************************************/
//****************** DESIGN PATTERN **************************/
const myModule = (function() {
    let privateVar = 'I am private';
    let publicMethod = function() {
        console.log('Accessing the public method!');
    };

    return {
        publicMethod: publicMethod
    };
})();

myModule.publicMethod(); // Accessing the public method!
// myModule.privateVar is not accessible from outside

function EventObserver() {
    this.observers = [];

    this.subscribe = function(fn) {
        this.observers.push(fn);
    };

    this.unsubscribe = function(fnToRemove) {
        this.observers = this.observers.filter(fn => {
            if (fn !== fnToRemove) return fn;
        });
    };

    this.fire = function() {
        this.observers.forEach(fn => {
            fn.call();
        });
    };
}

const observer = new EventObserver();

function logSomething() {
    console.log('Something happened!');
}

observer.subscribe(logSomething);
observer.fire(); // Logs 'Something happened!'
observer.unsubscribe(logSomething);
observer.fire(); // Nothing happens

const Singleton = (function() {
    let instance;

    function createInstance() {
        const object = new Object("I am the instance");
        return object;
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // true


//NOTE Async/Await 

async function loadData() {
    try {
        const usersResponse = await fetch('/api/users');
        const users = await usersResponse.json();
        const postsResponse = await fetch('/api/posts');
        const posts = await postsResponse.json();
        // Use users and posts here
    } catch (error) {
        console.error(error);
    }
}


