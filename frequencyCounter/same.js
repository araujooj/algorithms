// my solution O(n2)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const list = [];

  arr1.forEach((number) => {
    const square = number * number;

    const item = arr2.find((num) => num === square);

    if (item) {
      return list.push(item);
    }
  });

  return arr1.length === list.length;
}

same([1, 2, 3], [4, 1, 9]); // true

// O(n) with frequency counter pattern
function sameRefactored(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2) in frequencyCounter2) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}
