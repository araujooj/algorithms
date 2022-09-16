//indexOf with O(1)
function search(array, val) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];

    if (currentElement < val) {
      min = middle + 1;
    } else if (currentElement > val) {
      max = middle + 1;
    } else {
      return middle;
    }
  }

  return -1;
}

console.log(search([1, 2, 3, 4, 7, 8, 9, 20, 22, 24, 30, 43, 45], 8));
