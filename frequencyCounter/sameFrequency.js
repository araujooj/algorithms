function sameFrequency(number1, number2) {
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of String(number1)) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of String(number2)) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}

console.log(sameFrequency(182, 142)); // false
console.log(sameFrequency(182, 281)); // true
