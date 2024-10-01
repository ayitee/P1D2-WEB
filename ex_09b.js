function splitOperation(operation) {
    let parts = operation.split(' ');
    let firstNumber = parseInt(parts[0]);
    let operator = parts[1];
    let secondNumber = parseInt(parts[2]);
    return [firstNumber, operator, secondNumber];
}

function doOperation(operation) {
    let [firstNumber, operator, secondNumber] = splitOperation(operation);
    let result;

    switch (operator) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            if (secondNumber === 0) {
                console.log("Can't divide by 0");
                return null;
            } else {
                result = firstNumber / secondNumber;
            }
            break;
        default:
            console.log("Opérateur non reconnu");
            return null;
    }
    return result;
}

// The function splitOperation takes a string representing a mathematical operation and splits it into its components: two numbers and an operator.
// The doOperation function uses splitOperation to extract the numbers and operator, then performs the appropriate arithmetic operation based on the operator.
// It handles addition, subtraction, multiplication, and division, with a check for division by zero to avoid errors.
// If an unknown operator is provided, it logs an error message and returns null. The final result of the operation is returned if successful.
