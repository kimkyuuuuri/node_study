let num = -1;

try {
    if (num < 0) {
        throw new Error("num < 0");
    }
} catch (error) {
    num = 10;
}

console.log('num: ' + num);

