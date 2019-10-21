// d stands for declaration. index.d.ts

import * as lodash from 'lodash';

declare module 'lodash' {
  //    We are going to update an interface and provide type definitions for our function.
  interface LoDashStatic {
    log(item: string): void;
  }
}
