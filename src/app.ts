// `npm start` or `yarn start` to see in browser.
// `tsc` then `node dist/app.js` to see in terminal.

interface Person {
  name: string;
  age: number;
}

// We may only need to pass in one property, but we need it to conform to a particular
// object. We have to maintain 2 interfaces.
// interface PartialPerson {
//     name?: string;
//     age?: number;
// }

// function updatePerson(person: Person, prop: PartialPerson) {
// spread existing person and existing prop.
//     return {...person, ...prop}
// }

// Type of my partial accepts generic T, then supply value.
type MyPartial<T> = {
  //  P for property in keyof T, then TS infers value of P.
  // Because we are creating a partial we add the ? to indicate optional values.
  [P in keyof T]?: T[P];
};

// We must supply type of MyPartial with our interface Person.
// From here we only have one interface that would ever need adjusting.
// Of course this is built into TS and we can just use type of Partial
// supplied with our interface.
function updatePerson(person: Person, prop: MyPartial<Person>) {
  // spread existing person and existing prop.
  return { ...person, ...prop };
}

const person: Person = {
  name: 'Todd',
  age: 27
};

// Call update person, pass in person object, followed by key we want to pass in.

updatePerson(person, { name: 'abc' });
