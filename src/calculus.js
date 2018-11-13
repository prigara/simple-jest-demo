/**
 * Adds two integers
 * @param a {number} - First number
 * @param b {number} - Second number
 * @returns {number} - Sum of two number
 */
export function add(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        return a + b;
    }
    else throw "Floats are not supported"
}

/**
 * Divides one number by another
 * @param a {number} - First number
 * @param b {number} - Second number
 * @returns {*} - Result of division, rounded up to 2 decimal places
 */
export function divide(a, b) {
    if (b === 0) {
        throw Error("Can't divide by zero")
    } else return Number((a / b).toFixed(2));
}