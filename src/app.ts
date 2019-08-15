// `npm start` or `yarn start` to see in browser.
// `tsc` then `node dist/app.js` to see in terminal.

// Added <a> tag on index.html for this example.
// Added noImplicitThis to tsconfig.json.

// Now we are accessing the .click class on the <a> tag.
const elem = document.querySelector('.click');

// We have type definition for dom objects already.
// To type the this keyword we have to add what looks like an argument.
// It is NOT an argument, and will not change the arguments.
// event is still the first argument.
function handleClick(this: HTMLAnchorElement, event: Event) {
  // Prevent default behavior of the link.
  event.preventDefault();
  // We have added a type to `this` and now we can use autocompletion.
  console.log(this);
  console.log(this.className);
}

// The element invokes the function, so `this` refers to it.
elem.addEventListener('click', handleClick, false);
