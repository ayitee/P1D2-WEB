fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"];

function getFruitNameFromIndex(index) {
    if (index === -1) {
        return fruits[fruits.length - 1];
    }
    if (isNaN(index) || index < 0 || index >= fruits.length) {
        return null;
    }
    return fruits[index];
}

let result = getFruitNameFromIndex("last");
displayResult(result);

// The function getFruitNameFromIndex takes an index as a parameter and returns the corresponding fruit from the fruits array.
// If the index is -1, it returns the last fruit in the array.
// If the index is invalid (not a number, less than 0, or out of bounds), it returns null.
// The result of calling getFruitNameFromIndex with "last" is displayed using displayResult().
