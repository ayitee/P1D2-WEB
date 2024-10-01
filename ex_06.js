fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"];
function getIndexFromName(fruitName) {
    return fruits.indexOf(fruitName) !== -1 ? fruits.indexOf(fruitName) : null;
}

let result = getIndexFromName("Mango");
displayResult(result);
