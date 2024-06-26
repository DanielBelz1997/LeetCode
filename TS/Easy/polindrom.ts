function isPalindrome(s: string): boolean {
  if (s.length <= 1) return true;

  let str = "";

  for (let i = 0; i < s.length; i++) {
    if (/[a-z]/i.test(s[i]) || /[0-9]/i.test(s[i])) {
      str += s[i].toLowerCase();
    }
  }

  let k = str.length - 1;

  for (let j = 0; j < str.length / 2; j++, k--) {
    if (str[j] !== str[k]) {
      return false;
    }
  }
  return true;
}
