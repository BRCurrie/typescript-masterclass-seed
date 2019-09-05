// `npm start` or `yarn start` to see in browser.
// `tsc` then `node dist/app.js` to see in terminal.

// Age has been made optional.
interface Person {
  name: string;
  age?: number;
}

// TS has a built in type of `Required` that matches the type definition below.

// We can make a mapped type to make sure everything is required.
type MyRequired<T> = {
  // This shows a partial type.
  // [P in keyof T]?: T[P]
  // Syntax is different but the result is the same. We add a partial type
  // [P in keyof T]+?: T[P]
  // We can remove the partial type with the definition below.
  [P in keyof T]-?: T[P];

  // This also works with other features such as +readonly.
};

// We are trying to make everything in this function required.
// function printAge(person: Person) {
//   return `${person.name} is ${person.age}`;
// }

// We can now pass the generic type of person into our MyRequired Type.
// This will now show an error in the const below.
function printAge(person: MyRequired<Person>) {
  return `${person.name} is ${person.age}`;
}

// This is valid because our age is optional.
// If we did not have an optional age this const would show an error.
const person: Person = {
  name: 'Todd'
  // We remove the optional property.
  // Witout age the above function shows no errors.
  // age: 27
};

// We can now type check any person entered if we require a specific object.
const person2: MyRequired<Person> = {
  name: 'Ben',
  age: 30
};

// This does not show any errors with the first function.
// This does appropriately show an error with our MyRequired type function.
const age = printAge(person);
