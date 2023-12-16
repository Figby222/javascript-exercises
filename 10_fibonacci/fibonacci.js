const fibonacci = function(index) {
    index = parseInt(index);
    if (index < 0) {
        return `OOPS`;
    }
    let fibonacci = [1, 1];
    for (let i = 1; i < index; i++) {
        fibonacci.push(fibonacci[i-1] + fibonacci[i]);
    }
    return fibonacci[index-1];
};

// Do not edit below this line
module.exports = fibonacci;
