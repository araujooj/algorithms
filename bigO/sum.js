// N = 5, 5 operations. N = Operations.
// 5n + 2
// O(n) linear notation
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
}

// 3 operations with 1 billion values
// O(1)
function addUpToZomg(n) {
  return (n * (n + 1)) / 2;
}

// performance check
const t1 = performance.now();
addUpToZomg(1000000000);
const t2 = performance.now();

console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds.`);
