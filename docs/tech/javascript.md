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

---

## **Objects in JavaScript**

An **object** in JavaScript is a collection of key-value pairs, where the keys (also called properties) are strings (or Symbols) and the values can be any data type (string, number, array, another object, etc.).

---

### **Key Concepts of Objects**

1. **Object Keys:**

   - Keys are the names of the properties of an object.
   - They are always strings or symbols.

   **Real-Life Example:**
   Imagine a contact book entry where the name (`"name"`) is the key and the phone number (`"9876543210"`) is the value.

   **Code Example:**

   ```javascript
   const contact = {
     name: "Kaushal",
     phone: "9876543210",
   };

   console.log(Object.keys(contact)); // ['name', 'phone']
   ```

---

2. **Object Values:**

   - Values are the data assigned to the keys of an object.
   - These can be strings, numbers, booleans, arrays, or other objects.

   **Real-Life Example:**
   Think of a product's price. The `price` (key) has a value like `100`.

   **Code Example:**

   ```javascript
   const product = {
     name: "Laptop",
     price: 100000,
   };

   console.log(Object.values(product)); // ['Laptop', 100000]
   ```

---

3. **Object.entries():**

   - Returns an array of key-value pairs for an object.

   **Real-Life Example:**
   When you have a list of items with their quantities, and you want to see both item names and quantities together.

   **Code Example:**

   ```javascript
   const shoppingList = {
     apples: 5,
     bananas: 3,
     oranges: 8,
   };

   console.log(Object.entries(shoppingList));
   // [['apples', 5], ['bananas', 3], ['oranges', 8]]
   ```

---

4. **Object.seal():**

   - Seals an object, preventing the addition or removal of properties. However, the values of existing properties can still be modified.

   **Real-Life Example:**
   Think of a form where you can't add new fields or remove existing ones but can update the entered values.

   **Code Example:**

   ```javascript
   const car = {
     brand: "Tesla",
     model: "Model 3",
   };

   Object.seal(car);
   car.year = 2022; // Cannot add new property
   car.brand = "Toyota"; // Can modify existing property
   console.log(car); // { brand: 'Toyota', model: 'Model 3' }
   ```

---

5. **Object.is():**

   - Compares two values for strict equality, similar to `===` but handles special cases like `NaN`.

   **Real-Life Example:**
   Imagine comparing two forms of the same product ID to ensure they are identical.

   **Code Example:**

   ```javascript
   console.log(Object.is(25, 25)); // true
   console.log(Object.is(NaN, NaN)); // true (unlike ===)
   console.log(Object.is(0, -0)); // false (unlike ===)
   ```

---

6. **Object.assign():**

   - Copies properties from one or more source objects to a target object.

   **Real-Life Example:**
   Think of merging two user profiles, where one has personal details and the other has preferences.

   **Code Example:**

   ```javascript
   const personalDetails = { name: "Kaushal", age: 25 };
   const preferences = { theme: "dark", language: "English" };

   const userProfile = Object.assign({}, personalDetails, preferences);
   console.log(userProfile);
   // { name: 'Kaushal', age: 25, theme: 'dark', language: 'English' }
   ```

---

7. **Object.create(): (Optional)**

   - Creates a new object with the specified prototype object.

   **Real-Life Example:**
   Imagine building a custom vehicle where a base blueprint is used, but you can modify specific features.

   **Code Example:**

   ```javascript
   const vehicle = {
     type: "Car",
     start() {
       console.log("Starting the vehicle...");
     },
   };

   const myCar = Object.create(vehicle);
   myCar.color = "Red";
   console.log(myCar.type); // 'Car' (inherited from vehicle)
   myCar.start(); // 'Starting the vehicle...'
   ```

---

## **JavaScript Arrays and Methods**

An **array** in JavaScript is a data structure that stores multiple values in a single variable. Arrays can hold elements of any data type (numbers, strings, objects, etc.).

---

### **Array Methods**

### **1. Array.map()**

- **Purpose:** Creates a new array by applying a function to each element of the original array.
- **Real-Life Example:** Imagine you have prices in USD and need to convert them to INR.

```javascript
const pricesUSD = [10, 20, 30];
const pricesINR = pricesUSD.map((price) => price * 80);
console.log(pricesINR); // [800, 1600, 2400]
```

---

### **2. Array.filter()**

- **Purpose:** Filters elements based on a condition and returns a new array.
- **Real-Life Example:** Filtering out students who scored above 50.

```javascript
const scores = [40, 55, 70, 35];
const passed = scores.filter((score) => score > 50);
console.log(passed); // [55, 70]
```

---

### **3. Array.reduce()**

- **Purpose:** Reduces the array to a single value by applying a function.
- **Real-Life Example:** Calculating the total price of items in a shopping cart.

```javascript
const cart = [100, 200, 300];
const total = cart.reduce((sum, price) => sum + price, 0);
console.log(total); // 600
```

---

### **4. Array.includes()**

- **Purpose:** Checks if an array contains a specific value.
- **Real-Life Example:** Verifying if a guest is on the invite list.

```javascript
const guests = ["Alice", "Bob", "Charlie"];
console.log(guests.includes("Alice")); // true
console.log(guests.includes("David")); // false
```

---

### **5. Array.join()**

- **Purpose:** Combines all elements of an array into a single string with a specified separator.
- **Real-Life Example:** Creating a sentence from an array of words.

```javascript
const words = ["Hello", "world"];
console.log(words.join(" ")); // "Hello world"
```

---

### **6. Array.pop()**

- **Purpose:** Removes the last element from an array and returns it.
- **Real-Life Example:** Removing the last item from a to-do list.

```javascript
const tasks = ["task1", "task2", "task3"];
const lastTask = tasks.pop();
console.log(lastTask); // "task3"
console.log(tasks); // ["task1", "task2"]
```

---

### **7. Array.push()**

- **Purpose:** Adds one or more elements to the end of an array.
- **Real-Life Example:** Adding a new task to a to-do list.

```javascript
const tasks = ["task1", "task2"];
tasks.push("task3");
console.log(tasks); // ["task1", "task2", "task3"]
```

---

### **8. Array.slice()**

- **Purpose:** Extracts a portion of an array into a new array without modifying the original.
- **Real-Life Example:** Selecting the first three items of a product list.

```javascript
const products = ["p1", "p2", "p3", "p4"];
const topProducts = products.slice(0, 3);
console.log(topProducts); // ["p1", "p2", "p3"]
```

---

### **9. Array.sort()**

- **Purpose:** Sorts the elements of an array in place.
- **Real-Life Example:** Sorting marks in ascending order.

```javascript
const marks = [90, 70, 80, 60];
marks.sort((a, b) => a - b);
console.log(marks); // [60, 70, 80, 90]
```

---

### **10. Array.some()**

- **Purpose:** Checks if at least one element satisfies a condition.
- **Real-Life Example:** Checking if a shopping list has any expensive items.

```javascript
const prices = [50, 100, 200];
console.log(prices.some((price) => price > 150)); // true
```

---

### **11. Array.reverse()**

- **Purpose:** Reverses the elements of an array in place.
- **Real-Life Example:** Reversing the order of tasks.

```javascript
const tasks = ["task1", "task2", "task3"];
tasks.reverse();
console.log(tasks); // ["task3", "task2", "task1"]
```

---

### **12. Array.flat()**

- **Purpose:** Flattens a nested array into a single array.
- **Real-Life Example:** Flattening a list of product categories.

```javascript
const categories = ["Electronics", ["Mobiles", "Laptops"], "Furniture"];
const flatCategories = categories.flat();
console.log(flatCategories); // ["Electronics", "Mobiles", "Laptops", "Furniture"]
```

---

### **13. Array.every()**

- **Purpose:** Checks if all elements satisfy a condition.
- **Real-Life Example:** Verifying if all students passed a test.

```javascript
const scores = [60, 70, 80];
console.log(scores.every((score) => score > 50)); // true
```

---

## **JavaScript Strings and Methods**

A **string** in JavaScript is a sequence of characters used to represent text. Strings are immutable, meaning their value cannot be changed once created (but you can create a new string from it).

---

### **String Methods**

### **1. String.trim()**

- **Purpose:** Removes whitespace from both ends of a string.
- **Real-Life Example:** Cleaning up user input in a form.

```javascript
const userInput = "   Kaushal   ";
const cleanedInput = userInput.trim();
console.log(cleanedInput); // "Kaushal"
```

---

### **2. String.toString()**

- **Purpose:** Converts a value to a string.
- **Real-Life Example:** Converting a number or object to a string.

```javascript
const number = 123;
console.log(number.toString()); // "123"
```

---

### **3. String.toLowerCase()**

- **Purpose:** Converts all characters in a string to lowercase.
- **Real-Life Example:** Making case-insensitive comparisons.

```javascript
const name = "KAUSHAL";
console.log(name.toLowerCase()); // "kaushal"
```

---

### **4. String.toUpperCase()**

- **Purpose:** Converts all characters in a string to uppercase.
- **Real-Life Example:** Formatting user input to uppercase for uniformity.

```javascript
const name = "kaushal";
console.log(name.toUpperCase()); // "KAUSHAL"
```

---

### **5. String.substring()**

- **Purpose:** Extracts a part of a string between two specified indices.
- **Real-Life Example:** Extracting the first name from a full name.

```javascript
const fullName = "Kaushal Raj";
const firstName = fullName.substring(0, 7);
console.log(firstName); // "Kaushal"
```

---

### **6. String.split()**

- **Purpose:** Splits a string into an array based on a specified delimiter.
- **Real-Life Example:** Splitting a sentence into words.

```javascript
const sentence = "Learn React from Kaushal";
const words = sentence.split(" ");
console.log(words); // ["Learn", "React", "from", "Kaushal"]
```

---

### **7. String.slice()**

- **Purpose:** Extracts a portion of a string and returns it as a new string.
- **Real-Life Example:** Extracting the domain from an email address.

```javascript
const email = "kaushal@gmail.com";
const domain = email.slice(8);
console.log(domain); // "gmail.com"
```

---

### **8. String.replace() / String.replaceAll()**

- **Purpose:** Replaces occurrences of a substring with another substring.
- **Real-Life Example:** Replacing all spaces in a string with underscores for URL formatting.

```javascript
const sentence = "Learn React with Kaushal";
const newSentence = sentence.replace("React", "JavaScript");
console.log(newSentence); // "Learn JavaScript with Kaushal"

const text = "aabbcc";
const replacedText = text.replaceAll("a", "z");
console.log(replacedText); // "zzbbcc"
```

---

### **9. String.includes()**

- **Purpose:** Checks if a string contains a specific substring.
- **Real-Life Example:** Checking if a user input contains invalid characters.

```javascript
const password = "kaushal123";
console.log(password.includes("123")); // true
```

---

### **10. String.concat()**

- **Purpose:** Concatenates two or more strings.
- **Real-Life Example:** Combining first and last names to create a full name.

```javascript
const firstName = "Kaushal";
const lastName = "Raj";
const fullName = firstName.concat(" ", lastName);
console.log(fullName); // "Kaushal Raj"
```

---

### **11. String.charAt()**

- **Purpose:** Returns the character at a specific index in a string.
- **Real-Life Example:** Finding the first letter of a name.

```javascript
const name = "Kaushal";
console.log(name.charAt(0)); // "K"
```

---

### **12. String.at()**

- **Purpose:** Returns the character at a given index, supporting negative indices to count from the end.
- **Real-Life Example:** Getting the last character of a name.

```javascript
const name = "Kaushal";
console.log(name.at(-1)); // "l"
```

---

## **JavaScript Runtime Environment**

The **JavaScript Runtime Environment** is the system that provides JavaScript with all the necessary tools, libraries, and runtime features to execute code. It goes beyond just the JavaScript engine (like V8) by including APIs, libraries, and other components that allow JavaScript to interact with the external world (e.g., the DOM or server files).

---

### **Components of JavaScript Runtime Environment**

1. **JavaScript Engine:**

   - The core part of the runtime, which parses and executes JavaScript code.
   - Popular engines:
     - **V8**: Used by Chrome and Node.js.
     - **SpiderMonkey**: Used by Firefox.
     - **JavaScriptCore**: Used by Safari.
   - Executes the JavaScript code and optimizes its performance by compiling it to machine code.

2. **Web APIs (Browser Environment):**

   - Provided by browsers for tasks like:
     - **DOM manipulation:** `document.querySelector()`, `addEventListener()`
     - **Timers:** `setTimeout()`, `setInterval()`
     - **HTTP Requests:** `fetch()`
   - Example: You click a button, and the DOM API updates the webpage with new content.

3. **Node.js APIs (Server-Side Environment):**

   - Provides APIs for server-side operations:
     - File system access: `fs.readFile()`
     - Networking: `http.createServer()`
     - Process management: `process.env`

4. **Event Loop and Callback Queue:**
   - A mechanism to handle asynchronous tasks like I/O operations, timers, and events (explained further below).

---

### **Event Loop**

The **event loop** is a critical component of JavaScript's runtime, responsible for handling asynchronous operations. JavaScript is single-threaded, so the event loop allows it to perform non-blocking tasks by managing the execution of tasks in a coordinated manner.

---

#### **How the Event Loop Works**

1. **Call Stack:**

   - A stack-like structure where function calls are placed in order of execution.
   - Functions are executed one at a time in the stack.
   - Example:
     ```javascript
     function greet() {
       console.log("Hello!");
     }
     greet();
     // Output: "Hello!"
     ```

2. **Web APIs:**

   - When an asynchronous function (like `setTimeout` or `fetch`) is called, it is offloaded to the browser's Web API (or Node.js API in a server).

3. **Callback Queue:**

   - Once the asynchronous task is complete, its callback is sent to the **callback queue**.
   - Example:
     ```javascript
     setTimeout(() => {
       console.log("Timeout Finished!");
     }, 1000);
     console.log("Immediate Log");
     // Output:
     // "Immediate Log"
     // "Timeout Finished!"
     ```

4. **Event Loop:**
   - Continuously checks if the **call stack** is empty.
   - If empty, it takes the next task from the **callback queue** and pushes it onto the stack for execution.

---

#### **Real-Life Example of the Event Loop**

Imagine you're ordering food at a restaurant:

1. You place an order (main thread).
2. The chef starts preparing the meal (async task in Web API).
3. Meanwhile, the waiter serves other customers (non-blocking behavior).
4. Once your meal is ready, the waiter delivers it to your table (callback in the callback queue).

---

### **Runtime Environment: Browser vs. Node.js**

#### **Browser Runtime**

- Includes:
  - **JavaScript Engine** (e.g., V8).
  - **Web APIs** (e.g., DOM, fetch, setTimeout).
  - **Event Loop** (to handle async tasks).
- Example: A webpage updating content dynamically based on user interactions.

#### **Node.js Runtime**

- Includes:
  - **JavaScript Engine** (V8).
  - **Node.js APIs** (e.g., file system, networking).
  - **Event Loop** (to handle server-side async tasks).
- Example: A server reading files and sending responses to multiple users.

---

### **Real-Life Example of Runtime Environment**

1. **Browser Example:**  
   You're using an online shopping app:

   - You click a button to add a product to your cart (DOM manipulation).
   - The browser fetches product details from the server (Web API).
   - The cart updates without refreshing the page (event loop).

2. **Node.js Example:**  
   A chat application:
   - Users send messages (Node.js API handles the network request).
   - The server processes and forwards messages to other clients (event loop ensures non-blocking behavior).

---

### **Key Takeaways**

- The runtime environment is what makes JavaScript capable of interacting with the outside world (browser or server).
- The **event loop** ensures smooth execution of tasks without blocking the main thread.
- Both **browser** and **Node.js** have their own runtime environments tailored to specific use cases.

## **Data Handling in JavaScript**

Data handling in JavaScript involves managing and manipulating data, including objects, arrays, and dates. JavaScript provides powerful methods and techniques to handle data effectively, including deep and shallow copies, and date manipulations.

---

### **Deep Copy vs. Shallow Copy**

When you copy an object or array in JavaScript, there are two types of copies:

### **1. Shallow Copy**

- **Definition:** A shallow copy only copies the top-level properties. If the copied object contains nested objects or arrays, those references are shared, not duplicated.
- **Real-Life Example:** You copy a recipe, but the ingredients list is just a reference to the original.

#### Example of Shallow Copy:

```javascript
const original = { name: "Kaushal", address: { city: "Delhi" } };
const shallowCopy = { ...original };

shallowCopy.name = "Raj";
shallowCopy.address.city = "Mumbai";

console.log(original); // { name: "Kaushal", address: { city: "Mumbai" } }
console.log(shallowCopy); // { name: "Raj", address: { city: "Mumbai" } }
```

---

### **2. Deep Copy**

- **Definition:** A deep copy duplicates all levels of an object, including nested objects or arrays. Changes to the copy do not affect the original.
- **Real-Life Example:** You photocopy a document, so any edits to the photocopy don’t affect the original.

#### Example of Deep Copy:

```javascript
const original = { name: "Kaushal", address: { city: "Delhi" } };
const deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.name = "Raj";
deepCopy.address.city = "Mumbai";

console.log(original); // { name: "Kaushal", address: { city: "Delhi" } }
console.log(deepCopy); // { name: "Raj", address: { city: "Mumbai" } }
```

---

### **Date in JavaScript**

The `Date` object in JavaScript is used to work with dates and times. It provides methods to create, manipulate, and format dates.

#### **Creating a Date Object**

1. **Current Date and Time:**

   ```javascript
   const now = new Date();
   console.log(now); // Current date and time
   ```

2. **Specific Date:**

   ```javascript
   const specificDate = new Date("2025-01-28");
   console.log(specificDate); // Tue Jan 28 2025
   ```

3. **Date from Components:**
   ```javascript
   const componentsDate = new Date(2025, 0, 28, 10, 30);
   console.log(componentsDate); // Tue Jan 28 2025 10:30:00
   ```

---

### **Common Date Methods**

Here are the most useful methods to work with dates:

#### **1. Get Methods**

- `getFullYear()`: Returns the year.
- `getMonth()`: Returns the month (0-based).
- `getDate()`: Returns the day of the month.
- `getDay()`: Returns the day of the week (0 for Sunday).
- `getHours()`, `getMinutes()`, `getSeconds()`, `getMilliseconds()`: Return the respective components of the time.

**Example:**

```javascript
const now = new Date();
console.log(now.getFullYear()); // 2025
console.log(now.getMonth()); // 0 (January)
console.log(now.getDate()); // 28
console.log(now.getDay()); // 2 (Tuesday)
```

---

#### **2. Set Methods**

- `setFullYear(year)`: Sets the year.
- `setMonth(month)`: Sets the month.
- `setDate(day)`: Sets the day of the month.
- `setHours(hours)`, `setMinutes(minutes)`: Set respective time components.

**Example:**

```javascript
const date = new Date();
date.setFullYear(2030);
date.setMonth(5); // June
date.setDate(15);

console.log(date); // Sat Jun 15 2030
```

---

#### **3. Formatting Dates**

- `toDateString()`: Converts a date to a human-readable string.
- `toISOString()`: Converts a date to an ISO 8601 string.
- `toLocaleDateString()`: Formats the date based on a specific locale.

**Example:**

```javascript
const date = new Date();
console.log(date.toDateString()); // Tue Jan 28 2025
console.log(date.toISOString()); // 2025-01-28T00:00:00.000Z
console.log(date.toLocaleDateString("en-IN")); // 28/01/2025
```

---

### **Real-Life Example of Date Handling**

1. **Reminder App:**
   - Store a specific date for an event.
   - Compare the current date with the event date to send reminders.

```javascript
const eventDate = new Date("2025-02-01");
const today = new Date();

if (today < eventDate) {
  console.log("Event is upcoming!");
} else {
  console.log("Event is over.");
}
```

2. **Countdown Timer:**
   - Calculate the remaining time until a specific date.

```javascript
const futureDate = new Date("2025-02-01");
const now = new Date();
const diff = futureDate - now;

const days = Math.floor(diff / (1000 * 60 * 60 * 24));
console.log(`Days left: ${days}`);
```

---

Let’s deep dive into the additional topics I suggested earlier. I’ll break each topic into detailed explanations, examples, and real-life use cases to ensure clarity.

---

### **Prototype and Prototypal Inheritance**

**Definition**:  
Prototypal inheritance is a feature in JavaScript where objects can inherit properties and methods from other objects using a prototype chain.

#### **How It Works**:

1. Every JavaScript object has an internal link to another object called its prototype (`__proto__`).
2. When you access a property or method, JavaScript checks the object itself first. If not found, it looks up the prototype chain.

#### **Example**:

```javascript
const parent = {
  greet: function () {
    console.log("Hello from Parent!");
  },
};

const child = Object.create(parent);
child.sayHi = function () {
  console.log("Hi from Child!");
};

child.greet(); // Hello from Parent!
child.sayHi(); // Hi from Child!
```

**Real-Life Example**:  
Think of a family tree: a child inherits traits (e.g., eye color) from their parents but can also have their own unique traits.

---

### **Event Loop and Concurrency Model**

**Definition**:  
The event loop is a mechanism that JavaScript uses to handle asynchronous operations by continuously checking the call stack and the callback queue.

#### **How It Works**:

1. **Call Stack**: Functions are executed here.
2. **Callback Queue**: Asynchronous tasks (like `setTimeout`) wait here until the stack is empty.
3. The **event loop** moves tasks from the queue to the stack when the stack is clear.

#### **Example**:

```javascript
console.log("Start");

setTimeout(() => console.log("Async Operation"), 1000);

console.log("End");
// Output: Start, End, Async Operation
```

**Real-Life Example**:  
Imagine a queue at a bank. The teller (call stack) handles one person at a time. If someone needs extra processing (callback queue), they step aside until the teller is free.

---

### **Symbol Data Type**

**Definition**:  
`Symbol` is a unique and immutable data type, often used as object keys to avoid property name collisions.

#### **Example**:

```javascript
const id = Symbol("id");

const user = {
  name: "Kaushal",
  [id]: 12345,
};

console.log(user.id); // undefined (id is a symbol)
console.log(user[id]); // 12345
```

**Real-Life Example**:  
Symbols are like unique identification tags that can be used to avoid duplicate keys in an object.

---

### **WeakMap and WeakSet**

**Definition**:

1. **WeakMap**: Similar to `Map`, but keys must be objects, and the references are weak (can be garbage-collected).
2. **WeakSet**: Similar to `Set`, but stores objects and does not prevent garbage collection.

#### **Example**:

```javascript
let obj = { name: "Kaushal" };
const weakMap = new WeakMap();
weakMap.set(obj, "Developer");

console.log(weakMap.get(obj)); // Developer

obj = null; // Now obj is garbage collected
console.log(weakMap.get(obj)); // undefined
```

**Real-Life Example**:  
WeakMaps are like lockers that automatically clean up when the key (object) is removed.

---

### **Dynamic Imports**

**Definition**:  
Dynamic imports allow you to load JavaScript modules on demand.

#### **Example**:

```javascript
async function loadModule() {
  const { sayHello } = await import("./module.js");
  sayHello();
}

loadModule();
```

**Real-Life Example**:  
Imagine an online store where product details are loaded only when the user clicks on a product.

---

### **Intl API**

**Definition**:  
The `Intl` API is used for formatting dates, numbers, and strings according to locale.

#### **Example**:

```javascript
const number = 123456.789;

console.log(new Intl.NumberFormat("en-IN").format(number)); // 1,23,456.789
console.log(new Intl.DateTimeFormat("en-IN").format(new Date())); // 28/01/2025
```

**Real-Life Example**:  
Formatting prices in an e-commerce website for users from different countries.

---

### **BigInt**

**Definition**:  
`BigInt` is a data type used to store numbers larger than `Number.MAX_SAFE_INTEGER`.

#### **Example**:

```javascript
const bigNumber = BigInt("9007199254740991") + 1n;
console.log(bigNumber); // 9007199254740992n
```

**Real-Life Example**:  
Used for financial applications where precise calculations with very large numbers are required.

---

### **Error Handling**

**Definition**:  
Error handling in JavaScript ensures the program behaves gracefully when encountering unexpected issues.

#### **Example with `try...catch`:**

```javascript
try {
  throw new Error("Something went wrong!");
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Cleanup complete!");
}
```

**Real-Life Example**:  
Try-catch is like a seatbelt in a car, ensuring safety during unexpected events.

---

### **Functional Programming**

**Definition**:  
Functional programming is a programming paradigm that treats functions as first-class citizens and avoids changing state.

#### **Example of Pure Functions**:

```javascript
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5
```

**Real-Life Example**:  
A vending machine returns the same product for the same selection, ensuring consistency.

---

### **Error in JavaScript**

Errors in JavaScript occur when the code encounters issues that prevent it from executing properly. Errors can be handled to ensure the application doesn’t crash unexpectedly.

#### **Types of Errors**

1. **Syntax Error**:
   Happens when there’s a mistake in the syntax.

   ```javascript
   console.log("Hello World" // Missing closing parenthesis
   ```

2. **Reference Error**:  
   Occurs when accessing a variable that hasn’t been declared.

   ```javascript
   console.log(undeclaredVariable); // ReferenceError: undeclaredVariable is not defined
   ```

3. **Type Error**:  
   Happens when a value is not of the expected type.

   ```javascript
   const num = 5;
   num.toUpperCase(); // TypeError: num.toUpperCase is not a function
   ```

4. **Range Error**:  
   Thrown when a number is outside the range of legal values.

   ```javascript
   const arr = new Array(-5); // RangeError: Invalid array length
   ```

5. **Eval Error** (Rare):  
   Occurs when `eval()` is used incorrectly (deprecated in modern JavaScript).

   ```javascript
   eval("console.log('Hello'"); // Syntax error within eval
   ```

6. **URI Error**:  
   Happens during incorrect encoding/decoding of URI components.
   ```javascript
   decodeURIComponent("%"); // URIError: URI malformed
   ```

---

### **Web APIs in JavaScript**

Web APIs are browser-provided interfaces that allow developers to interact with the browser, manipulate the DOM, handle user events, or fetch data.

#### **Examples of Common Web APIs**:

1. **Fetch API**: For making network requests.

   ```javascript
   fetch("https://api.example.com/data")
     .then((response) => response.json())
     .then((data) => console.log(data))
     .catch((err) => console.error(err));
   ```

2. **Geolocation API**: For accessing user location.

   ```javascript
   navigator.geolocation.getCurrentPosition(
     (position) => console.log(position),
     (error) => console.error(error)
   );
   ```

3. **Local Storage API**: For storing data in the browser.

   ```javascript
   localStorage.setItem("key", "value");
   console.log(localStorage.getItem("key")); // "value"
   ```

4. **Event Listeners**: For interacting with the DOM.
   ```javascript
   document.querySelector("#button").addEventListener("click", () => {
     alert("Button clicked!");
   });
   ```

**Real-Life Example**:  
Web APIs are used to create dynamic web applications like weather apps (fetching data), GPS navigation (geolocation), or storing preferences (local storage).

---

### **`setTimeout` in JavaScript**

The `setTimeout` method delays the execution of a function by a specified number of milliseconds.

#### **Syntax**:

```javascript
setTimeout(callback, delay);
```

#### **Example**:

```javascript
console.log("Start");
setTimeout(() => {
  console.log("This message is delayed by 2 seconds");
}, 2000);
console.log("End");
// Output: Start, End, This message is delayed by 2 seconds
```

**Real-Life Example**:  
A spinner displayed during a network request can be hidden using `setTimeout` after the data is loaded.

---

### **`setInterval` in JavaScript**

The `setInterval` method repeatedly executes a function at specified intervals.

#### **Syntax**:

```javascript
setInterval(callback, interval);
```

#### **Example**:

```javascript
let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log(`Count: ${count}`);
  if (count === 5) clearInterval(intervalId);
}, 1000);
```

**Real-Life Example**:  
Displaying a live digital clock that updates every second.

---

### **DOM (Document Object Model)**

The DOM is a programming interface for HTML and XML documents, representing the page structure as a tree of nodes. JavaScript can manipulate the DOM to create dynamic web pages.

#### **Common DOM Manipulations**:

1. **Selecting Elements**:

   ```javascript
   const element = document.querySelector("#myElement");
   ```

2. **Changing Content**:

   ```javascript
   element.textContent = "New Content!";
   ```

3. **Adding Elements**:

   ```javascript
   const newDiv = document.createElement("div");
   newDiv.textContent = "I am new!";
   document.body.appendChild(newDiv);
   ```

4. **Removing Elements**:
   ```javascript
   element.remove();
   ```

**Real-Life Example**:  
In a shopping cart, the DOM is used to dynamically add or remove items when users interact with the cart.

---
