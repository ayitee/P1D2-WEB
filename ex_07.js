function getFruitByIndex(index) {
  if (index === -1) {
    return fruits[fruits.length - 1];
  } else if (index < -1 || index >= fruits.length) {
    return null;
  }
  return fruits[index];
}

displayResult(getFruitByIndex(-1));
displayResult(getFruitByIndex(3));
displayResult(getFruitByIndex(10));
