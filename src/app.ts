// `npm start` or `yarn start` to see in browser.
// `tsc` then `node dist/app.js` to see in terminal.

// Typeguard is a way that we can get type information after making a check
// inside a conditional.
// When we use a typeguard we get type information iside that conditional block.

// In a scenario where you would want to break something down into a reusable function
// you lose the type inference if it is not declared.

class Song {
  constructor(public title: string, public duration: number) {}
}

class Playlist {
  constructor(public name: string, public songs: Song[]) {}
}

// Does not work at compile time. currently returns boolean of existance of instance.
// item is Song is added here. When it evaluates to true we are returning Type information for Song.
function isSong(item: any): item is Song {
  return item instanceof Song;
  // Can only use the is syntax when testing something like a boolean.
  // return {}; would not work.
}

function getItemName(item: Song | Playlist) {
  // instanceof typeguard example
  // if (item instanceof Song) {
  //   return item.title;
  // }
  // return item.name;

  if (isSong(item)) {
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
