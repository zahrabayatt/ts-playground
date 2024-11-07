// we can describe types information for .js file using JSDocs which is a special comment that we can add to our code, we can also describe our code using JSDocs by adding description about function, parma, returns:
/**
 * Calculates income tax.
 * @param {number} income - Net salary after expenses.
 * @returns {number}
 */
export function calculateTax(income) {
  return income * 0.3;
}
