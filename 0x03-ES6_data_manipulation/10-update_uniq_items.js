function updateUniqueItems(groceriesMap) {
  if (!(groceriesMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  const updatedMap = new Map([...groceriesMap.entries()].map(([item, quantity]) => {
    if (quantity === 1) {
      return [item, 100];
    }
    return [item, quantity];
  }));

  return updatedMap;
}

module.exports = updateUniqueItems;
