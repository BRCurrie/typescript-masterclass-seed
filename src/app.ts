// `npm start` or `yarn start` to see in browser.
// `tsc` then `node dist/app.js` to see in terminal.

// We can use string values instead of numeric enums.
// We lose reverse lookup however.
// By adding const we can make this an inline member. It will reduce the JS file.
// See app.js after compiling and try with and without const.
const enum Sizes {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
  // We could use a number as well.
  // ExtraLarge = 3,
}

// We set the default as Small.
let selected: Sizes = Sizes.Small;

// We can use an enum as a type to a function argument.
function updateSize(size: Sizes): void {
  selected = size;
}

// Update our selected size to Large.
updateSize(Sizes.Large);
console.log(selected);
