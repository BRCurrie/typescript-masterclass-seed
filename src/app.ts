// `npm start` or `yarn start` to see in browser.
// `tsc` then `node dist/app.js` to see in terminal.

interface Person {
  name: string;
  age: number;
}

interface ReadonlyPerson {
  name: string;
  age: number;
}

const person: Person = {
  name: 'Todd',
  age: 27
};

// This is allowed because it is only mutating the value.
// person.name = 'ABC';

// function freezePerson(person: Person): ReadonlyPerson {
//     return Object.freeze(person);
//     // This returns a readonly version of a person.
//     // Typescript infers Readonly<Person> when .freeze is highlighted.
// }

// We can now call the function and pass in the person from above.
// ReadonlyPerson type is passed to the const here. If : ReadonlyPerson was not
// the function type expectation in the function above then TS would infer
// that newperson = Readonly<Person>, so we would not need the typing on the
// function or even the ReadonlyPerson interface.
// const newPerson = freezePerson(person);

// We can take mapped types a step further and use generics so the function can be
// used for more than person objects. Now any object can be passed into it and you
// will have a readonly version of that object returned.
function freeze<T>(obj: T): Readonly<T> {
  return Object.freeze(obj);
}

// TS now infers that the person will be a readonly of type person from the
// original interface from the object.
const newPerson = freeze(person);

// We can write our own readonly type.
// Each property can be marked as readonly so it is not mapped over.
// [P] is a placeholder for each of the keys.
// This will map over all properties as read only.
type MyReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};
