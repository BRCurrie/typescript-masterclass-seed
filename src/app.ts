// `npm start` or `yarn start` to see in browser.
// `tsc` then `node dist/app.js` to see in terminal.

// We added typeRoots to tsconfig.json to use both node_modules and our src @types folders.

import * as _ from 'lodash';
// Use "lodash"

_.chunk([1, 2, 3, 4], 2); // [[1,2], [3,4]]

// We can supply a property and it will become an available method on the underlying object.
_.mixin({
  log(item: string) {
    console.log(':::', item);
  }
});

_.log('Hello!');
