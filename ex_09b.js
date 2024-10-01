function splitOperation(operation) {
    var parts = operation.split(' ');
    var num1 = parseInt(parts[0]);
    var operator = parts[1];
    var num2 = parseInt(parts[2]);
    return [num1, operator, num2];
}

function doOperation(operation) {
    var parts = splitOperation(operation);
    var num1 = parts[0];
    var operator = parts[1];
    var num2 = parts[2];
    
    if (operator == '+') {
        return num1 + num2;
    }
    if (operator == '-') {
        return num1 - num2;
    }
    if (operator == '*') {
        return num1 * num2;
    }
    if (operator == '/') {
        if (num2 == 0) {
            console.log("Can't divide by 0");
            return null;
        }
        return num1 / num2;
    }
    return null;
}

console.log(doOperation("5 + 10"));
console.log(doOperation("10 - 4"));
console.log(doOperation("3 * 7"));
console.log(doOperation("20 / 4"));
console.log(doOperation("10 / 0"));
