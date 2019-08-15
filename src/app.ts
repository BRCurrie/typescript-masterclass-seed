// `npm start` or `yarn start` to see in browser.
// `tsc` then `node dist/app.js` to see in terminal.

// Typescript infers type here.
const person = {
  name: 'Todd',
  age: 27
};

// If for some reason we cannot access type definitions:
// We want to access the anonymous type.
// We essentially query the type of person. We now have a reference to the inferred
// type above.
// This would be done if the type would be used in multiple places.
type Person = typeof person;

// We can now use the type definition from Person.
const anotherPerson: Person = {
  name: 'John',
  age: 26
};

// Type query inline. For single use type checking.
const inlinePerson: typeof person = {
  name: 'Ben',
  age: 30
};
