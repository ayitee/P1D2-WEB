function getBasketContent() {
    let fruits = [];
    for (let nbfruits = 0; nbfruits < 3; nbfruits++) {
        fruits.push('strawberry');
    }
    for (let nbfruits = 0; nbfruits < 2; nbfruits++) {
        fruits.push('apple');
    }
    for (let nbfruits = 0; nbfruits < 2; nbfruits++) {
        fruits.push('lime');
    }
    fruits.push('peach');
    for (let nbfruits = 0; nbfruits < 2; nbfruits++) {
        fruits.push('pear');
    }
    console.log(fruits.length + ' fruit(s) selected');
    return fruits;
}

if (typeof getBasketContent === "function") {
	const fruits = getBasketContent();
	showMyBasket(fruits);
}

// A function getBasketContent initializes an empty array 'fruits'.
// It populates the array with specific fruits using loops for repetition.
// The total count of fruits is logged, and the array is returned.
// The final block checks the function's type and calls it, displaying the fruits.
