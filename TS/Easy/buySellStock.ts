function maxProfit(prices: number[]): number {
  let prof = 0;
  let buy = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buy) {
      buy = prices[i];
    } else if (prices[i] - buy > prof) {
      prof = prices[i] - buy;
    }
  }

  return prof;
}
