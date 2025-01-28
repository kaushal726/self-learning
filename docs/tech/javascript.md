---
title: React js Documentation
description: React Learning and Documentation.
owners: Kaushal Raj
authors: Kaushal Raj
categories: Frontend and Documentation
tags: Frontend, Documentation, Security, Stylings
---

# JavaScript Documentation

## **What is JavaScript (JS)**

JavaScript (JS) is a **programming language** used to make web pages dynamic and interactive. It runs in the browser and helps add functionalities like animations, event handling, and updating content dynamically. It is a lightweight, interpreted, or just-in-time compiled language.

_Real-Life Example_:  
Imagine you are on an e-commerce site. When you click on "Add to Cart," the item is instantly added without reloading the page. JavaScript makes this possible.

---

## **JavaScript Engine**

A JavaScript engine is a **program that executes JavaScript code**. Every browser has its own JS engine. For example:

- Google Chrome uses **V8**.
- Firefox uses **SpiderMonkey**.
- Microsoft Edge uses **Chakra**.

_Real-Life Example_:  
Think of the engine as the "brain" of the browser that understands and executes JavaScript instructions.

---

## **ES Versions**

ES (ECMAScript) is the **standard of JavaScript**. Major versions include:

- **ES5**: Introduced `strict mode`, JSON, and `Array.prototype` methods like `forEach`.
- **ES6 (ES2015)**: Brought features like `let`, `const`, arrow functions, classes, and promises.
- **ESNext**: Refers to the latest features beyond ES6.

_Real-Life Example_:  
ES6 added features like `const` and `let` to avoid the confusion of using `var`.

---

## **Strict Mode in JavaScript**

"Strict mode" is a way to write cleaner JavaScript by **eliminating silent errors**. It prevents using undeclared variables and certain bad practices.

_Real-Life Example_:

```javascript
"use strict";
x = 10; // Error: 'x' is not defined.
```

---

## **Call**

The `call()` method allows you to **call a function with a specific `this` context**.

_Real-Life Example_:

```javascript
const person = { name: "Kaushal" };
function greet() {
  console.log(`Hello, ${this.name}`);
}
greet.call(person); // Hello, Kaushal
```

---

## **Apply**

`apply()` is similar to `call()`, but it takes **arguments as an array**.

_Real-Life Example_:

```javascript
const person = { name: "Kaushal" };
function greet(city, country) {
  console.log(`Hello, ${this.name} from ${city}, ${country}`);
}
greet.apply(person, ["Delhi", "India"]); // Hello, Kaushal from Delhi, India
```

---

## **Bind**

`bind()` creates a **new function with `this` context bound** to a specific object.

_Real-Life Example_:

```javascript
const person = { name: "Kaushal" };
function greet() {
  console.log(`Hello, ${this.name}`);
}
const boundGreet = greet.bind(person);
boundGreet(); // Hello, Kaushal
```

---

## **Higher-Order Functions**

A function that **takes another function as an argument or returns a function** is called a higher-order function.

_Real-Life Example_:

```javascript
function greet(name) {
  return `Hello, ${name}`;
}
function processUser(name, func) {
  console.log(func(name));
}
processUser("Kaushal", greet); // Hello, Kaushal
```

---

## **First-Class Functions**

JavaScript treats functions as **first-class citizens**, meaning they can be stored in variables, passed as arguments, or returned from other functions.

_Real-Life Example_:

```javascript
const greet = function (name) {
  return `Hello, ${name}`;
};
console.log(greet("Kaushal")); // Hello, Kaushal
```

---

## **let, var, const**

- `var`: Function-scoped.
- `let`: Block-scoped.
- `const`: Block-scoped and immutable (cannot be reassigned).

_Real-Life Example_:

```javascript
{
  var x = 10; // Accessible outside
  let y = 20; // Block-scoped
  const z = 30; // Block-scoped and immutable
}
console.log(x); // 10
// console.log(y); // Error
// console.log(z); // Error
```

---

## **Callback Hell**

Callback hell occurs when **nested callbacks make the code unreadable**.

_Real-Life Example_:

```javascript
setTimeout(() => {
  console.log("Step 1");
  setTimeout(() => {
    console.log("Step 2");
    setTimeout(() => {
      console.log("Step 3");
    }, 1000);
  }, 1000);
}, 1000);
```

---

## **Promises**

Promises help handle asynchronous tasks by providing `.then()` and `.catch()` methods to avoid callback hell.

_Real-Life Example_:

```javascript
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Data fetched!"), 1000);
});
fetchData.then((data) => console.log(data)); // Data fetched!
```

---

## **Implicit Type Conversion**

JavaScript **converts types automatically** in some situations.

_Real-Life Example_:

```javascript
console.log("5" + 1); // "51" (string)
console.log("5" - 1); // 4 (number)
```

## **Hoisting**

Hoisting is a behavior in JavaScript where **variables and functions are moved to the top of their scope** during the compilation phase.

_Real-Life Example_:

```javascript
console.log(x); // undefined (hoisted, but not initialized)
var x = 10;
```

_With `let` and `const`:_

```javascript
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 20;
```

---

## **== vs ===**

- `==` checks for **value equality**, performing type conversion if needed.
- `===` checks for **strict equality** (value and type must match).

_Real-Life Example_:

```javascript
console.log(5 == "5"); // true (type conversion happens)
console.log(5 === "5"); // false (type mismatch)
```

---

## **`this` Keyword**

`this` refers to the **object that is executing the function**. It can vary depending on how the function is called.

_Real-Life Example_:

```javascript
const person = {
  name: "Kaushal",
  greet() {
    console.log(this.name);
  },
};
person.greet(); // Kaushal
```

---

## **Self-Invoking Functions/IIFE**

An Immediately Invoked Function Expression (IIFE) is a function that runs as soon as it is defined.

_Real-Life Example_:

```javascript
(function () {
  console.log("I run immediately!");
})(); // I run immediately!
```

---

## **Currying**

Currying is the process of **transforming a function with multiple arguments into a series of functions** that each take a single argument.

_Real-Life Example_:

```javascript
function add(a) {
  return function (b) {
    return a + b;
  };
}
console.log(add(5)(10)); // 15
```

---

## **Unary Functions**

A unary function is a function that **takes only one argument**.

_Real-Life Example_:

```javascript
const square = (x) => x * x;
console.log(square(5)); // 25
```

---

## **Pure Functions**

A pure function is one that **does not modify external variables or states** and always produces the same output for the same input.

_Real-Life Example_:

```javascript
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5
```

---

## **Event Bubbling**

Event bubbling is when an event **propagates from the child element to its parent**.

_Real-Life Example_:

```javascript
<div onclick="console.log('Parent clicked')">
  <button onclick="console.log('Button clicked')">Click Me</button>
</div>
// Clicking the button will trigger both logs.
```

---

## **Event Delegation**

Event delegation involves **attaching a single event listener to a parent element** to handle events for its child elements.

_Real-Life Example_:

```javascript
document.getElementById("parent").addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    console.log("Button clicked");
  }
});
```

---

## **Event Handling**

Event handling involves adding listeners to elements to perform actions when an event occurs (like `click`, `hover`, etc.).

_Real-Life Example_:

```javascript
document.getElementById("myButton").addEventListener("click", () => {
  alert("Button clicked!");
});
```

---

## **Closure**

A closure is created when a function **remembers variables from its outer scope** even after the outer function has finished execution.

_Real-Life Example_:

```javascript
function outer() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}
const increment = outer();
increment(); // 1
increment(); // 2
```

---

## **Data Binding**

Data binding is the process of **connecting UI elements to application data** so they update automatically when the data changes.

_Real-Life Example_: In frameworks like React, `state` binds data to components, and when the state changes, the UI updates.

---

## **Nullish Operator (`??`)**

The nullish operator returns the **right-hand value only if the left-hand value is `null` or `undefined`**.

_Real-Life Example_:

```javascript
let value = null;
let defaultValue = value ?? "Default";
console.log(defaultValue); // Default
```

---

## **Debouncing**

Debouncing ensures a function is **only executed after a specified time has passed since the last invocation**.

_Real-Life Example_:  
Typing in a search bar delays API calls until the user stops typing.

```javascript
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}
```

---

## **Throttling**

Throttling ensures a function **executes at regular intervals**, even if triggered continuously.

_Real-Life Example_:  
Scrolling events trigger updates at fixed intervals.

```javascript
function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}
```

---

## **Spread Operator**

The spread operator (`...`) expands **iterable elements** into individual elements.

_Real-Life Example_:

```javascript
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];
console.log(newArr); // [1, 2, 3, 4, 5]
```

---

## **Rest Operator**

The rest operator (`...`) combines **multiple elements into a single array**.

_Real-Life Example_:

```javascript
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
```

## **Data Storage in JavaScript**

Web applications often require ways to store data on the client side. Let's dive into the most commonly used storage mechanisms: **Local Storage**, **Session Storage**, **IndexedDB**, and **Cookies**. We'll explore what they are, how they work, their differences, and real-life examples.

---

### **1. Local Storage**

**Local Storage** is a key-value pair-based storage mechanism that allows you to store data in the browser **without an expiration date**. The data persists even after the browser is closed and reopened.

#### **Key Characteristics:**

- Stores data **permanently** (until explicitly removed).
- Maximum storage capacity: ~5MB per domain (varies by browser).
- Data is stored as **strings**.
- Accessible only within the same domain.

#### **APIs and Methods:**

- `localStorage.setItem(key, value)` – Store a key-value pair.
- `localStorage.getItem(key)` – Retrieve a value using its key.
- `localStorage.removeItem(key)` – Remove a key-value pair.
- `localStorage.clear()` – Clear all stored data.

#### **Real-Life Example:**

Saving user preferences:

```javascript
// Storing a user's theme preference
localStorage.setItem("theme", "dark");

// Retrieving the stored theme
const theme = localStorage.getItem("theme");
console.log(theme); // Output: dark

// Removing the stored theme
localStorage.removeItem("theme");
```

---

### **2. Session Storage**

**Session Storage** is similar to Local Storage but with one key difference: the data is cleared when the **browser tab is closed**.

#### **Key Characteristics:**

- Data persists **only for the session** (browser tab).
- Maximum storage capacity: ~5MB per domain (same as Local Storage).
- Data is stored as **strings**.
- Only accessible within the same tab and domain.

#### **APIs and Methods:**

- Same as Local Storage (`setItem`, `getItem`, `removeItem`, `clear`).

#### **Real-Life Example:**

Storing temporary data like form inputs:

```javascript
// Saving form input
sessionStorage.setItem("username", "Kaushal");

// Retrieving the input
const username = sessionStorage.getItem("username");
console.log(username); // Output: Kaushal

// Data will be cleared once the tab is closed.
```

---

### **3. IndexedDB**

**IndexedDB** is a **low-level API** for client-side storage of large amounts of structured data, including files and blobs. It is asynchronous and transactional, designed for more complex applications.

#### **Key Characteristics:**

- Stores data in the form of **key-value pairs** or objects.
- Can store **structured data** (e.g., arrays, objects, blobs).
- Allows queries using indexes and cursors.
- Storage size can be much larger (hundreds of MBs).
- Data persists even after the browser is closed.

#### **APIs and Methods:**

IndexedDB uses an event-based API, so it’s slightly more complex than Local or Session Storage.

#### **Real-Life Example:**

Storing offline application data:

```javascript
// Open a database
const request = indexedDB.open("MyDatabase", 1);

request.onupgradeneeded = function (event) {
  const db = event.target.result;
  // Create an object store
  const objectStore = db.createObjectStore("Users", { keyPath: "id" });
  objectStore.createIndex("name", "name", { unique: false });
};

request.onsuccess = function (event) {
  const db = event.target.result;
  const transaction = db.transaction("Users", "readwrite");
  const store = transaction.objectStore("Users");

  // Add data
  store.add({ id: 1, name: "Kaushal", age: 25 });
};
```

---

### **4. Cookies**

Cookies are small pieces of data stored in the browser, mainly used for **session tracking** and **authentication**. Cookies can be sent back and forth between the client and server with every HTTP request.

#### **Key Characteristics:**

- Data is stored as **key-value pairs**.
- Cookies are sent to the server with each HTTP request.
- Can be set to expire after a certain time (`Expires` or `Max-Age` attributes).
- Limited storage capacity: ~4KB per cookie.
- Can be made secure using the `Secure` and `HttpOnly` flags.

#### **APIs and Methods:**

- Setting a cookie:
  ```javascript
  document.cookie =
    "name=Kaushal; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";
  ```
- Reading cookies:
  ```javascript
  console.log(document.cookie); // Output: name=Kaushal
  ```
- Deleting cookies:
  ```javascript
  document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
  ```

#### **Real-Life Example:**

Storing login tokens:

```javascript
// Setting a cookie with an expiration time
document.cookie = "token=abc123; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";

// Reading the token cookie
const cookies = document.cookie;
console.log(cookies); // Output: token=abc123
```

---

### **Comparison of Storage Mechanisms**

| Feature                  | Local Storage         | Session Storage | IndexedDB               | Cookies                  |
| ------------------------ | --------------------- | --------------- | ----------------------- | ------------------------ |
| **Data Persistence**     | Permanent             | Session-only    | Permanent               | Depends on expiration    |
| **Capacity**             | ~5MB                  | ~5MB            | Hundreds of MBs         | ~4KB per cookie          |
| **Data Type**            | Strings               | Strings         | Key-value/object        | Strings                  |
| **Server Communication** | No                    | No              | No                      | Yes                      |
| **Use Case**             | Preferences, settings | Temporary data  | Complex structured data | Authentication, tracking |

---

### **Best Practices**

- Use **Local Storage** for simple, permanent client-side storage.
- Use **Session Storage** for temporary data like unsaved form inputs.
- Use **IndexedDB** for large, complex data like offline applications.
- Use **Cookies** for server-side communication, session tracking, and authentication tokens.

## **Asynchronous Programming in JavaScript**

JavaScript is single-threaded, meaning it executes one task at a time. To handle long-running operations (e.g., API calls, timers), asynchronous programming is used to avoid blocking the main thread. Here’s a deep dive into the key concepts related to asynchronous programming.

---

### **Callbacks**

A **callback** is a function passed as an argument to another function, which is then invoked after the completion of an asynchronous operation.

#### **How It Works:**

- A callback function is executed only when the task it is associated with is completed.
- Commonly used in APIs, event handling, or asynchronous tasks like reading files or fetching data.

#### **Real-Life Example:**

Imagine you order food online. The callback is like a notification sent to you when the delivery is complete.

#### **Code Example:**

```javascript
function fetchData(callback) {
  console.log("Fetching data...");
  setTimeout(() => {
    console.log("Data fetched!");
    callback("Here's your data!");
  }, 2000);
}

function handleData(data) {
  console.log(data);
}

// Using a callback
fetchData(handleData);
```

---

### **Memoization**

**Memoization** is an optimization technique where the result of a function call is cached so that future calls with the same inputs can return the cached result, avoiding redundant computations.

#### **Key Features:**

- Improves performance for expensive calculations.
- Commonly used in recursive algorithms like Fibonacci.

#### **Real-Life Example:**

You look up a phone number once and save it in your contacts. Next time, instead of looking it up again, you retrieve it from your contacts.

#### **Code Example:**

```javascript
function memoizedFactorial() {
  const cache = {};
  return function factorial(n) {
    if (n in cache) return cache[n];
    if (n === 0 || n === 1) return 1;
    cache[n] = n * factorial(n - 1);
    return cache[n];
  };
}

const factorial = memoizedFactorial();
console.log(factorial(5)); // Calculates and caches
console.log(factorial(5)); // Returns cached result
```

---

### **Promises**

A **Promise** represents a value that will be resolved in the future. It is used to handle asynchronous operations more effectively, avoiding callback nesting (callback hell).

#### **States of a Promise:**

1. **Pending**: Initial state, operation not yet completed.
2. **Resolved**: Operation completed successfully.
3. **Rejected**: Operation failed.

#### **Real-Life Example:**

Ordering a package online:

- Pending: Order is placed.
- Resolved: Package is delivered.
- Rejected: Package is lost.

#### **Code Example:**

```javascript
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true; // Simulate success/failure
    success
      ? resolve("Data fetched successfully!")
      : reject("Error fetching data.");
  }, 2000);
});

fetchData
  .then((data) => console.log(data)) // Handles success
  .catch((error) => console.error(error)); // Handles failure
```

---

### **Arrow Functions vs Normal Functions**

Arrow functions (`=>`) provide a concise way to define functions and do not bind their own `this`. They are suited for simple callbacks but lack features like `arguments`.

#### **Key Differences:**

1. **Syntax**: Arrow functions have a shorter syntax.
2. **`this` Binding**: Arrow functions inherit `this` from the surrounding context; normal functions have their own `this`.
3. **Arguments**: Arrow functions do not have an `arguments` object.

#### **Real-Life Example:**

Using an arrow function for concise callbacks:

```javascript
// Arrow Function
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

// Normal Function
function multiply(a, b) {
  return a * b;
}
console.log(multiply(2, 3)); // 6
```

---

### **Generator Functions**

**Generator functions** allow you to pause and resume function execution using the `yield` keyword.

#### **How It Works:**

- Defined using `function*`.
- Return an iterator object.
- Useful for producing values on demand (lazy evaluation).

#### **Real-Life Example:**

Distributing tasks to workers, one at a time.

#### **Code Example:**

```javascript
function* generateNumbers() {
  yield 1;
  yield 2;
  yield 3;
}

const iterator = generateNumbers();
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

---

### **Temporal Dead Zone (TDZ)**

The **Temporal Dead Zone** refers to the time between entering the scope of a variable declared with `let` or `const` and its declaration. Accessing the variable in this period throws a `ReferenceError`.

#### **Real-Life Example:**

You try to open a shop before it officially opens.

#### **Code Example:**

```javascript
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 10;
```

---

### **Callback Hell**

**Callback Hell** occurs when multiple nested callbacks make code difficult to read and maintain.

#### **Real-Life Example:**

Imagine giving instructions through a chain of middlemen, each depending on the previous one.

#### **Code Example (Callback Hell):**

```javascript
function firstTask(callback) {
  setTimeout(() => {
    console.log("First task done.");
    callback();
  }, 1000);
}

function secondTask(callback) {
  setTimeout(() => {
    console.log("Second task done.");
    callback();
  }, 1000);
}

firstTask(() => {
  secondTask(() => {
    console.log("All tasks done.");
  });
});
```

---

### **Best Practices for Asynchronous Programming**

1. Use **Promises** or **async/await** to avoid callback hell.
2. Use **Memoization** to optimize expensive computations.
3. Use **Generator Functions** for on-demand data processing.
4. Understand **this** in arrow functions to avoid bugs.

## **Scope and Environment in JavaScript**

JavaScript's scope defines where a variable or function is accessible in the code. The environment refers to the surrounding context or state in which the code executes.

---

### **Lexical Scoping**

Lexical scoping means that a variable's scope is determined by its position in the code at the time of writing, not at runtime. Inner functions can access variables from their outer functions, forming a **scope chain**.

#### **Key Points:**

- Functions can access variables declared in their outer scope.
- The scope chain determines the hierarchy of variable access.

#### **Real-Life Example:**

Imagine a house with rooms. Each room has its own items (local variables), but you can access items in the house's living room (outer scope).

#### **Code Example:**

```javascript
function outer() {
  const outerVar = "I am from outer scope";

  function inner() {
    console.log(outerVar); // Accesses variable from the outer scope
  }

  inner();
}

outer();
```

---

## **DOM and BOM**

### **DOM (Document Object Model)**

The DOM represents the structure of an HTML document as a tree, where elements are nodes. Using the DOM, you can interact with and manipulate HTML and CSS programmatically.

#### **Key Points:**

- Access and modify HTML elements (`document.getElementById`, `querySelector`, etc.).
- Add, delete, or update elements dynamically.
- Change styles and attributes.

#### **Real-Life Example:**

When you click a button on a webpage, the DOM handles what happens to the button (e.g., changing its color or text).

#### **Code Example:**

```javascript
// Changing the text of an element with ID 'myButton'
document.getElementById("myButton").innerText = "Clicked!";
```

---

### **BOM (Browser Object Model)**

The BOM represents everything provided by the browser outside the DOM, including browser-specific objects like `window`, `navigator`, and `history`.

#### **Key Features:**

- Control browser actions (e.g., open new tabs with `window.open()`).
- Access browser details (e.g., `navigator.userAgent` for the browser name).
- Interact with browser history (`history.back()`, `history.forward()`).

#### **Real-Life Example:**

When you navigate back to a previous page using the browser's "back" button, you interact with the BOM.

#### **Code Example:**

```javascript
// Alerting the browser's user agent
console.log(window.navigator.userAgent);
```

---

## **Data Types and Operations**

### **JavaScript Data Types**

JavaScript has two categories of data types:

1. **Primitive Types:**

   - String (`"Hello"`)
   - Number (`42`)
   - Boolean (`true` or `false`)
   - Null (`null`)
   - Undefined (`undefined`)
   - Symbol (`Symbol('id')`)
   - BigInt (`123n`)

2. **Non-Primitive (Objects):**
   - Objects
   - Arrays
   - Functions

#### **Real-Life Example:**

Think of data types as different containers:

- Numbers are like calculators.
- Strings are like diaries that hold text.
- Arrays are like baskets holding multiple items.

#### **Code Example:**

```javascript
const name = "Kaushal"; // String
const age = 25; // Number
const isStudent = true; // Boolean
const skills = ["React", "Node.js"]; // Array
```

---

### **Spread Operator**

The **spread operator (`...`)** allows you to expand or copy elements of arrays, objects, or strings into new ones.

#### **Key Uses:**

1. Combine or clone arrays and objects.
2. Pass array elements as arguments to functions.

#### **Real-Life Example:**

Imagine unpacking a box of chocolates and spreading them on a tray. Each piece is now separate and easy to access.

#### **Code Example 1: Cloning and Merging Arrays**

```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]
console.log(arr2);
```

#### **Code Example 2: Cloning an Object**

```javascript
const person = { name: "Kaushal", age: 25 };
const clonedPerson = { ...person, city: "Delhi" };
console.log(clonedPerson); // { name: 'Kaushal', age: 25, city: 'Delhi' }
```

---

### **Key Differences: DOM vs BOM**

| **Feature**    | **DOM**                                | **BOM**                              |
| -------------- | -------------------------------------- | ------------------------------------ |
| **Definition** | Represents HTML document structure.    | Represents browser-specific objects. |
| **Focus**      | Handles web page content.              | Handles browser environment.         |
| **Examples**   | `document.querySelector`, `innerHTML`. | `window.open`, `navigator`.          |
