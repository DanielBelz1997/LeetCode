function removeDuplicates(nums: number[]): number {
  if (nums.length <= 1) return nums.length;
  let idx = 0;
  let pos = 0;
  const hash = {};

  while (idx < nums.length) {
    if (hash[nums[idx]] !== nums[idx]) {
      hash[nums[idx]] = nums[idx];
      nums[pos] = nums[idx];
      pos++;
    }
    idx++;
  }

  return pos;
}

/**
  * another better solution in space:
  * 
  * function removeDuplicates(nums) {
  if (nums.length <= 1) return nums.length;

  let k = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] !== nums[i]) {
      nums[k++] = nums[i];
    }
  }

  return k;
}

  */
