// `npm start` or `yarn start` to see in browser.
// `tsc` then `node dist/app.js` to see in terminal.

// Create dictionary type as object which holds key and string, and have any value.
// Has the base of an empty object.
// let dictionary: { [key: string]: any} = {};

let dictionary: Record<string, TrackStates> = {};

// if TrackStates interface was not available to us we could use typeof.
let dictionaryItem: Record<string, typeof item> = {};

// Interface for a music application. Holds the current and next tracks.
interface TrackStates {
  current: string;
  next: string;
}

// const item: TrackStates = {
// current: 'js02js9',
// next: '8nlksjsk'
// };

// keyof returns us a union type based off of the interface. We then grab their properties and their
// value will be a string.
// If we want to access multiple properties we need to access it this way and set those properties.
const item: Record<keyof TrackStates, string> = {
  current: 'js02js9',
  next: '8nlksjsk'
};

// JS indexing: numbers are coerced to String. '0'
// This would be if we just want to access one single object.
dictionary[0] = item;
