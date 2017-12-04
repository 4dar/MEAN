function magicMultiply(x, y) {
    if (x === 0 && y === 0) {
        console.log("All inputs 0");
    }
    if (x.constructor === Array) {
        for (let i = 0; i < x.length; i++) {
            x[i] = x[i] * y
        }
        console.log(x);
    }
    if (y.constructor === String) {
        console.log("Error: Can not multiply by string");
    }
    if (x.constructor === String) {
        let newString = "";
        for (let i = 0; i<y; i++) {
            newString += x;
        }
        console.log(newString);
    }
    console.log(x * y);
}

const test1 = magicMultiply(5, 2);
const test2 = magicMultiply(0, 0);
const test3 = magicMultiply([1, 2, 3], 2);
const test4 = magicMultiply(7, "three");
const test5 = magicMultiply("Brendo", 4);
