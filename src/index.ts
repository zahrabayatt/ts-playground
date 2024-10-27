// JS built-in types:
// number
// string
// boolean
// null
// undefined
// object

// TS built-in types:
// it extend the js built-in types with:
// any
// unknown
// never
// enum
// tuple

// in ts, if you have a large number you can sprat this using underline
let sales: number = 123_456_789;
let course: string = "TypeScript";
let is_published: boolean = true;

// if you don't specify the type of variable using annotation when defining it, ts detect that base on the value you assigned.
let message = "hello";

// if we dealer a variable and don't assign it, ts assume the type of it as any:
let a;
