/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
  if (nums.length === 0) {
    return 0;
  }

  let index = 0;
  let pos = 0;

  while (index !== nums.length) {
    if (nums[index] !== val) {
      nums[pos] = nums[index];
      pos += 1;
    }

    index += 1;
  }

  return pos;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
