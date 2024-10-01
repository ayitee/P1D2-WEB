fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"];

function getIndexFromName(name) {
    let index = fruits.indexOf(name);
    if (index === -1) {
        return null;
    }
    return index;
}

displayResult(getIndexFromName("Kiwi"));

// The array 'fruits' contains a list of fruit names.
// The function getIndexFromName takes a fruit name as a parameter and searches for its index in the fruits array.
// It uses indexOf() to find the index, returning null if the fruit is not found.
// If the fruit exists, the corresponding index is returned.
// The displayResult function is called to show the result of searching for "Kiwi".
