// `npm start` or `yarn start` to see in browser.
// `tsc` then `node dist/app.js` to see in terminal.

// We would use this in a case where we are building a library or an application.

// We have an anonymous person.
// We want to take name and age and bind it to a union type.
const person = {
  name: 'Todd',
  age: 27
};

// Create a new type.
type Person = typeof person;
// We make a typesafe lookup by using the keyof query.
// name | age ; string literals.
type PersonKeys = keyof Person;

// Give it a value of Person and pass in PersonKeys.
// This is the creation of the union type.
type PersonTypes = Person[PersonKeys];

// Bind to the new type.
const anotherPerson: Person = {
  name: 'John',
  age: 26
};
