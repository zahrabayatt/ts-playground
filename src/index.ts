interface Product {
  name: string;
  price: number;
  category: string;
}

class Store<T> {
  // you must initialize properties that you defined in class directly with a value or in the constrictor when you carate a instance of class.
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }
}

// when we have extending the generic class we have three options:

// Extending Option 1
// Pass on the generic type parameter in inheritance from generic parent class to child class
class CompressibleStore<T> extends Store<T> {
  compress() {}
}

let store = new CompressibleStore<Product>();
store.compress();

// Extending Option 2
// Restrict the generic type parameter
// as long as object has a property named name with type string we can use it as T argument, the rest of properties doesn't meters for example product has name: string and also another properties (we constraints the shape of the object that we can use as generic arguments):
class SearchableStore<T extends { name: string }> extends Store<T> {
  find(name: string): T | undefined {
    return this._objects.find((obj) => obj.name === name);
  }
}

let myStore = new SearchableStore<Product>();

// Extending Option 3
// Fix the generic type parameter
class ProductStore extends Store<Product> {
  filterByCategory(category: string): Product[] {
    return this._objects.filter((obj) => obj.category === category);
  }
}
