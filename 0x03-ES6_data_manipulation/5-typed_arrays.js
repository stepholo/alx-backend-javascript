function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new Int8Array(buffer);

  if (position >= 0 && position < length) {
    view[position] = value;
    return buffer;
  }
  throw new Error('Position outside range');
}

module.exports = createInt8TypedArray;
