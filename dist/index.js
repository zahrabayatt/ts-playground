"use strict";
function great(name) {
    console.log(name.toUpperCase());
}
function great1(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else {
        console.log("Hola!");
    }
}
great1(null);
great1(undefined);
//# sourceMappingURL=index.js.map