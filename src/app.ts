// `npm start` or `yarn start` to see in browser.
// `tsc` then `node dist/app.js` to see in terminal.

// Interfaces vs Classes

// Class is a blueprint where we can create objects that share the same info, properties, and methods.
// Class can contain implementation details.

// Interface is a group of info that describe an object.

// Neither provide implementation or initialization.

// Both options provide type checking, but only class contains implementation details.
// This is pretty much the determining factor for which to use.

interface Artist {
  name: string;
}

// We implement the interface on the class for type checking.
class ArtistCreator {
  constructor(public name: string) {}
}

function artistFactory({ name }: Artist) {
  // We would expect a returned id from say a backend based on the name argument provided.
  // The name is strictly type checked, and that is all.
  return { id: 101, name };
}

function ArtistFactoryClass({ name }: ArtistCreator) {
  // provides implementation details.
  // This creates a new instance and can only be done with classes.
  return new ArtistCreator(name);
}

// When we call the functions we need to supply the name argument.
ArtistFactoryClass({ name: 'Todd' });
