function areThereDuplicates(...arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let duplicated = arr[left] === arr[right];

    if (duplicated) {
      return true;
    } else {
      right--;
      left++;
    }
  }

  return false;
}
// return true if has duplicates
console.log(areThereDuplicates(1, 2, 3, 1)); // true
console.log(areThereDuplicates(1, 2, 3, 4)); // false
console.log(areThereDuplicates("1", "2", "3", "1")); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
