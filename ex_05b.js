function getBasketContent(nbFruits) {
    let strawberry = 'strawberry';
    let apple = 'apple';
    let lime = 'lime';
    let peach = 'peach';
    let pear = 'pear';
    let fruits = [strawberry, strawberry, strawberry, apple, apple, lime, lime, peach, pear, pear];
    if (nbFruits > fruits.length) {
        console.log("Too many fruit(s) selected.");
        return [];
    } else {
        console.log(nbFruits + ' fruit(s) selected');
        return fruits.slice(0, nbFruits);
    }
}

if (typeof getBasketContent === "function") {
    const fruits = getBasketContent(10);
    showMyBasket(fruits);
}

// The function getBasketContent accepts a parameter nbFruits to specify how many fruits to retrieve.
// It initializes variables for each fruit type and creates an array with the available fruits.
// The function checks if the requested number exceeds the available fruits, logging a warning if so and returning an empty array.
// If the request is valid, it logs the number of selected fruits and returns a sliced portion of the fruits array. 
// The final block ensures the function is valid and calls it with a specified number, displaying the results.
