const insertionSort = array => {
  for (var outer = 1; outer < array.length; outer++) {
    // take the comparableElement in the array
    for (var inner = 0; inner < outer; inner++) {
      // comparableElement will be compared with complete array and compare till comparableElement index
      if (array[outer] < array[inner]) {
        // comparableElement check with element if it is smaller than any element
        console.log(array);
        var [elem] = array.splice(outer, 1); // comparableElement will be deleted from the location and merge the array again.
        array.splice(inner, 0, elem); // comparableElement will insert before the just bigger element;
      }
    }
  }
  return array; // return sorted array
};

const numbers = [8, 5, 6, 9, 3, 1, 4, 2, 7, 10];
const sortedNumber = insertionSort(numbers);
console.log(sortedNumber);
