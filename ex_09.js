function splitOperation(operation) {
    const parts = operation.split(' ');
    return [parseInt(parts[0]), parts[1], parseInt(parts[2])];
}
