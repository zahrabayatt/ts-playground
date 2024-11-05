interface Product {
  name: string;
  price: number;
}

class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }

  // T is Product
  // keyof T is actual properties of Product which is a union type of product properties => "name" | "price"
  // we don't define property argument as string because when we use obj[Property] compiler thinks that we use index signatures (Check the index signatures and properties commit)
  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((obj) => obj[property] === value);
  }
}

let store = new Store<Product>();
store.add({ name: "a", price: 1 });
store.find("name", "a");
store.find("price", 1);
// store.find("noneExistingValue", 1); // the product doesn't have any property that named noneExistingValue
