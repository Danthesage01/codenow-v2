const randomizeIndex = (count) => {
  return Math.floor(count * Math.random());
};
const randomizeElements = (array, count) => {
  if (count > array.length) {
    throw new Error("Array size cannot be smaller");
  }
  const resultItem = [];
  const guardian = new Set();
  while (resultItem.length < count) {
    const index = randomizeIndex(count);
    const element = array[index];
    if (guardian.has(element)) {
      continue;
    }
    guardian.add(element);
    resultItem.push(element);
  }
  return resultItem;
};

export default randomizeElements;
