const bubbleSort = array => {
  const swap = (a, b) => {
    var temp = array[a];
    array[a] = array[b];
    array[b] = temp;
  };
  for (var outer = 0; outer < array.length; outer++) {
    for (var inner = 0; inner < array.length - outer; inner++) {
      if (array[inner] > array[inner + 1]) {
        swap(inner, inner + 1);
      }
    }
  }

  return array;
};

const numbers = [8, 5, 6, 9, 3, 1, 4, 2, 7, 10];
const sortedNumber = bubbleSort(numbers);
console.log(sortedNumber);
