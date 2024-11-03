// class KeyValuePair<T> {
//   constructor(public key: T , public value: string) {}
// }

// let pair = new KeyValuePair<number>(1, "a");

// another example:
class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

let pair1 = new KeyValuePair<string, string>("1", "a");
let pair = new KeyValuePair("1", "a");
