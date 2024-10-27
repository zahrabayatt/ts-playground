// Install typescript npm package globally: npm i -g typescript
// check if it is installed: tsc -v
// compile the .ts file : tsc index.ts

console.log("Hello world!");

{
  // Regarding the error itself, let is used to declare local variables that exist in block scopes instead of function scopes. It's also more strict than var.
  let age: number = 20;
  // age = ''; // we got the compiler error
  console.log(age);
}

// typescript compiler using the ES5, and because of that the let variables by default define as var in .js output file.
