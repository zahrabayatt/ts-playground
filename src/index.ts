import * as _ from "lodash"; // we got the error because it is a pure js package - Could not find a declaration file for module 'lodash'. 'c:/Users/LENOVO/source/repos/ts-playground/node_modules/lodash/lodash.js' implicitly has an 'any' type.
//   Try `npm i --save-dev @types/lodash` if it exists or add a new declaration (.d.ts) file containing `declare module 'lodash';`

// to solve this as in the error message says we using a popular github repository:
// https://github.com/DefinitelyTyped/DefinitelyTyped
// and we need to install types for lodash as dev dependencies:
// npm i -D @types/lodash (npm i -D (or --save-dev) @types/target-package-name)

_.clone([1, 2, 3]);

// but newer repository comes with its types(declaration files) and we don't need to separately install its types from DefinitelyTyped like chalk
