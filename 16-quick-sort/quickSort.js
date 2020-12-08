const pivot = require("./pivot");

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);

    // left
    quickSort(arr, left, pivotIndex - 1);

    // right
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

const test = quickSort([100, 4, 6, 9, 1, 2, 5, 3]);

console.log(test);
