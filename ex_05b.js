function getBasketContent(selectedFruits) {
  const fruits = ['strawberry', 'strawberry', 'strawberry', 'apple', 'apple', 'lime', 'lime', 'peach', 'pear', 'pear'];
  if (selectedFruits > fruits.length) {
    console.log("Too Many fruits selected.");
    return [];
  } else {
    const selected = fruits.slice(0, selectedFruits);
    console.log(`${selected.length} fruit(s) selected`);
    return selected;
  }
}
