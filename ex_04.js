let a = 2;
let b = 4;
let action = "sub";

function addition() {
    return a + b;
}

function subtraction() {
    return a - b;
}

function calculator() {
    if (action === "add") {
        return addition();
    } else if (action === "sub") {
        return subtraction();
    } else {
        return null;
    }
}

// a and b are initialized with 2 and 4 respectively, and action is set to "sub".
// addition() returns the sum of a and b, while subtraction() returns the difference.
// calculator() checks the action and calls either addition() or subtraction(), returning null otherwise.
// The final block verifies the types and calls displayResult() if the conditions are met.
