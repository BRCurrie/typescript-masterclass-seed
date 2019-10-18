// `npm start` or `yarn start` to see in browser.
// `tsc` then `node dist/app.js` to see in terminal.

// Enum is a datatype. Parses out to JS with a set of numeric values.
// See app.js

enum Sizes {
  Small,
  Medium,
  Large
}
// We cannot have this default to 0, so the array index of 3 must be supplied.
enum Sizes {
  ExtraLarge = 3
}

// Expect numeric value in the array index. 1
console.log(Sizes.Medium);

// We can use reverse mapping like this, and it will return the string value.
console.log(Sizes[Sizes.Large]);

const selectedSize = 2;
// We can use the numeric value to return the string value.
// Expect Large to be logged.
console.log(Sizes[selectedSize]);
