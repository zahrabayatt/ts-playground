// sometimes we need base a type of another type, this is called type mapping:

interface Product {
  name: string;
  price: number;
}

// we using type mapping to create a type that is like Product but all properties is readonly:

// we use type alias because you can do type mapping in interfaces:
type ReadOnlyProduct = {
  // to create properties we use:
  // Index signature
  // keyof operator: using it, we got all keys or property of Product
  // in operator: using it, we iterate over keyof Product and in each iteration Product is equal to one of the key(property name) of product
  // Product[Property] is type of property
  readonly [Property in keyof Product]: Product[Property];
};

let product: ReadOnlyProduct = {
  name: "a",
  price: 1,
};
// product.name = 'b' // error - it is readonly property

// or we can create a generic readonly type:
type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

let anotherProduct: Readonly<Product> = {
  name: "a",
  price: 1,
};
// anotherProduct.name = 'b' // error - it is readonly property

// Example
// using type mapping we can create a type and make each property optical:
type Optional<T> = {
  [K in keyof T]?: T[K];
};

// Example
// using type mapping we can create a type and make each property nullable:
type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

// because these types are pretty useful they are actually built-in in typescript:
// typescript utility types docs: https://www.typescriptlang.org/docs/handbook/utility-types.html
