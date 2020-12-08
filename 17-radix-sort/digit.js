function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digiCount(num) {
  if (num === 0) return 1;

  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigi(arr) {
  let maxDigi = 0;

  for (let i = 0; i < arr.length; i++) {
    maxDigi = Math.max(maxDigi, digiCount(arr[i]));
  }

  return maxDigi;
}

module.exports = { getDigit, digiCount, mostDigi };
