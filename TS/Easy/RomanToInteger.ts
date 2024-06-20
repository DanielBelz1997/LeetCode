function romanToInt(s: string): number {
  let hash = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] < hash[s[i + 1]]) {
      if ((s[i] === "I" && s[i + 1] === "V") || s[i + 1] === "X") {
        sum -= 1;
        continue;
      } else if ((s[i] === "X" && s[i + 1] === "L") || s[i + 1] === "C") {
        sum -= 10;
        continue;
      } else if ((s[i] === "C" && s[i + 1] === "D") || s[i + 1] === "M") {
        sum -= 100;
        continue;
      }
    }

    sum += hash[s[i]];
  }
  return sum;
}
