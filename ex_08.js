fruits = ["Blackberries", "Mango", "Kiwi", "Peaches", "Strawberry"];

function getFruit(indexname) {
    if (indexname === -1 || indexname === "last") {
        return fruits[fruits.length - 1];
    }
    if (typeof indexname === 'string') {
        let index = fruits.indexOf(indexname);
        return index !== -1 ? index : null;
    } else if (typeof indexname === 'number') {
        return fruits[indexname] || null;
    } else {
        return null;
    }
}

displayResult(getFruit("Mango"));
// To get the fruit by index, use a number without quotes: displayResult(getFruit(2));

// The function getFruit merges functionalities to handle both fruit names and indices.
// It returns the index of the fruit name if a string is provided.
// If an integer is given, it returns the corresponding fruit name.
// The function also handles special cases for index -1 and "last" to return the last fruit.
// This approach avoids code duplication and enhances maintainability.
