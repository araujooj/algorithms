function maxSubarraysum(arr, num) {
  if (num > arr.length) {
    return null;
  }

  let max = -Infinity;

  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;

    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }

    if (temp > max) {
      max = temp;
    }

    console.log(temp, max);
  }
  return max;
}

console.log(maxSubarraysum([1, 2, 3, 4, 21, 22, 43, 4], 4));
