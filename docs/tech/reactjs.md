---
title: React js Documentation
description: React Learning and Documentation.
owners: Kaushal Raj
authors: Kaushal Raj
categories: Frontend and Documentation
tags: Frontend, Documentation, Security, Stylings
---

# React.js

## What is React.js?

React.js ek JavaScript library hai jo ki UI (User Interface) banane ke liye use hoti hai. Ye Facebook ne banayi thi aur iska main kaam single-page applications (SPA) banana hai jisme page reload ki zaroorat nahi padti. React component-based architecture par kaam karta hai.

**Real-life example:**
Ek mobile app socho jaise Zomato. Agar tum search karte ho aur naye restaurants dikhte hain bina page reload kiye, to yeh React.js ki wajah se possible hota hai.

---

## When was React created?

React.js ko Facebook ne 2013 me open-source kiya tha. Iska main purpose complex UI ko easily handle karna tha.

**Real-life example:**
Tum Facebook ka "Like" button socho, jo bina pura page reload kiye update hota hai.

---

## Framework vs Library

- **Framework:** Ek complete solution jo coding structure aur rules provide karta hai. Example: Angular.
- **Library:** Specific task ke liye functions provide karta hai, jisme zyada flexibility hoti hai. Example: React.js.

**Real-life example:**
Framework ek ready-made thali jaise hota hai, jisme sab kuch defined hota hai, aur library ek aise buffet jaise hoti hai jisme jo chahiye le sakte ho.

---

## NPX vs NPM

- **NPM (Node Package Manager):** Ye ek package manager hai jo dependencies ko install aur manage karta hai.
- **NPX:** Ye ek npm package runner hai jo bina install kiye packages ko run karne me madad karta hai.

**Real-life example:**
NPM ek kirane ki dukaan jaise hai jisme saman store hota hai, aur NPX ek aise messenger jaise hai jo saman lekar aata hai bina store kiye.

---

## NPM

NPM (Node Package Manager) ek tool hai jo Node.js ke saath aata hai aur open-source packages ko manage karne ke liye use hota hai.

**Real-life example:**
Jaise tum Flipkart se alag-alag brands ka saman order kar sakte ho, waise hi NPM alag-alag dependencies install karta hai.

---

## React vs React-DOM

- **React:** Ye core library hai jo components banane aur logic handle karne ke kaam aati hai.
- **React-DOM:** Ye React components ko web page ke HTML DOM me render karne ke liye use hoti hai.

**Real-life example:**
React ek actor jaise hai jo apni performance deta hai, aur React-DOM stage hai jahan wo perform karta hai.

---

## React.createElement and what does it return?

React.createElement ek method hai jo React elements banane ke liye use hoti hai. Ye ek JavaScript object return karta hai jo virtual DOM ka part banta hai.

**Real-life example:**
Jaise tum ek online shopping cart me items add karte ho aur wo list virtual hoti hai, waise hi React.createElement virtual DOM me elements add karta hai.

---

## Create Root

React 18 se pehle ReactDOM.render() use hota tha, ab "createRoot" function use hota hai jo asynchronous rendering allow karta hai.

**Example:**

```jsx
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));
root.render(<App />);
```

---

## Can we create two roots in one app?

Haan, hum ek application me do alag-alag roots bana sakte hain, lekin ye recommended nahi hai kyunki state management aur performance issues aa sakte hain.

**Real-life example:**
Jaise ek ghar me do kitchens banana possible hai, lekin maintenance mushkil ho sakti hai.

---

## createElement Parameters

React.createElement ke 3 main parameters hote hain:

1. **Type:** Element ka type (div, h1, p)
2. **Props:** Element ke attributes
3. **Children:** Jo content dikhana hai

**Example:**

```jsx
React.createElement("h1", { className: "title" }, "Hello World");
```

---

## Emmet

Emmet ek plugin hai jo HTML, CSS aur JSX likhne ko fast aur easy banata hai by using shortcuts.

**Example:**
Typing `div.container` gives `<div class="container"></div>`

**Real-life example:**
Jaise WhatsApp me shortcodes use karne par emojis aa jate hain, waise hi Emmet se code shortcuts milti hain.

---

## CDN

CDN (Content Delivery Network) ek server network hai jo files ko jaldi load karne ke liye use hota hai.

**Real-life example:**
Jaise Netflix apne content ko duniya bhar me servers pe rakhta hai taaki har jagah fast chale, waise hi CDN website assets fast deliver karne me madad karta hai.

---

## Async

Async ek keyword hai jo functions ko asynchronous banata hai, iska matlab ye hai ki ye promise return karega aur synchronous code ko block nahi karega.

**Real-life example:**
Jaise tum Swiggy pe order karte ho aur dusre kaam bhi karte ho jab tak food deliver ho, waise hi async code background me chalta rehta hai.

---

## Defer

Defer ek attribute hai jo HTML script tag me diya jata hai. Ye script ko tab tak execute nahi hone deta jab tak pura HTML load na ho jaye.

**Real-life example:**
Jaise pehle ghar ka furniture set ho jaye uske baad accessories laaye jaye, waise hi defer scripts ke execution ko delay karta hai.

---

## Bundler

Bundler ek tool hai jo multiple files (JS, CSS, images) ko ek hi file me combine karke optimize karta hai.

**Real-life example:**
Jaise ek school ki kit me sare items ek hi bag me pack hote hain, waise hi bundler sab kuch combine kar deta hai.

---

## NPM and Why We Need It

NPM (Node Package Manager) ek package manager hai jo Node.js applications ke liye third-party libraries provide karta hai. Hume ye isliye chahiye taaki hum baar-baar same code na likhna pade aur efficient development ho sake.

**Real-life example:**
Jaise ek carpenter ready-made tools use karta hai taaki furniture jaldi ban sake, waise hi NPM se ready-made packages ka use hota hai.

---

## While Install -d

"-d" flag ka use dependencies ko "devDependencies" section me install karne ke liye hota hai jo sirf development ke time chahiye hote hain.

**Example:**

```bash
npm install eslint -D
```

---

## Version Control in package.json

Package.json file version control ke liye semantic versioning (major.minor.patch) ka use karta hai. Isse dependencies ke updates manage hote hain.

**Example:**

```
"react": "^18.2.0"
```

---

## package.json vs package-lock.json

- **package.json:** Dependencies ki list aur project ki information store karta hai.
- **package-lock.json:** Exact version aur dependency tree store karta hai taaki same environment har system me mile.

**Real-life example:**
Package.json ek shopping list hai aur package-lock.json bill jisme exact items ki details hoti hain.

---

## Hot Module Reloading

Hot Module Reloading (HMR) ka matlab hai bina page reload ki code changes ko reflect karna, jo development speed ko badhata hai.

**Real-life example:**
Jaise gaming me ek new level aane ke liye pura game restart nahi hota, waise hi HMR page ko reload kiye bina changes apply karta hai.

---

## File Watcher Algorithm

Ye algorithm system ke file changes ko detect karta hai aur changes hone par code ko automatically recompile karta hai.

**Real-life example:**
Jaise security camera continuous monitoring karta hai aur movement detect karta hai.

---

## Webpack

Webpack ek popular bundler hai jo JavaScript modules ko optimize aur bundle karta hai. Isme loaders aur plugins ka use hota hai.

**Real-life example:**
Jaise ek factory me raw materials ko process karke ek finished product banaya jata hai.

---

## Use of Parcel

Parcel ek zero-config bundler hai jo fast bundling provide karta hai aur automatic code splitting karta hai.

**Real-life example:**
Jaise instant noodles banane ke liye kisi extra preparation ki zaroorat nahi hoti.

---

## Transitive Dependency

Transitive dependency wo dependencies hoti hain jo kisi aur package ke through aati hain, yani indirectly install hoti hain.

**Real-life example:**
Jaise agar tum ek mobile buy karte ho aur charger free me milta hai jo mobile ka dependency hai.

---

## Tree Shaking

Tree shaking ek technique hai jo unused code ko remove karke bundle size ko kam karta hai.

**Real-life example:**
Jaise ek mobile app me unused features disable karke space save kiya jata hai.

---

## Different Types of Bundlers

1. **Webpack** – Popular aur highly customizable.
2. **Parcel** – Zero-config aur fast.
3. **Rollup** – Library ke liye best.
4. **Esbuild** – Fastest bundler.

**Real-life example:**
Jaise alag-alag tiffin services different types of food provide karti hain, waise hi bundlers alag needs ke liye best hote hain.

---

## **Type of Symbol Used in package.json**

In `package.json`, several symbols help manage dependencies and their versions:

- **`^`**: Allows updates to minor and patch versions, but not major versions.
  - Example: `"react": "^17.0.2"` allows versions `>=17.0.2 <18.0.0`.
- **`~`**: Allows updates only to patch versions.

  - Example: `"react": "~17.0.2"` allows versions `>=17.0.2 <17.1.0`.

- **`*`**: Accepts any version.
  - Example: `"react": "*"` allows any version of React.

**Real-life example**: In a React project, you might use `"^17.0.2"` for React to ensure you're using a stable, minor release.

---

## **Polyfill**

A polyfill is code that adds functionality for features not supported by older browsers. It "fills" the gap for missing features like `Promise`, `fetch()`, or `Array.from()`.

**Example**: If your app uses the `fetch()` API to make HTTP requests, but you want to support older browsers, you can use a polyfill like `whatwg-fetch`.

**Real-life example**: If you're building a modern app, and some users are still using Internet Explorer, you might use `core-js` to provide polyfills for missing ES6/ES7 features, ensuring compatibility.

---

## **BrowserList**

`browserslist` is a tool that allows you to specify which browsers you want to support in your project. This configuration is used by Babel and Autoprefixer to determine what transformations or prefixes should be applied to your code.

Example in `package.json`:

```json
"browserslist": "> 1%, last 2 versions, not dead"
```

**Real-life example**: For a business app, you may need to target the latest browsers for a better user experience, but also support older browsers like Chrome 60 and Firefox 60 for legacy users.

---

## **Keys in React with Example**

In React, the `key` attribute is used to uniquely identify elements in a list, allowing React to optimize updates.

**Example**:

```jsx
const items = ["Apple", "Banana", "Orange"];
function List() {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
```

**Real-life example**: In a shopping cart, you could use the product's ID as the key to ensure React efficiently handles changes when products are added or removed.

---

## **JSX vs JS**

- **JSX**: It is a syntax extension that allows you to write HTML-like code inside JavaScript. JSX makes it easier to describe the UI structure in React.

  **Example**:

  ```jsx
  const element = <h1>Hello, world!</h1>;
  ```

- **JS**: Standard JavaScript that manipulates the DOM. JSX is compiled into JS by Babel before it runs in the browser.

**Real-life example**: In an e-commerce site, JSX allows you to write UI components that describe how products, prices, and images are displayed.

---

## **Transitive Dependency**

Transitive dependencies are dependencies of dependencies in a project. If Package A depends on Package B, and Package B depends on Package C, Package C is a transitive dependency.

**Real-life example**: If you're using a React component library (Package A) that internally depends on a date library (Package B), the date library is a transitive dependency for your project, even though you didn't directly install it.

---

## **Functional Components**

Functional components are simpler, stateless components in React that are defined using JavaScript functions. They are primarily used for rendering UI.

**Example**:

```jsx
const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};
```

**Real-life example**: In a mobile app, a `UserProfile` component could be a functional component that displays a user’s name, age, and profile picture.

---

## **React Element vs React Component with Example**

- **React Element**: A plain JavaScript object representing a DOM node. It's the smallest unit of React that React uses to describe what to render.

  **Example**:

  ```jsx
  const element = <h1>Hello, world!</h1>;
  ```

- **React Component**: A function or class that returns React elements. Components can manage state and lifecycle methods.

  **Example**:

  ```jsx
  class MyComponent extends React.Component {
    render() {
      return <h1>Hello from a class component!</h1>;
    }
  }
  ```

**Real-life example**: A `Button` component can return a React element like `<button>Click Me</button>`, which gets rendered as a clickable button in the UI.

---

## **JSX in Terms of Security**

JSX prevents XSS attacks by automatically escaping values in curly braces. This ensures that any JavaScript or HTML code injected into the JSX won't be executed.

**Example**:

```jsx
const userInput = "<script>alert('Hacked!')</script>";
const element = <div>{userInput}</div>;
```

- React escapes the `script` tag, rendering it safely as text rather than executing it.

**Real-life example**: If you're building a blog, React ensures that user comments or any dynamic content cannot inject harmful JavaScript.

---

## **Component Composition and Nested Components**

Component composition refers to combining smaller components to build more complex ones. Components can be nested inside each other.

**Example**:

```jsx
const Header = () => (
  <header>
    <h1>Welcome to My Website</h1>
  </header>
);
const Footer = () => (
  <footer>
    <p>© 2025 My Website</p>
  </footer>
);

const Page = () => (
  <div>
    <Header />
    <main>
      <p>This is the content area.</p>
    </main>
    <Footer />
  </div>
);
```

**Real-life example**: A `Dashboard` page in a web app can be composed of a `Sidebar`, `Header`, and `MainContent` components, each responsible for their own section.

---

## **React Fragments**

React Fragments allow you to group multiple elements without adding extra nodes to the DOM. They help maintain cleaner DOM structures.

**Example**:

```jsx
const List = () => (
  <>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </>
);
```

**Real-life example**: In a form, you may use fragments to group multiple form fields without introducing unnecessary wrapper elements.

---

## **Config-Driven UI**

A config-driven UI refers to designing a UI based on configuration files that specify the layout, elements, and behavior. This makes it easy to change the UI without modifying the core logic.

**Real-life example**: In a content management system (CMS), the admin can modify a configuration file to change how widgets are arranged on the page, without needing to edit the codebase.

---

## **Virtual DOM vs Actual DOM**

- **Virtual DOM**: A lightweight in-memory representation of the actual DOM. React uses the Virtual DOM to improve performance by minimizing direct manipulations of the real DOM.
- **Actual DOM**: The actual representation of the page that the browser renders.

**Real-life example**: In a dynamic to-do list app, React first updates the Virtual DOM when you add a new task, compares it to the old version, and only applies the changes to the Actual DOM, reducing the number of updates to the page.

---

## **Process of Re-rendering**

The re-rendering process in React includes several stages:

1. **Virtual DOM Creation**: React creates a virtual representation of the UI.
2. **Render**: React calls the `render()` function to generate a new virtual DOM.
3. **Diffing**: React compares the new virtual DOM with the previous one to determine changes.
4. **Reconciliation**: React updates the actual DOM only where changes have been made.
5. **Update DOM**: React applies the updates to the real DOM.

**Real-life example**: If you're editing a note in a note-taking app, React will only update the specific part of the page that shows your note's text, rather than reloading the entire page.

---

## **React Fiber**

React Fiber is a complete rewrite of React's core algorithm that allows for asynchronous rendering. It helps to optimize the rendering process by breaking down tasks into smaller units of work.

**Real-life example**: React Fiber ensures that UI updates in an e-commerce site remain smooth, even when there are many changes or animations.

---

## **Advantages of React Fiber**

- **Improved Performance**: By breaking rendering tasks into smaller units, React Fiber reduces the time spent on any single update.
- **Concurrency**: It allows React to pause and resume rendering, improving user experience during complex updates.

**Real-life example**: In a game app, React Fiber helps keep the UI responsive even when complex animations are running in the background.

---

## **Import and Export and Its Types**

In ES6, `import` and `export` are used to modularize JavaScript code.

- **Named Exports**: You can export multiple items from a module.

  ```js
  export const name = "John";
  export function greet() {
    return "Hello";
  }
  ```

- **Default Export**: You can export a single item from a module as the default export.
  ```js
  export default function greet() {
    return "Hello";
  }
  ```

**Real-life example**: In a React project, you can have one file exporting a default `Button` component and another file exporting helper functions like `calculatePrice`.

---

Sure! Let's dive into the details of React Hooks, covering `useState`, `useEffect`, `useMemo`, `useCallback`, and their usage, including nuances like handling previous state and differences among them.

---

## **Hooks in React (useState, useEffect, and More)**

React Hooks are functions that allow you to use state and other React features without writing a class. They provide a more functional approach to managing state, side effects, and optimizations in functional components.

### **useState Hook**

`useState` is a hook that allows you to add state variables to functional components. It returns an array with two elements: the current state value and a function to update it.

**Basic Usage**:

```jsx
const [count, setCount] = useState(0);
```

- `count`: The current value of the state.
- `setCount`: A function that updates the state.

**Real-life Example**: In a counter application, `useState` is used to store the count value, and the `setCount` function updates it when a button is clicked.

### **Handling Previous State in `useState`**

React batches updates and sometimes needs the previous state value to compute the new state. You can pass a function to `setState` to access the previous state.

**Example**:

```jsx
setCount((prevCount) => prevCount + 1);
```

- `prevCount` refers to the value of the state before the update. This is particularly useful when you need to update state based on the current state.

**Real-life Example**: In a to-do list app, when a user adds a new task, you may want to append the new task to the list based on the previous tasks in the state.

---

### **useEffect Hook**

`useEffect` is a hook that allows you to perform side effects in your functional components. Side effects include tasks like fetching data, subscribing to events, or manually changing the DOM.

**Basic Usage**:

```jsx
useEffect(() => {
  console.log("Component Mounted");
}, []); // Empty array ensures this runs only once, after the component mounts
```

- The first argument is the effect function.
- The second argument is a dependency array. If any value in the array changes, the effect will run again.

**Real-life Example**: In a weather app, `useEffect` can be used to fetch the weather data when the component mounts:

```jsx
useEffect(() => {
  fetchWeatherData();
}, []);
```

### **Running Effects on Specific Dependencies**

You can run an effect only when certain dependencies change.

**Example**:

```jsx
useEffect(() => {
  fetchUserData(userId);
}, [userId]);
```

- This will re-fetch user data whenever `userId` changes.

**Real-life Example**: In a messaging app, you may want to refresh the message list only when the conversation changes.

### **Cleaning Up Effects**

Some effects need cleanup, such as removing event listeners or canceling API calls. You can return a cleanup function inside `useEffect`.

**Example**:

```jsx
useEffect(() => {
  const timer = setInterval(() => console.log("Tick"), 1000);

  return () => clearInterval(timer); // Cleanup on unmount
}, []);
```

- The cleanup function runs when the component unmounts or when the dependencies change.

**Real-life Example**: In a chat application, if you subscribe to a WebSocket connection, you can clean it up when the component unmounts.

---

### **useMemo Hook**

`useMemo` is a hook that memoizes the result of an expensive calculation so that it doesn't re-run on every render unless necessary. It's useful for optimizing performance when a computation is expensive.

**Basic Usage**:

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

- The function `computeExpensiveValue(a, b)` will only be re-executed when `a` or `b` change.

**Real-life Example**: In a shopping cart app, if you're calculating the total price based on many items, `useMemo` can prevent recalculating the total unless the items or quantities change.

---

### **useCallback Hook**

`useCallback` is similar to `useMemo`, but instead of memoizing the result of a function, it memoizes the function itself. It ensures the function reference doesn't change unless the dependencies change.

**Basic Usage**:

```jsx
const memoizedCallback = useCallback(() => {
  console.log("Callback function");
}, [dependencies]);
```

**Real-life Example**: If you're passing a function as a prop to a child component, `useCallback` can help prevent unnecessary re-renders by ensuring the function reference remains stable.

---

### **Differences Between `useMemo` and `useCallback`**

While both `useMemo` and `useCallback` optimize performance by memoizing values, their use cases are different:

- **`useMemo`**: Memoizes the result of a computation.
  - Example: Memoizing the computed value of a list.
- **`useCallback`**: Memoizes the function itself.
  - Example: Memoizing a function that updates the state of a parent component.

### **Real-life Example**:

1. **`useMemo`**: If you have a function that filters a list of items based on a search query, `useMemo` will ensure that the list is re-filtered only when the search query or the list of items changes, improving performance.

2. **`useCallback`**: If you're passing an event handler to a child component and the child re-renders frequently, using `useCallback` ensures the function doesn't get recreated on every render, which can help optimize performance.

---

## **Microservices**

Microservices is an architectural style where an application is built as a collection of loosely coupled, independently deployable services. Each service in the system is focused on a specific business function and can be developed, deployed, and scaled independently.

**Example**:
Imagine an online e-commerce platform:

- One microservice might handle user authentication.
- Another might handle product management.
- Another could be responsible for processing orders.

Each service runs independently and communicates via APIs.

**Real-life Example**: An e-commerce platform like Amazon may have separate services for managing products, user reviews, payments, and order processing, all interacting with each other but operating independently.

---

## **Monolithic**

Monolithic architecture refers to a traditional model where the entire application is built as a single, tightly integrated unit. It includes both the frontend and backend, which are combined in a single codebase.

**Example**:
In a monolithic application, a user management system, order processing, and inventory management might all be part of one large application. Any change in the system requires rebuilding and redeploying the entire application.

**Real-life Example**: Traditional web applications, like early versions of Facebook, operated on a monolithic architecture where all the features were in a single codebase.

---

## **CORS (Cross-Origin Resource Sharing)**

CORS is a security feature implemented by browsers to prevent websites from making requests to a different domain than the one that served the web page. It allows servers to control which domains are permitted to access their resources.

**Example**:
If a frontend application hosted on `www.example.com` tries to fetch data from `api.anotherdomain.com`, the server at `api.anotherdomain.com` must explicitly allow this request by including specific CORS headers like:

```http
Access-Control-Allow-Origin: https://www.example.com
```

**Real-life Example**: In a scenario where your React frontend is hosted on one domain and your backend is hosted on another, you would need to configure CORS on your server to allow your frontend to access the server’s resources.

---

## **JS Expression**

A JavaScript expression is any valid unit of code that can produce a value. Expressions can be as simple as a variable or more complex like function calls or mathematical operations.

**Example**:

```js
let x = 5 + 3; // This is an expression that evaluates to 8.
```

Expressions can also be inside JSX in React:

```jsx
const element = <h1>{5 + 3}</h1>; // The expression `5 + 3` is evaluated to 8 and rendered.
```

**Real-life Example**: In a React component, an expression like `{user.name}` inside JSX will render the `name` property of the `user` object.

---

## **JS Statement**

A JavaScript statement is a piece of code that performs an action. It does not return a value directly like an expression but is used to control program flow or execute an operation.

**Example**:

```js
let x = 5; // This is a statement.
```

**Real-life Example**: In an e-commerce app, a statement like `if (cart.isEmpty()) { showEmptyCartMessage(); }` checks whether the shopping cart is empty and displays a message accordingly.

---

## **Optical Channing**

Optical Channing refers to a design pattern or technique where the visual content of an interface is enhanced to guide the user’s attention towards important information. It’s often used in UI design to ensure elements like buttons or key actions stand out.

**Example**:
Using bright colors for call-to-action buttons, or placing key information in larger fonts, can visually guide the user’s focus and improve usability.

**Real-life Example**: In a login form, the “Login” button may be brightly colored (like blue or green) to draw attention, while the rest of the form elements (like input fields) are in a more muted color, ensuring users are drawn to the action they need to take.

---

## **Shimmer UI**

Shimmer UI is a technique used to indicate that content is loading. It is a visual placeholder, often shown as a shimmering animation on a skeleton screen (a blank page or outline of the layout).

**Example**:
When data is being fetched from an API, instead of showing a blank page, a shimmer effect (like a moving gradient or bars) is displayed to indicate that content is on its way.

**Real-life Example**: Many modern apps, like Instagram or Facebook, use shimmer loading effects when new posts or content are being fetched, providing users with a more pleasant experience than simply showing a loading spinner.

---

Let's break down the key concepts related to **React Router DOM**, and I’ll also add some additional useful topics that could help you navigate routing in React applications effectively.

---

## **React Router DOM**

**React Router DOM** is the standard library used for handling routing in React applications. It enables navigation between different views or pages in a single-page application (SPA) without needing to refresh the page.

- It helps in mapping URLs to React components and enables users to navigate between different views of the application seamlessly.

**Real-life Example**: In an online shopping application, React Router allows navigating between the homepage, product details, shopping cart, and checkout pages without a page reload.

---

## **Router Provider**

The `RouterProvider` component is used to set up the router in your React app and wrap your app with routing functionality. This is part of **React Router v6+**.

**Example**:

```jsx
import { RouterProvider } from "react-router-dom";
import routes from "./routes";

function App() {
  return <RouterProvider router={routes} />;
}
```

- It takes the router instance and provides it to the app.

---

## **Creating Browser Router**

`BrowserRouter` is used to enable routing based on the history API, which uses the browser's address bar to manage routing and refreshes.

**Example**:

```jsx
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <YourRoutesHere />
    </Router>
  );
}
```

- `BrowserRouter` wraps the app and enables navigation through URLs without a page reload.

---

## **Error Element**

In React Router v6+, `ErrorElement` is used to display an error component if a route fails to match or an error occurs in that route.

**Example**:

```jsx
const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];
```

- The `"*"` path acts as a wildcard for undefined routes and triggers the `ErrorPage` component when no other route matches.

**Real-life Example**: When a user navigates to a non-existent page (like `/unknown`), React Router shows a custom error page.

---

## **Link**

The `Link` component is used to create navigation links between pages. It prevents full page reloads and allows smooth navigation within the SPA.

**Example**:

```jsx
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
```

- `Link` is similar to an anchor tag (`<a>`), but it prevents page reloads and uses React Router’s internal navigation system.

**Real-life Example**: The "Sign In" button on an e-commerce site might link to the login page without a full page reload.

---

## **Outlet**

`Outlet` is a placeholder in a route component that renders nested routes. It helps in building layouts with nested routes, making routing more flexible.

**Example**:

```jsx
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <h1>Header</h1>
      <Outlet />
      <h2>Footer</h2>
    </div>
  );
}
```

- The `Outlet` renders the matched nested route inside the `Layout`.

**Real-life Example**: In a blog, the main layout might have a header and footer, but the body content can change based on the specific blog post selected.

---

## **useParams**

`useParams` is a hook that gives you access to the route parameters. It is useful for dynamic routing where part of the URL is variable (like an ID or slug).

**Example**:

```jsx
import { useParams } from "react-router-dom";

function Post() {
  const { postId } = useParams();
  return <h1>Post {postId}</h1>;
}
```

- In the above example, the `postId` is extracted from the URL, and the component dynamically displays content based on that value.

**Real-life Example**: A blog post page that dynamically loads the content based on the `postId` parameter.

---

## **useRouterError**

`useRouterError` is a new hook in React Router v6+ that allows you to handle route errors, such as when a route component fails to load or when a route does not exist.

**Example**:

```jsx
import { useRouterError } from "react-router-dom";

function ErrorPage() {
  const error = useRouterError();
  return <div>Error: {error.message}</div>;
}
```

- This hook can be used to display a custom error page when something goes wrong while navigating to a route.

---

## **useHistory** _(Deprecated in React Router v6)_

In previous versions of React Router (v5), `useHistory` was used to programmatically navigate to different routes.

**Example**:

```jsx
import { useHistory } from "react-router-dom";

function NavigateButton() {
  const history = useHistory();

  const goHome = () => {
    history.push("/");
  };

  return <button onClick={goHome}>Go Home</button>;
}
```

- `useHistory` allowed you to trigger navigation programmatically from within a component.

In **React Router v6+**, `useHistory` has been replaced with `useNavigate`.

---

## **useLocation**

`useLocation` is a hook that gives you access to the current location object, which contains information about the current URL, including pathname, search, and hash.

**Example**:

```jsx
import { useLocation } from "react-router-dom";

function CurrentLocation() {
  const location = useLocation();
  return <div>Current path: {location.pathname}</div>;
}
```

- `useLocation` is helpful for rendering the current path or URL in your UI.

**Real-life Example**: Displaying the current URL in a navigation bar or showing a "You are here" breadcrumb.

---

## **Additional Important Topics**

1. **useNavigate** (Replacement for `useHistory` in v6):

   - It provides the ability to navigate programmatically.
   - **Example**: `const navigate = useNavigate(); navigate("/home");`

2. **Routes**:

   - The `Routes` component (replacing `Switch` in v6) is used to define which route to render based on the URL.
   - **Example**:
     ```jsx
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
     </Routes>
     ```

3. **Route Path Matching**:

   - React Router v6 uses exact matching by default, unlike v5, where you had to explicitly specify `exact`.

4. **Nested Routes**:
   - You can define nested routes inside other route components to create layouts with nested views.
   - **Example**:
     ```jsx
     <Routes>
       <Route path="/" element={<Layout />}>
         <Route path="about" element={<About />} />
       </Route>
     </Routes>
     ```

---

## **Class-based Components**

Class-based components are the traditional way to define components in React. They extend from `React.Component` and have access to lifecycle methods, state, and other features.

**Example**:

```jsx
import React, { Component } from "react";

class MyComponent extends Component {
  render() {
    return <div>Hello, {this.props.name}</div>;
  }
}
```

- `class MyComponent` defines the component, and `render()` is the method responsible for returning JSX.

---

## **Render Method**

The `render` method is the only required method in a class-based component. It returns the JSX (or React elements) that represent the UI.

**Example**:

```jsx
render() {
  return <h1>Hello, World!</h1>;
}
```

- This method is called automatically when the component's state or props change, causing the component to re-render.

---

## **Constructor**

The `constructor` method is called when the component is initialized. It's used to set up state, bind event handlers, or do any setup before the component is rendered.

**Example**:

```jsx
constructor(props) {
  super(props);
  this.state = { counter: 0 };
}
```

- The `constructor` must call `super(props)` before using `this`.

---

## **Super**

The `super` keyword is used to call the parent class's constructor. It is necessary to call `super(props)` in a class component’s constructor to inherit the properties of `React.Component`.

**Example**:

```jsx
constructor(props) {
  super(props); // Calls the constructor of React.Component
  this.state = { name: 'John' };
}
```

- Without `super(props)`, `this` will be undefined in the constructor.

---

## **this.state**

`this.state` is an object where you store values that represent the state of your component. It allows the component to track and respond to changes in data.

**Example**:

```jsx
this.state = { counter: 0 };
```

- In this example, `counter` is a state variable, and `this.state` holds the current value.

---

## **setState**

`setState` is a method that updates the component's state. It triggers a re-render of the component and its children.

**Example**:

```jsx
this.setState({ counter: this.state.counter + 1 });
```

- When `setState` is called, React schedules a re-render of the component with the new state.

---

## **Lifecycle Methods in Class Components**

React class components have several lifecycle methods that allow you to run code at different stages of the component’s existence.

### **Mounting Phase** (When the component is created)

- **constructor(props)**: Initializes state and binds methods.
- **static getDerivedStateFromProps(props, state)**: Called before every render. It can return an object to update the state based on props.
- **render()**: Returns the JSX to be rendered.
- **componentDidMount()**: Called once the component is mounted in the DOM. Ideal for making API calls or setting up subscriptions.

### **Updating Phase** (When state or props change)

- **static getDerivedStateFromProps(props, state)**: Called before every render, even after the component mounts.
- **shouldComponentUpdate(nextProps, nextState)**: Determines if the component should re-render based on changes in state or props.
- **render()**: Re-renders the component with updated state and props.
- **getSnapshotBeforeUpdate(prevProps, prevState)**: Called right before changes from the virtual DOM are reflected in the real DOM. You can capture some information (like scroll position) before the update.
- **componentDidUpdate(prevProps, prevState, snapshot)**: Called after the component updates and the changes have been applied to the DOM.

### **Unmounting Phase** (When the component is removed from the DOM)

- **componentWillUnmount()**: Called just before the component is unmounted and destroyed. It’s ideal for cleanup like canceling API calls or removing event listeners.

### **Error Handling Phase** (When an error occurs in a component)

- **static getDerivedStateFromError(error)**: Updates state when an error is caught during rendering.
- **componentDidCatch(error, info)**: Handles errors by logging them or showing fallback UI.

---

## **Life Cycle Comparison with Functional Components**

Functional components, introduced with React Hooks, do not have lifecycle methods like class components. However, hooks like `useEffect` replicate lifecycle behavior.

| **Lifecycle Method**    | **Class Component**      | **Functional Component (with Hooks)**         |
| ----------------------- | ------------------------ | --------------------------------------------- |
| **Component Mounted**   | `componentDidMount()`    | `useEffect(() => {...}, [])`                  |
| **Component Updated**   | `componentDidUpdate()`   | `useEffect(() => {...}, [dependencies])`      |
| **Component Unmounted** | `componentWillUnmount()` | `useEffect(() => { return () => {...} }, [])` |
| **Error Handling**      | `componentDidCatch()`    | `ErrorBoundary` (HOC or component)            |

In functional components, `useEffect` handles all the phases of lifecycle management, but you have more control over how and when effects run with different dependency arrays.

---

## **React Render Phases**

React rendering has two main phases:

1. **Render Phase**: This is when React calculates what the UI should look like. It involves creating a Virtual DOM and figuring out what has changed.
2. **Commit Phase**: This is when React applies the changes to the actual DOM and updates the UI.

### **Which Phase is Faster?**

- The **Render Phase** is faster because React only computes changes in the Virtual DOM and doesn’t make any direct changes to the actual DOM yet.
- The **Commit Phase** is slower because it involves making actual DOM updates, which are more time-consuming.

---

## **Custom Hooks**

**Custom hooks** are JavaScript functions that allow you to extract logic and state management from a component into a reusable function. They help make code more modular and easier to manage, especially when the same logic needs to be used in multiple places across your application.

**Why Custom Hooks are Needed:**

- To extract logic from components so that you don't repeat it in every component.
- They help in maintaining cleaner, more readable, and maintainable code.
- They allow sharing logic across multiple components without needing to rely on higher-order components (HOCs) or render props.

**When Should You Use Custom Hooks:**

- When you have reusable stateful logic that can be shared between multiple components.
- When you need to manage complex logic or side effects (like fetching data, timers, etc.) in a clean way.
- When a piece of state or functionality needs to be shared between components, creating a custom hook will encapsulate the logic neatly.

**Example of a Custom Hook:**

```jsx
import { useState, useEffect } from "react";

function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return { count, increment, decrement };
}

export default useCounter;
```

- The `useCounter` custom hook can now be used across multiple components without repeating the logic.

---

## **Lazy Loading**

**Lazy loading** is a technique in React where components or assets (like images, JavaScript files) are loaded only when they are needed, rather than upfront. This can help in reducing the initial load time of a React application.

**Why is it Useful?**

- It improves the performance of the application by splitting the bundle and loading parts of the app only when needed.
- Helps reduce the amount of JavaScript loaded initially, leading to faster page loads.

**Example of Lazy Loading a Component:**

```jsx
import React, { Suspense, lazy } from "react";

const MyComponent = lazy(() => import("./MyComponent"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MyComponent />
    </Suspense>
  );
}
```

- `lazy` is used to dynamically import the `MyComponent`, and the `Suspense` component is used to show a fallback UI (like a loading spinner) while the component is loading.

---

## **Lazy Suspense**

**Suspense** is a React component that works in combination with **lazy loading**. It allows you to display a loading indicator while React is waiting to load some resources, like a component or data.

**Why is Lazy Suspense Useful?**

- It allows developers to manage loading states in React applications in a declarative way.
- It helps with code-splitting, allowing for loading parts of the application only when necessary.

**How Does It Work?**

- **`lazy`** is used to load a component lazily, and **`Suspense`** is used to manage the fallback UI (like a loading spinner or message) while waiting for the component to load.

**Example of Lazy Suspense:**

```jsx
import React, { Suspense, lazy } from "react";

const UserProfile = lazy(() => import("./UserProfile"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UserProfile />
    </Suspense>
  );
}
```

- Here, `UserProfile` will only be loaded when needed, and until it’s loaded, the fallback `<div>Loading...</div>` will be displayed.

---

## **Props Drilling**

**Props drilling** is a term used when you have to pass data or functions through many layers of components, even if intermediate components don't need the data. This can lead to messy and hard-to-maintain code, especially in large applications.

**Why it’s a Problem:**

- The code becomes harder to maintain as your component tree grows, and it creates unnecessary dependencies between components.
- If you need to change or update the props passed through several layers, it can lead to confusion and errors.

**Real-life Example of Props Drilling:**

- Consider a parent component passing data down to a deeply nested child. The data has to be passed through every intermediate level, which is inefficient.

---

## **Lifting State Up**

**Lifting the state up** refers to the practice of moving state from a child component to a common parent component so that multiple children can share and update the same state. It is helpful when you want to synchronize state between sibling components.

**When to Use Lifting State Up:**

- When multiple components need access to or need to modify the same piece of state.
- When you need to synchronize state across different components that are not directly connected.

**Example:**

```jsx
function ParentComponent() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <ChildComponent1 inputValue={inputValue} />
      <ChildComponent2 onInputChange={handleInputChange} />
    </div>
  );
}

function ChildComponent1({ inputValue }) {
  return <input type="text" value={inputValue} />;
}

function ChildComponent2({ onInputChange }) {
  return <input type="text" onChange={onInputChange} />;
}
```

- The parent component holds the state (`inputValue`), and both child components share this state, updating it when necessary.

---

## **Redux**

**Redux** is a state management library for JavaScript apps, often used with React. It provides a centralized store to manage the state of your application in a predictable way.

### **How Redux Works:**

1. **Store**: Redux holds the entire state of your application in a single object, called the **store**.
2. **Actions**: Actions are plain JavaScript objects that describe what happened in the app. They typically contain a `type` property and may also contain data to update the store.
3. **Reducers**: Reducers are pure functions that specify how the application's state should change in response to an action. They take the current state and the action as arguments and return the new state.
4. **Dispatch**: To modify the state, actions are dispatched to the store using the `dispatch` function.
5. **Subscribe**: Components can subscribe to changes in the store and re-render when the state changes.

---

## **React-Redux**

**React-Redux** is a library that connects Redux with React, providing bindings to make it easier to integrate Redux into React apps. It allows React components to read from the Redux store and dispatch actions to update the store.

### **How React-Redux Works:**

- **`useSelector`**: A hook used to access the Redux store's state inside functional components.
- **`useDispatch`**: A hook that gives access to the Redux store's `dispatch` function, allowing components to dispatch actions.
- **`Provider`**: The `<Provider>` component wraps your application and makes the Redux store available to all React components.

---

## **Redux Toolkit**

**Redux Toolkit** is an official, opinionated set of tools that helps simplify Redux setup and reduces boilerplate code. It is the recommended way to use Redux in modern applications.

### **Why Redux Toolkit?**

- It simplifies the Redux setup process, making it faster and more efficient.
- Provides utilities for writing reducers and actions with less code (using `createSlice` and `createAsyncThunk`).
- Includes built-in functionality for immutable updates, middleware, and dev tools.

### **How Redux Toolkit Helps:**

- **`createSlice`**: A function that automatically generates actions and reducers based on the slice of state.
- **`configureStore`**: A simplified way to configure the Redux store with middlewares and enhancers.

---

## **Setting Up Redux in a React App**

### **Step 1: Install Redux and React-Redux**

```bash
npm install @reduxjs/toolkit react-redux
```

---

### **Step 2: Create the Redux Store**

**Using Redux Toolkit**:

```javascript
// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./slices";

const store = configureStore({
  reducer: rootReducer, // Root reducer containing all slices
});

export default store;
```

---

### **Step 3: Create a Slice**

A **slice** is a collection of Redux reducer logic and actions for a specific feature or part of the application.

**Example**:

```javascript
// src/slices/todoSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
```

Here, `createSlice` automatically generates action creators and reducers for `addTodo` and `removeTodo`.

---

### **Step 4: Combine Reducers (if multiple slices)**

If you have multiple slices, you combine them into one root reducer.

```javascript
// src/slices/index.js
import { combineReducers } from "redux";
import todoReducer from "./todoSlice";

const rootReducer = combineReducers({
  todos: todoReducer,
});

export default rootReducer;
```

---

### **Step 5: Provide the Store to React**

Wrap your React application with the `<Provider>` component from `react-redux` to give all components access to the Redux store.

```javascript
// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

---

### **Step 6: Dispatch Actions and Use the State**

**Using `useDispatch` and `useSelector`**:

- **`useDispatch`**: A hook to get the `dispatch` function and dispatch actions to the Redux store.

- **`useSelector`**: A hook to get the state from the Redux store.

**Example Component**:

```javascript
// src/components/TodoList.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "../slices/todoSlice";

function TodoList() {
  const [newTodo, setNewTodo] = useState("");
  const todos = useSelector((state) => state.todos.todos); // Access the todos from Redux store
  const dispatch = useDispatch(); // Get the dispatch function

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addTodo({ id: Date.now(), text: newTodo }));
      setNewTodo("");
    }
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}{" "}
            <button onClick={() => handleRemoveTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
```

- **`useSelector`** is used to select the part of the state (`todos` in this case).
- **`useDispatch`** is used to dispatch actions (`addTodo` and `removeTodo`).

---

### **Step 7: Subscribing to the Store**

Normally, you don't need to subscribe manually in React-Redux. `useSelector` automatically subscribes your component to the Redux store and causes re-renders when the selected part of the state changes.

However, you can manually subscribe to the store if needed (e.g., for non-React parts of the app).

**Example**:

```javascript
// Manually subscribing in a non-React part of the app
store.subscribe(() => {
  console.log(store.getState()); // Logs the updated state
});
```

---

## **How to Use Redux in React**

1. **Set up the store**: Use `configureStore` from Redux Toolkit to set up the Redux store.
2. **Create slices**: Use `createSlice` to define reducers and actions for specific parts of your app.
3. **Provide the store**: Wrap your root component with the `Provider` to make the store available to all components.
4. **Use actions**: Dispatch actions with `useDispatch` to modify the store.
5. **Access state**: Use `useSelector` to access the store's state in functional components.
6. **React to store changes**: Components automatically re-render when the state they are subscribed to changes.

---

## **Limitations of React**

While React is a powerful tool, it has some limitations:

1. **Heavy Initial Bundle Size**: React apps can become large and slow to load, especially if you include many libraries and dependencies. Optimization tools like code splitting and lazy loading help mitigate this.
2. **SEO Issues**: React is client-side rendered by default, which can cause issues with SEO (Search Engine Optimization). Server-side rendering (SSR) or static site generation (SSG) can solve this problem, but it's an added complexity.
3. **Boilerplate Code**: React projects can become cluttered with boilerplate code, especially when dealing with state management or complex components.
4. **Complex State Management**: As the app grows, state management can become difficult. Tools like Redux, Context API, and others help but introduce additional complexity.
5. **Learning Curve**: New developers might find React challenging to learn, especially when dealing with advanced topics like hooks, context, and state management.

---

## **Axios vs Fetch**

Both **Axios** and **Fetch** are used for making HTTP requests, but they have some key differences.

1. **Error Handling**:

   - **Axios** automatically throws an error for HTTP statuses that fall outside the 2xx range.
   - **Fetch** only throws an error for network-related issues. For HTTP error responses (like 404), it resolves the promise, requiring extra handling.

2. **Request Configuration**:

   - **Axios** allows for simpler configuration, especially for setting headers and request types.
   - **Fetch** requires more manual configuration (e.g., setting headers and parsing JSON).

3. **Response Parsing**:

   - **Axios** automatically parses JSON data.
   - **Fetch** requires you to call `.json()` on the response to parse the body.

4. **Browser Support**:

   - **Axios** works in older browsers, whereas **Fetch** is supported in modern browsers and may require a polyfill for older versions of Internet Explorer.

5. **Request Interceptors**:
   - **Axios** has built-in support for request and response interceptors.
   - **Fetch** does not have interceptors natively, but you can achieve similar functionality by using `async/await` or custom middleware.

---

## **Stateless vs Stateful Components**

1. **Stateless Components** (also called Functional Components):

   - **No internal state**.
   - They rely entirely on props for data and display.
   - These are simpler and easier to test.
   - Example:
     ```jsx
     function Greeting(props) {
       return <h1>Hello, {props.name}</h1>;
     }
     ```

2. **Stateful Components** (also called Class Components or Stateful Functional Components):

   - **Has internal state**.
   - Can manage data that changes over time (using `this.state` or `useState` in functional components).
   - Example:

     ```jsx
     class Counter extends React.Component {
       constructor(props) {
         super(props);
         this.state = { count: 0 };
       }

       render() {
         return (
           <div>
             <button
               onClick={() => this.setState({ count: this.state.count + 1 })}
             >
               Count: {this.state.count}
             </button>
           </div>
         );
       }
     }
     ```

---

## **How Data Flows from Parent to Child and Child to Parent**

- **Parent to Child**:

  - Data flows **from parent to child** through **props**. The parent component passes data to its child components via the child’s props.
  - Example:

    ```jsx
    function Parent() {
      return <Child name="John" />;
    }

    function Child(props) {
      return <h1>Hello, {props.name}</h1>;
    }
    ```

- **Child to Parent**:

  - To send data **from child to parent**, you can use a **callback function** passed as a prop from the parent to the child. The child can call this function with the data it wants to send back to the parent.
  - Example:

    ```jsx
    function Parent() {
      const handleChildData = (data) => {
        console.log(data);
      };
      return <Child onSendData={handleChildData} />;
    }

    function Child(props) {
      return (
        <button onClick={() => props.onSendData("Hello Parent!")}>
          Send Data
        </button>
      );
    }
    ```

---

## **Controlled vs Uncontrolled Components**

- **Controlled Components**: The component’s state is **controlled** by React, typically using `useState` (or `this.setState` in class components). The value of the form element is always controlled by the React state.

  - Example:
    ```jsx
    function ControlledInput() {
      const [value, setValue] = useState("");
      return <input value={value} onChange={(e) => setValue(e.target.value)} />;
    }
    ```

- **Uncontrolled Components**: The component's state is **not controlled by React**. Instead, you use **refs** to access and modify the DOM directly.
  - Example:
    ```jsx
    function UncontrolledInput() {
      const inputRef = useRef();
      const handleSubmit = () => {
        alert(inputRef.current.value);
      };
      return <input ref={inputRef} />;
    }
    ```

---

## **Class vs ClassName**

- **`class`** is used in **HTML** to define the class of an element.
- **`className`** is used in **React** because `class` is a reserved keyword in JavaScript. JSX uses `className` instead of `class` to avoid naming conflicts.

  Example:

  ```jsx
  <div className="container">Content</div>
  ```

---

## **Error Boundaries**

An **Error Boundary** is a React component that catches JavaScript errors anywhere in their child component tree, logs those errors, and displays a fallback UI instead of crashing the entire component tree.

- **How it works**:

  - You can create a class component that defines two lifecycle methods: `static getDerivedStateFromError()` and `componentDidCatch()`.

  Example:

  ```jsx
  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
      return { hasError: true };
    }

    componentDidCatch(error, info) {
      console.log(error, info);
    }

    render() {
      if (this.state.hasError) {
        return <h1>Something went wrong.</h1>;
      }
      return this.props.children;
    }
  }
  ```

---

## **Concurrent Mode**

**Concurrent Mode** is an experimental feature in React that helps improve the performance of rendering complex applications by allowing React to interrupt rendering to work on multiple tasks at once.

- It helps React keep the app responsive by rendering updates in the background, pausing and resuming as necessary.
- It’s especially useful for slow network conditions or complex apps that have long render times.

---

## **Ref Forwarding**

**Ref Forwarding** allows a component to forward a ref to a child component. This is useful when you need to access the DOM element of a child component directly from a parent.

- **How it works**:

  - Use `React.forwardRef` to forward a ref to the child component.

  Example:

  ```jsx
  const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="fancy-button">
      {props.children}
    </button>
  ));

  const App = () => {
    const buttonRef = useRef();
    return <FancyButton ref={buttonRef}>Click me!</FancyButton>;
  };
  ```

---

## **Pure Component**

A **Pure Component** is a class component that automatically implements `shouldComponentUpdate()` with a shallow prop and state comparison.

- This helps avoid unnecessary re-renders when the component’s props and state haven’t changed.

**Example**:

```jsx
class MyComponent extends React.PureComponent {
  render() {
    return <div>{this.props.name}</div>;
  }
}
```

---

## **useRef**

The **`useRef`** hook provides a way to access the **DOM** or persist a mutable value across renders without causing a re-render.

- **Use cases**:
  - Accessing a DOM element.
  - Storing a mutable value that does not trigger a re-render when changed.

**Example**:

```jsx
function Timer() {
  const count = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      count.current += 1;
      console.log(count.current);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div>Timer</div>;
}
```

## **New Features of React 19**

React 19 introduces some exciting features to make building applications even smoother and more efficient. Let’s break down these features in simple language with real-life examples.

---

### **1. Automatic Error Recovery**

React 19 improves error boundaries by **automatically recovering from errors** in certain situations without crashing the entire app.

_Real-Life Example_:  
Imagine you're using a food delivery app, and the restaurant menu fails to load. Instead of crashing the entire app, React 19 will just show an error message for the menu and keep the rest of the app (like the search bar and cart) working.

```jsx
// No need to add manual error boundaries everywhere; React handles some recoveries automatically.
```

---

### **2. Improved Streaming with Server Components**

React 19 enhances server-side rendering by supporting **streaming data directly to the browser**. This means users can see parts of the page as soon as they’re ready, rather than waiting for the entire page to load.

_Real-Life Example_:  
When loading a news website, instead of waiting for all articles to load, you immediately see the header and breaking news while the rest of the page loads in the background.

```jsx
// Example using server components
export default function Page() {
  return (
    <>
      <Header />
      <NewsSection />
      <Footer />
    </>
  );
}
```

---

### **3. React Cache (Improved Data Fetching)**

React 19 introduces built-in **caching for data fetching**, making it easier to manage data that doesn’t change frequently.

_Real-Life Example_:  
If your app displays the weather forecast, React can cache the data for a short time so that when users refresh the app, it doesn’t re-fetch the same weather data unnecessarily.

```jsx
import { use } from "react";

function Weather() {
  const weatherData = use(fetchWeatherData());
  return <div>Current Weather: {weatherData.temp}°C</div>;
}
```

---

### **4. Offscreen Rendering**

React 19 introduces **Offscreen Rendering**, where components can be pre-rendered but kept hidden until needed. This improves app performance and speeds up how quickly content becomes visible.

_Real-Life Example_:  
A social media app pre-renders your profile page while you're browsing the home feed. When you click "Profile," it instantly shows the pre-rendered page instead of loading from scratch.

```jsx
function App() {
  return (
    <div>
      <Home />
      <Profile hidden={true} />
    </div>
  );
}
```

---

### **5. Optimized Transitions for Smooth UI**

React 19 makes **UI transitions smoother** by giving developers more tools to prioritize user interactions over background updates.

_Real-Life Example_:  
In a shopping app, while filtering products by price, React ensures the loading spinner doesn't block the user from scrolling or interacting with the page.

```jsx
import { startTransition } from "react";

function handleFilterChange(newFilter) {
  startTransition(() => {
    setFilter(newFilter); // Background update
  });
}
```

---

### **6. Enhanced Support for Concurrent Rendering**

React 19 brings further improvements to **Concurrent Mode**, allowing React to multitask better. This ensures that your app remains responsive, even with complex UI updates.

_Real-Life Example_:  
In an e-commerce app, users can scroll through products while the app loads their search results in the background without any lag.

---

### **7. Developer Experience Improvements**

React 19 includes better error messages, warnings, and developer tools, making it easier to debug and build applications.

---
