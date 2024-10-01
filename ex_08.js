fruits = ["Blackberries", "Mango", "Kiwi", "Peaches", "Strawberry"];
function getFruit(parameter) {
    if (typeof parameter === "string") {
        return fruits.indexOf(parameter);
    } else if (typeof parameter === "number") {
        return fruits[parameter] !== undefined ? fruits[parameter] : null;
    }
    return null;
}
