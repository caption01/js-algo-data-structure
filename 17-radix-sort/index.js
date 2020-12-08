const { getDigit, mostDigi } = require("./digit");

function radixSort(nums) {
  let maxDigitCount = mostDigi(nums);

  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < nums.length; i++) {
      const digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }

    nums = [].concat(...digitBuckets);
  }

  return nums;
}

const test = radixSort([112, 20, 123, 31876, 5]);

console.log(test);
