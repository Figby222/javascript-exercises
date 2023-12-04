const removeFromArray = function(array, ...itemsToRemove) {
    for (let i = 0; i < itemsToRemove.length; i++)
        for(let i2 = 0; i2 < array.length; i2++) {
            if (array[i2] === itemsToRemove[i]) {
                array.splice(i2, 1)
            }
        }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
