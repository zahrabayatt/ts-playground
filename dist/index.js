"use strict";
var _a;
function fetch(url) {
    console.log(url);
    return {
        data: null,
        error: null,
    };
}
let result = fetch("url");
console.log((_a = result.data) === null || _a === void 0 ? void 0 : _a.username);
//# sourceMappingURL=index.js.map