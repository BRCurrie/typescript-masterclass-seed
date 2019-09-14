// `npm start` or `yarn start` to see in browser.
// `tsc` then `node dist/app.js` to see in terminal.

// Typeguard is a way that we can get type information after making a check
// inside a conditional.
// When we use a typeguard we get type information iside that conditional block.

// Typeof operator exists in JS.

// demonstration
function foo(bar: string | number) {
  if (typeof bar === 'string') {
    // string value.
    // bar. gives string options.
    return bar.toUpperCase();
  }
  // until something is done in the if statement above, this can still be of type string or number.
  // once something is handle in the case of the string value aboue then bar will now be
  // inferred as a number type.
  bar;
  // inferred as only a number now.
  // we could use another if statement as a safety check instead.
  // if (typeof bar === 'number') {
  // return bar.toFixed(2);
  // }
}

// We need to create a typeguard for duration if it is a string or a number.
// We might be dealing with different number formats.

class Song {
  constructor(public title: string, public duration: string | number) {}
}

function getSongDuration(item: Song) {
  if (typeof item.duration === 'string') {
    return item.duration;
  }
  // Since its not a string it must be a number.
  // return item.duration;

  // instead of returning we will create a few constants.
  // This will calculate from milliseconds to a more legible duration.
  const { duration } = item;
  const minutes = Math.floor(duration / 60000);
  const seconds = (duration / 1000) % 60;
  return `${minutes}:${seconds}`;
}

const songDurationFromString = getSongDuration(
  new Song('Wonderful Wonderful', '05:31')
);
console.log(songDurationFromString);

const songDurationFromMS = getSongDuration(
  new Song('Wonderful Wonderful', 330000)
);
console.log(songDurationFromMS);

// After compiling and running we Expect 05:31 to be returned from the String function.
// Followed by the calculated duration from the number as 5:30.
// We would need to add logic to add a leading 0 as needed.
