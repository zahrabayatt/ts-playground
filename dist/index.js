"use strict";
function render(document) {
    document.move();
    document.fly();
    document.whateverWeWant();
}
function anotherRender(document) {
    if (typeof document === "string") {
        document.toUpperCase();
    }
    if (document instanceof WordDocument) {
        document.print();
    }
}
class WordDocument {
    constructor() {
        this.print = () => {
            console.log("printing...");
        };
    }
}
let wordDocument = new WordDocument();
anotherRender(wordDocument);
//# sourceMappingURL=index.js.map