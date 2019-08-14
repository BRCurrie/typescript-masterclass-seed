// `npm start` or `yarn start` to see in browser.
// `tsc` then `node dist/app.js` to see in terminal.

// `this` keyword changes based on how we invoke the function.

// Function demonstrating this context.
// In this case it is the window object in the browser.
function myFunction() {
  console.log('Function', this);
}

// Invoke function.
// The window is invoking this function.
myFunction();

// Creating an object literal.
const myObject = {
  myMethod() {
    console.log('Object literal', this);
  }
};

// Invoke object literal example.
// Because myObject is invoking the myMethod, `this` refers to the myObject.
myObject.myMethod();

// Classes
class myClass {
    myMethod() {
        console.log('Class' this);
    }
}

// Create Instance of the class.
const myInstance = new myClass();
// Invoke class example.
// Because myInstance is invoking myClass, `this` refers to the class.
myInstance.myMethod();