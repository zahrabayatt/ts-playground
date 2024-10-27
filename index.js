// Install typescript npm package globally: npm i -g typescript
// check if it is installed: tsc -v
// compile the .ts file : tsc index.ts
console.log("Hello world!");
{
    var age = 20;
    // age = ''; // we got the compiler error
    console.log(age);
}
// typescript compiler using the ES5, and because of that the let variables by default define as var in .js output file.
