function charCount(str) {
  var obj = {};
  str.toLowerCase();

  for (char of str) {
    if (/[a-z0-9]/.test(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }

  return obj;
}

console.log(charCount("Hello world!!"));
