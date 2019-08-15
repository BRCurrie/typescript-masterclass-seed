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

// We use a generic type instead of Person. T is placeholder for object, K is for string.
// We also add the generics inside of <>.
// Generic K must exist on type T or we will get an error, so we extend the type.
// Keyof T will return us a union type of name and age. K is a subtype of name and age.
// Which means our string in the const below will be a subtype of name or age.
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

// We will use the result of getProperty call, pass in the person, and ask for the
// name property. name will be passed in as a string then we are going to lookup the index
// and return that particular value.
const personName = getProperty(person, 'name');
// The const personName is now expecting a string. If age was written in the string
// above then the const would know to expect a number. This is inside of a string
// in the const because the generic K must be a string and must be a subtype of
// our union type.
// All of the results of the function and const above gives us a typesafe index access
// or lookup type.

// Bind to the new type.
const anotherPerson: Person = {
  name: 'John',
  age: 26
};
