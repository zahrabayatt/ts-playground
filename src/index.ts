// the null or undefined value is common source of problem in codes, so typescript by default avoiding us to using it:

function great(name: string) {
  console.log(name.toUpperCase());
}

// great(null); // we got a compilation error, we can assign null to string

// we can overwrite the strict behavior of typescript about null or undefined by enable this setting in tsconfig.json:
// "strictNullChecks": false
// when a strict setting is true in tsconfig.json, the strictNullChecks is enabled as a part of this setting but we can overwrite it like the way I explained in above line.

// If you want to be able to pass the null or undefined values to the great function you can use union types:
function great1(name: string | null | undefined) {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log("Hola!");
  }
}

great1(null);
great1(undefined);
