/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
  let last = m + n - 1;

  while (n && m) {
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[last] = nums1[m - 1];
      m--;
    } else {
      nums1[last] = nums2[n - 1];
      n--;
    }
    last--;
  }

  while (n) {
    nums1[last] = nums2[n - 1];
    n--;
    last--;
  }
};
let arr1 = [1, 2, 3, 0, 0, 0];
let arr2 = [1, 2, 5, 6];
let m = 3;
let n = 4;

merge(arr1, m, arr2, n);
