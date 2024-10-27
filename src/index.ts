let user: [number, string] = [1, "Mosh"];

// tuple only useful when we have only two values!

let a: [number, string, boolean, number] = [1, "Mosh", true, 9];

// because when tuple compile to js file it compile as array we have also function of array for tuple but don't use this one because it might make problems in your code:
a.push("a");
