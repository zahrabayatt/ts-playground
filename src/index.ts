// for drugging ts file enable the "sourceMap": true in tsconfig.json and run tsc command to get index.js.map for debugging machine.

// in debug panel click on create a lunch.json file. this file tell to vs code how to debug our code.

//in lunch.json add this config after program:
// "preLaunchTask": "tsc: build - tsconfig.json",
// with this setting, we tell vs code to use ts compiler to build application using the lunch.setting file

let age: number = 24;
if (age < 59) {
  age += 10;
}

console.log(age);
