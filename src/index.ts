// ts annotate the return type of function for us but for best practice we should annotate it like parameters

// function calculateTax(income: number) {
//   return 0;
// }

// function calculateTax1(income: number): void {}

// if we enable "noUnusedParameters": true, setting in tsconfig.json, then we got the warning for unused parameters in functions.

//  function calculateTax2(income: number) {
//  if (income < 50_000) {
//     return income * 1.2;
//   }

// js by default return undefined for function, so the return type for this function is number | undefined but it might cause problems so we can enable this setting "noImplicitReturns": true, in tsconfig.json for getting warning when we don't specify return value explicitly or using annotate in function for all paths.
// }

function calculateTax3(income: number) {
  if (income < 50_000) {
    return income * 1.2;
  }

  return income * 1.3;
}

// we have another setting to detected unused local variables in tsconfig.ts:
// "noUnusedLocals": true
function calculateTax4(income: number): number {
  // let x;

  if (income < 50_000) {
    return income * 1.2;
  }

  return income * 1.3;
}

// we can make a parameter optional:
// or you can set a default value for parameter and make it optional:
function example(optParam?: number): void {
  if ((optParam || 9) < 10) {
    // if optParm is undefined set the default value 9
    console.log("hello");
  }
}

example();

// function calculateTax5(income: number, taxYear: number = 2024): number {
// no need to annotate the optional parameter, it set explicity with value:
function calculateTax5(income: number, taxYear = 2024): number {
  if (taxYear < 2022) {
    return income * 1.2;
  }

  return income * 1.3;
}

calculateTax5(10_000);
calculateTax5(10_000, 2022);
