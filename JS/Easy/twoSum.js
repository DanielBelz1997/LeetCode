/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let x = 0; x < nums.length; x++) {
      if (nums.at(i) + nums.at(i + x) === target) {
        if (i !== i + x) arr.push(i, i + x);
      }
    }
  }
  return arr;
};
