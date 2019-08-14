// `npm start` or `yarn start` to see in browser.
// `tsc` then `node dist/app.js` to see in terminal.

class MyClass {
  myMethod() {
    const foo = 123;
    const that = this;
    // This keyword references back to the class.
    console.log('Initial Function', this);
    // Added after first instance call.
    // When we create a new function, we create a new scope.
    // The foo is a new scope but is also part of the scope chain.
    // This is part of the lexical scope.
    setTimeout(function() {
      console.log('foo', foo);
      // Each new function gets its own this keyword.
      // This keyword would reference to the window.
      console.log('First SetTimeout', this);
    }, 0);
    // With this function we setup that = this above. The scope of this refers
    // back to the MyClass object. This is an old way of doing this.
    setTimeout(function() {
      console.log('That', that);
    }, 0);
    // Arrow functions do not bind a this value.
    // const that = this is no longer necessary because the arrow function never changed
    // the scope.
    setTimeout(() => {
      console.log('Arrow', this);
    }, 0);
  }
  // This method creates separate scope from foo in the other method.
  // They do not interfere with each other.
  //   We do not call this function at any point in this demonstration.
  foo() {
    const foo = 456;
  }
}

const myInstance = new MyClass();
myInstance.myMethod();
