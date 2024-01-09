function cleanSet(set, startString) {
  const filteredValues = [...set].filter((value) => value.startsWith(startString));
  const cleanedString = filteredValues.join('-').replace(new RegExp(`^${startString}`), '');
  return cleanedString;
}

module.exports = cleanSet;
