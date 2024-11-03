function wrapINArray<T>(value: T) {
  return [value];
}

let numbers = wrapINArray(1);

// this method could be a method in class:

class ArrayUtils {
  static wrapInArray<T>(value: T) {
    return [value];
  }
}

let array = ArrayUtils.wrapInArray(1);
