// sometimes we want to limit values that we can assign to a variable, this is where we can use Literal Types.
// Literal means exact, specific

// for example quantity could only be 50 or 100
let quantity: 50 | 100 = 50;

// or we can define a type for literals 50, 100
type Quantity = 50 | 100;

let anotherQuantity: Quantity = 100;

// literals could be number or string

// another example:
type Metric = "cm" | "inch";
let size: Metric = "cm";
