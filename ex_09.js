function splitOperation(operation) {
    let parts = operation.split(' ');
    let firstNumber = parseInt(parts[0]);
    let operator = parts[1];
    let secondNumber = parseInt(parts[2]);
    return [firstNumber, operator, secondNumber];
}

// The function splitOperation takes a string in the format "N O N" and splits it into an array.
// It extracts the first number, operator, and second number, converting the numbers to integers.
// The output is an array containing the first number, the operator as a string, and the second number.
