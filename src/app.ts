// `npm start` or `yarn start` to see in browser.
// `tsc` then `node dist/app.js` to see in terminal.

// Removed src/@types folder. Added declaration to tsconfig.json.
// Added declarationDir to tsconfig.json.
// The declarationDir was setup to create a new @types folder and will keep our dist folder
// as strictly JS.

export class Foo {
  constructor(public name: string) {}
  bar(age: number) {}
}
