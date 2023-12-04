const sumAll = function(int_start, int_finish) {
    let args = Array.from(arguments);
    let result = 0;
    if (typeof args[0] != "number" || typeof args[1] != "number") {return 'ERROR'}
    if (args[0] < 0 || args[1] < 1) {return 'ERROR'}
    args.sort();
    for(let i = args[0]; i <= args[1]; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
