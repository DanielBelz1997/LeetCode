/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const str = x.toString();
  const arr = str.split("");
  const revArr = [...arr].reverse();
  if (JSON.stringify(revArr) === JSON.stringify(arr)) {
    return true;
  } else {
    return false;
  }
};
