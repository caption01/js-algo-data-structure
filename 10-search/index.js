function linearSearch(arrayNums, target) {
  for (let i = 0; i < arrayNums.length; i++) {
    if (arrayNums[i] === target) return i;
  }

  return -1;
}

// test
// const re = linearSearch([1, 2, 3, 4], 2);
// console.log(re);

// Binary search pseducode

// 1.accep sorted array
// 2.create left/right pointer
// 3.loop
// create middle point
// moving pointer
// do again
// 4.return -1 if not found

function binarySearch(sortedArr, target) {
  let start = 0;
  let end = sortedArr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (sortedArr[middle] !== target && start <= end) {
    if (sortedArr[middle] < target) {
      start = middle + 1;
    }

    if (sortedArr[middle] > target) {
      end = middle - 1;
    }

    middle = Math.floor((start + end) / 2);
  }

  if (sortedArr[middle] === target) {
    return middle;
  }

  return -1;
}

function binarySearch(sortedArr, target) {
  let start = 0;
  let end = sortedArr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (sortedArr[middle] !== target && start <= end) {
    if (sortedArr[middle] < target) start = middle + 1;
    else end = middle - 1;
    middle = Math.floor((start + end) / 2);
  }

  return sortedArr[middle] === target ? middle : -1;
}

const re = binarySearch([1, 2, 3, 4, 5], 5);

// Naive String Search Pseudo code

// loop longer string
// loop shortder sting
// if char dont match ...brake out
// if match ... ++ counter

function naiveSearch(long, short) {
  let count = 0;

  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[i] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }

  return count;
}
