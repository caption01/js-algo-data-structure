function sumRange(num) {
  if (num === 1) return 1;

  return num + sumRange(num - 1);
}

function factorial(num) {
  if (num === 0) return 0;
  if (num === 1) return num;

  return num * factorial(num - 1);
}

function collectOdd(arr) {
  let newArr = [];

  if (arr.length === 0) return newArr;

  let [value, ...rest] = arr;

  if (value % 2 !== 0) {
    newArr.push(value);
  }

  newArr = newArr.concat(collectOdd(rest));

  return newArr;
}
