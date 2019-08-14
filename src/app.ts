// `npm start` or `yarn start` to see in browser.
// `tsc` then `node dist/app.js` to see in terminal.

// `this` keyword changes based on how we invoke the function.

// Creating an object literal.
const myObject = {
  myMethod() {
    console.log('Object literal', this);
  }
};

// Invoke object literal example.
// Because myObject is invoking the myMethod, `this` refers to the myObject.
myObject.myMethod();

// Function demonstrating this context.
// In this case it is the window object in the browser.
function myFunction(...text: string[]) {
  console.log('Function', this);
}

// Invoke function.
// The window is invoking this function.
myFunction('ABC', 'DEF');
//   Window is invoking the function, however the call is changing the value to whatever
//  we supply as the first argument.
myFunction.call(myObject, 'abc', 'def');
// We are supplying an array instead of the argument.
myFunction.call([]);

// .call and .apply invoke the function.
// .call is comma separated. .apply is passed an array.
// These are used to potentially change the this context when you need to pass
// an argument down to the code.

// .bind does not invoke the function. It returns a bound function with a few differences.
// Context has already been changed and can be used later or multiple times.
// Arguments can be applied ahead of time, but only likely to be done if you have
// a single argument that you expect to reuse.
const bindFunction = myFunction.bind(myObject, 'AbC', 'dEf');

// Invoke the function.
bindFunction();

// Arguments can be supplied later as well.
// Changing the arguments with each function call is more practical.
const bindFunction2 = myFunction.bind(myObject);
bindFunction2('aBc', 'DeF');
