---
title: NodeJs Documentation
description: NodeJs Learning and Documentation.
owners: Kaushal Raj
authors: Kaushal Raj
categories: Backend, Apis
tags: Backend, Documentation, Apis, Database
---

## Node.js Documentation

### **Node.js and V8 Engine**

Node.js is a runtime environment that allows JavaScript to run outside the browser. It is built on the **V8 engine**, which is Google's open-source JavaScript engine used in Google Chrome.

#### **What is the V8 Engine?**

V8 is a high-performance JavaScript engine developed by Google. It converts JavaScript code into machine code for faster execution.

#### **Real-Life Example:**

Imagine V8 as a translator who converts English (JavaScript) into a language that a computer (processor) understands (machine code). The faster the translator, the quicker the response.

---

### **ECMA Script**

ECMAScript (ES) is a standardized scripting language that JavaScript follows. It defines the rules and syntax of JavaScript.

#### **Why is ECMA Script Important?**

- It ensures consistency in JavaScript across different environments.
- New features like `let`, `const`, arrow functions, and async/await are introduced in newer versions (ES6, ES7, etc.).

#### **Real-Life Example:**

Think of ECMAScript as a rulebook for a game. Different versions introduce new rules to improve gameplay, just like ES6 and ES7 introduced better features for JavaScript.

---

### **Node.js Architecture**

Node.js follows an **event-driven, non-blocking I/O** model. This makes it highly scalable and efficient for handling multiple requests simultaneously.

#### **How It Works?**

- A request is received by Node.js.
- The event loop processes the request asynchronously.
- If the request requires I/O (e.g., database query), Node.js delegates it to worker threads.
- Once completed, the response is sent back.

#### **Real-Life Example:**

Think of a restaurant where a waiter takes multiple orders without waiting for one to be completed. The chef prepares food (I/O operation), and once ready, the waiter serves it to the customer. This is how Node.js handles multiple requests efficiently.

---

### **How Humans and Computers Read Code**

- Humans read code logically, understanding the purpose and flow.
- Computers read code **line by line** in a structured way and execute commands as instructed.

#### **Real-Life Example:**

A human reads a recipe as a whole, understanding ingredients and steps. A computer, like a robotic chef, follows each step precisely, executing one at a time unless programmed to multitask.

---

### **Global Variables in Node.js**

Global variables in Node.js are variables that can be accessed anywhere in the application.

#### **Common Global Variables in Node.js:**

- `__dirname` - The directory of the current script.
- `__filename` - The name of the current script.
- `process` - Provides information about the Node.js process.
- `global` - Stores global variables.

#### **Example:**

```javascript
console.log(__dirname); // Prints the directory path
console.log(__filename); // Prints the file name
```

#### **Real-Life Example:**

Think of `global` as a school's notice board where common information (like holidays) is available to all students (scripts).

---

### **Modules in Node.js**

Modules help in organizing code into separate files, making the code more manageable and reusable.

#### **Types of Modules:**

- **Built-in Modules** - Predefined in Node.js (e.g., `fs`, `http`, `path`).
- **Custom Modules** - User-defined modules for specific functionalities.
- **Third-party Modules** - Installed via npm (e.g., Express.js, Lodash).

#### **Example:**

Creating and using a custom module:

**math.js** (Custom module)

```javascript
exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;
```

**app.js** (Importing module)

```javascript
const math = require("./math");
console.log(math.add(5, 3)); // Outputs: 8
```

#### **Real-Life Example:**

Think of modules as different subjects in school. Instead of learning everything in one book, subjects (modules) are divided into separate books (files) for better understanding.

---
