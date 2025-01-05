function maxProfit(prices) {
  let minPrice = Infinity; //min price is min buying price
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    let currentProfit = prices[i] - minPrice;
    if (maxProfit < currentProfit) {
      maxProfit = currentProfit;
    }
  }
  return maxProfit;
}

console.log(maxProfit([3, 1, 5, 3, 6, 7]));
