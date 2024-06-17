const getConcatenation = function (nums) {
  const ans = [];
  let oneloop = 0;
  let secloop = 0;
  let i = 0;

  while (secloop < nums.length) {
    if (oneloop < nums.length) {
      ans[oneloop] = nums[i];
      i++;
      oneloop++;
    } else {
      ans[i] = nums[secloop];
      i++;
      secloop++;
    }
  }
  return ans;
};

/**
 * simpler solution :
 
  const getConcatenation = function (nums) {
  const ans = [];

  for (let i = 0; nums.length > i; i++) {
    ans[i] = nums[i];
    ans[i + nums.length] = nums[i];
  }

  return ans;
};

 */
