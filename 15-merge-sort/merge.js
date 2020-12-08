// Merge-Sort

function merge(sortedArr1, sortedArr2) {
  let merged = [];
  let i = 0;
  let j = 0;

  // compare add
  while (i < sortedArr1.length && j < sortedArr2.length) {
    if (sortedArr1[i] < sortedArr2[j]) {
      merged.push(sortedArr1[i]);
      i++;
    } else {
      merged.push(sortedArr2[j]);
      j++;
    }
  }

  // get rest value in arr
  while (i < sortedArr1.length) {
    merged.push(sortedArr1[i]);
    i++;
  }

  // get rest value in arr
  while (j < sortedArr2.length) {
    merged.push(sortedArr2[j]);
    j++;
  }

  return merged;
}

// const test = merge([], [2, 14, 99, 100]);

module.exports = merge;
