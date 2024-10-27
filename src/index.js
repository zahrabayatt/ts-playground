var numbers = [1, 2, "3"];
var values = ["a", "B", "c"];
// we have code compilation
values.forEach(function (n) { return console.log(n.toLowerCase()); });
// the type become any
var empty = [];
