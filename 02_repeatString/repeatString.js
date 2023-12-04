const repeatString = function(string, integer) {
    if (integer < 0) {
        return 'ERROR';
    }
    let result = '';
    for(let i = 0; i < integer; i++) {
        result += string;
    }
    return result;

};

// Do not edit below this line
module.exports = repeatString;
