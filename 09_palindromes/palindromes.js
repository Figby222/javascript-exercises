const palindromes = function (string) {
    string = string.toLowerCase();
    string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g,"");
    let stringBackwards = ``;
    for (let i = string.length-1; i >= 0; i--) {
        stringBackwards += string[i];
    }
    if (stringBackwards == string) {
        return true;
    }

    return false;
};

// Do not edit below this line
module.exports = palindromes;
