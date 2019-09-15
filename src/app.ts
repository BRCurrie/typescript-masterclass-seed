// `npm start` or `yarn start` to see in browser.
// `tsc` then `node dist/app.js` to see in terminal.

// Typeguard is a way that we can get type information after making a check
// inside a conditional.
// When we use a typeguard we get type information iside that conditional block.

// In a scenario where you would want to break something down into a reusable function
// you lose the type inference if it is not declared.

// Does the window object have a property called localStorage.
// window.localStorage checks the value.
const exists = 'localStorage' in window;

// foo has a literal type of bar.
const foo = 'bar';
// const foo: string = 'bar'; has a type of string and the value is bar.

class Song {
  kind: 'song';
  constructor(public title: string, public duration: number) {}
}

class Playlist {
  kind: 'playlist';
  constructor(public name: string, public songs: Song[]) {}
}

function isSong(item: any): item is Song {
  // Check if title exists in item.
  // If it returns true it is a Song and is typed appropriately.
  return 'title' in item;
}

function getItemName(item: Song | Playlist) {
  // if (isSong(item)) {
  // this recieves typing from the string literal from the classes above.
  if (item.kind === 'song') {
    return item.title;
  }
  return item.name;
}

const songName = getItemName(new Song('Wonderful Wonderful', 300000));

console.log('Song name:', songName);

const playlistName = getItemName(
  new Playlist('The Best Songs', [new Song('The Man', 300000)])
);

console.log('Playlist name:', playlistName);
