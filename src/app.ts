// `npm start` or `yarn start` to see in browser.
// `tsc` then `node dist/app.js` to see in terminal.

interface Person {
  name: string;
  age: number;
  address: {};
}

// For every key:
// It must exist in the object.
// We are only going to supply the result back for properties that exist.
type myPick<T, K extends keyof T> = {
  [P in K]: T[P];
};
// K is a subtype of our union type T.
// T is the first argument supplied, the interface of Person.
// We can now select the properties and obtain only these properties.
// This saves us from having to make the address an optional property.

const person: myPick<Person, 'name' | 'age'> = {
  name: 'Todd',
  age: 27
};
