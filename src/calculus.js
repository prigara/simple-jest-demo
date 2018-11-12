export function sum(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        return a + b;
    }
    else throw "Floats are not supported"
}

export function divide(a, b) {
    if (b === 0) {
        throw Error("Can't divide by zero")
    } else return Number((a / b).toFixed(2));
}