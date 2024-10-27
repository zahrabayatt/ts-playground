"use strict";
const small = 1;
const medium = 2;
const large = 3;
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var Answer;
(function (Answer) {
    Answer["Yes"] = "yes";
    Answer["No"] = "no";
    Answer["Maybe"] = "maybe";
})(Answer || (Answer = {}));
let mySize = Size.Large;
console.log(mySize);
let myGender = 1;
console.log(myGender);
//# sourceMappingURL=index.js.map