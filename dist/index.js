"use strict";
function calculateTax3(income) {
    if (income < 50000) {
        return income * 1.2;
    }
    return income * 1.3;
}
function calculateTax4(income) {
    if (income < 50000) {
        return income * 1.2;
    }
    return income * 1.3;
}
function example(optParam) {
    if ((optParam || 9) < 10) {
        console.log("hello");
    }
}
example();
function calculateTax5(income, taxYear = 2024) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
calculateTax5(10000);
calculateTax5(10000, 2022);
//# sourceMappingURL=index.js.map