// `npm start` or `yarn start` to see in browser.
// `tsc` then `node dist/app.js` to see in terminal.

// Typeguard is a way that we can get type information after making a check
// inside a conditional.
// When we use a typeguard we get type information iside that conditional block.

// Demo of instaceof
// This is sugar syntax essentially for the function below.
class Foo {
  bar() {}
}
// ES5 compiled from class and method above.
// function Foo2() {}
// Foo2.prototype.bar = function () {};

const bar = new Foo();

// We test whether prototype property of constructor exists in another object.
// the value of bar is an instance of Foo. Bar is an instance of Foo.
// Foo.prototype is not creating a new instance we are just checking for one.
console.log(Object.getPrototypeOf(bar) === Foo.prototype);
// compile then run node and we log true;

// We can use the instance of keyword to check as well.
console.log(bar instanceof Foo);
// console true

class Song {
  constructor(public title: string, public duration: number) {}
}

// The playlist property will have an array of songs
class Playlist {
  constructor(public name: string, public songs: Song[]) {}
}

// Wether we pass it a song or playlist we want the name.
// We are definitely returning a string from this function because title and name properties
// are both of type string.
function getItemName(item: Song | Playlist) {
  // We might manually check if item has a title property with a type assertion as a Song
  // if ((item as Song).title) {
  //   // assumed it was a song
  //   // return item. does not work here we need to add typing again.
  //   return (item as Song).title;
  // }
  // Kind of long winded. We use instance of instead...
  if (item instanceof Song) {
    // TS will now infer that it is a Song and the properties there will be available.
    return item.title;
  }
  // Manual check requires `as` here too.
  // // return (item as Playlist).name;
  // But with instanceof TS will now infer we must have a playlist
  // playlist properties will now be available.
  return item.name;
}

// We invoke our function and pass in a new song title and  duration.
const songName = getItemName(new Song('Wonderful Wonderful', 300000));
// Console long the value of the songName.
console.log('Song name:', songName);
// expect Wonderful Wonderful

// We invoke our function and pass in a playlist with a playlist name and array of songs.
const playlistName = getItemName(
  new Playlist('The Best Songs', [new Song('The Man', 300000)])
);
// Console log the name of the playlist.
console.log('Playlist name:', playlistName);
// expect The Best Songs
