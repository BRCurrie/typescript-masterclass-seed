// `npm start` or `yarn start` to see in browser.
// `tsc` then `node dist/app.js` to see in terminal.

// Function Overloads
// Utility functions. Pure functions that typically return a different data structure or
// data set.

// The function overload does not compile into JS differently. It is only there for
// typechecking purposes.

// This is a type declaration.
// This code would not get compiled down to JS.
function reverse(str: string): string;
// We use a generic type to pass the type checking along to the function calls below.
function reverse<T>(arr: T[]): T[];

// We declare to TS that we will feed the function different parameters that will give it
// a different result.
// This is the complete implementation function.
function reverse<T>(stringOrArray: string | any[]): string | any[] {
  if (typeof stringOrArray === 'string') {
    return stringOrArray
      .split('')
      .reverse()
      .join('');
  }
  // We slice the array to create a copy then reverse the new array.
  return stringOrArray.slice().reverse();
}

reverse('Pepperoni');
reverse(['bacon', 'pepperoni', 'chili', 'mushrooms']);
