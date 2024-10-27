// Union Type |

// example:
function kgToLbs(weight: number | string): number {
  // weight. // we don't see completion for string or number because in this point ts doesn't know which is type of the wight so we can use narrowing technic:

  // Narrowing
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}

kgToLbs(10);
kgToLbs("10");
