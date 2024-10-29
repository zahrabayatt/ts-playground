// sometimes we know about type of object more than typescript, for example in this example the type of return type of getElementById is HTMLElement | null but we know that the type of element with phone id is HTMLInputElement which is a specific type of HTMLElement, in this case we can use type assertion with as keyboard

let phone = document.getElementById("phone");
// phone. //we only can see the method and properties for HTMLElement type not HTMInputElement

// HTMLElement - base type
// HTMInputElement - child type

let anotherPhone = document.getElementById("phone") as HTMLInputElement;
// phone. //we can see the method and properties for HTMInputElement
anotherPhone.value = "028374902";

// another syntax for using type assertion in TS is:
let myPhone = <HTMLInputElement>document.getElementById("phone");

// we have this as keyword in other languages like C# but it works different, in TS as keyword doesn't perform for type conversion.
