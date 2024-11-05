"use strict";
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
}
class CompressibleStore extends Store {
    compress() { }
}
let store = new CompressibleStore();
store.compress();
class SearchableStore extends Store {
    find(name) {
        return this._objects.find((obj) => obj.name === name);
    }
}
let myStore = new SearchableStore();
class ProductStore extends Store {
    filterByCategory(category) {
        return this._objects.filter((obj) => obj.category === category);
    }
}
//# sourceMappingURL=index.js.map