// sometimes we need to constraint or limit the generic type arguments: limit the type of argument that we can pass as generic argument like T
function echo<T extends number | string>(value: T): T {
  return value;
}

echo("1");
echo(1);

// or we can limit the generic arguments base on the shape of the object
function echo1<T extends { name: string }>(value: T): T {
  return value;
}

echo1({ name: "a" });

// or we can constraint by interface
interface Person {
  name: string;
}

function echo2<T extends Person>(value: T): T {
  return value;
}

echo2({ name: "a" });

// or we can constraint by class

class User {
  constructor(public name: string) {}
}

class Customer extends User {}

function echo3<T extends User>(value: T): T {
  return value;
}

echo3({ name: "a" });
