// Enum: represent a list of constants

const small = 1;
const medium = 2;
const large = 3;

// you can use enums for these constants to group them:

// for naming enum and its member use pascal naming convention.
// by default ts compiler assign the members 0, 1, ..
enum Size {
  // if you set the members to number, you don't need to specify for each of them. you can only specify the first one and the rest of them explicity set.
  Small = 1,
  Medium, // ts explicity set the value to 1
  Large, // ts explicity set the value to 2
}

enum Answer {
  // if you set the values to string, you must specify for each of them.
  Yes = "yes",
  No = "no",
  Maybe = "maybe",
}

// this is how we can use enum:
let mySize: Size = Size.Large;
console.log(mySize); // 3

// if you define enum with const, the compiler generate more js optimize code:
const enum Gender {
  Male,
  Female,
}

let myGender = Gender.Female;
console.log(myGender);
