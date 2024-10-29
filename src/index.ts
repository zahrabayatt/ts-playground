// The never type represents the values that never occur, quit frequently it is not the type that we used.

// example using never as return type:
// we want to this function to run continuously and process some events, perhaps it watches a queue to process events, so we can annotate the type of this function with nerve and tell compiler this function never return:

function processEvents(): never {
  while (true) {
    // Read a message form a queue
  }
}
function reject(message: string): never {
  throw new Error(message);
}

// if we remove the never return type of reject, compiler specify the return type of this function as void! and then it could not detect unreachable code
reject("...");
processEvents();
console.log("Hello World"); // with annotating processEvents return type with never, this line become gray and it means it is never executed because it comes after calling this function.

// if we enable this setting in tsconfig.json, we got the compilation error for unreachable codes:
// "allowUnreachableCode": false
