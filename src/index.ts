// any type represent of any type in typescript and we should avoid to use it as much as possible, but in situations like converting a JS code to TS code, sometimes you need to use it, for example:

// if we use any for document, it is possible base on document we pass these methods that we called didn't exist in document that we passed and it makes our program crashes
function render(document: any) {
  document.move();
  document.fly();
  document.whateverWeWant();
}

// to avoid to happen this problem, we can use unknown type and for each of this call we gat a error that we don't know the type of the document, then for fixing that we can use narrowing:

function anotherRender(document: unknown) {
  if (typeof document === "string") {
    document.toUpperCase();
  }

  // if document is custom object created by classes, we need to use instanceof for narrowing:
  if (document instanceof WordDocument) {
    document.print();
  }

  // document.move(); // we got a compilation error - 'document is of type 'unknown'
}

class WordDocument {
  print = () => {
    console.log("printing...");
  };
}

let wordDocument = new WordDocument();
anotherRender(wordDocument);

// Using known type is preferred to using any type in TS because the compiler forces us to do some type checking to make sure the methods and properties that we calling in target object.
