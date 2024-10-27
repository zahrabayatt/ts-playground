// if we dealer a variable and don't assign it, ts assume the type of it as any:
let level;

// now we can assign any type to it but it is against of ts purpose and we lose the ts features and type safety and type checking, so we should use any as much as possible.
level = "";
level = 12;

function render(document: any) {
  console.log(document);
}

// disable the error enable the "noImplicitAny": false in tsconfig.json file
// function render1(document) {
//   console.log(document);
// }
