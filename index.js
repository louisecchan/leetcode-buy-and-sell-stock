// You are given an array prices where prices[i]
// is the price of a given stock
// on the ith day.

// You want to maximize your profit by
// choosing a single day to buy one stock and
// choosing a different day in the future to sell that stock.

// Return maximum profit from this transaction.
// If no profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5

// Explanation: Buy on day 2 (price = 1)
// and sell on day 5 (price = 6),
// profit = 6-1 = 5.

// Note that buying on day 2 and selling on day 1 is not allowed because
// you must buy before you sell.

/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//   b[i] - a[i] must be positive
//   return positive difference
//   keep looping
//   compare against positive differences
//   return bigger number
// };

// Approach 1: Brute Force

// Time complexity: O(n²)
// where n is the length of the prices array
// Space complexity: O(1).
// only two variables were created. maxProfit and profit

function maxProfit(prices) {
  // set maxProfit to zero, this helps for edge case that says return zero when no profit is amde
  let maxProfit = 0;

  // we start the buying price at index 0 to get the prices[0]
  for (let buyPrice = 0; buyPrice < prices.length; buy++) {
    // start sell price with buyPrice + 1 to make sure we aren't going back on the days
    for (let sell = buyPrice + 1; sell < prices.length; sell++) {
      let profit = prices[sellPrice] - prices[buyPrice];

      maxProfit = Math.max(maxProfit, profit);
    }
  }
  return maxProfit;
}

// Approach 2

// Time complexity: O(n) where n is the length of the prices array
// Space complexity: O(1). only two variables were created. maxProfit and minPrice

function maxProfit(prices) {
  let maxProfit = 0;
  let minPrice = prices[0];

  for (let sell = 1; sell < prices.length; sell++) {
    let sellPrice = prices[sell];
    let profit = sellPrice - minPrice;

    maxProfit = Math.max(maxProfit, profit);

    if (sellPrice < minPrice) minPrice = sellPrice;
  }
  return maxProfit;
}

// Approach 3: Two Pointers

const maxProfit = (prices) => {
  let left = 0; // Buy
  let right = 1; // Sell
  let max_profit = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left]; // our current profit

      max_profit = Math.max(max_profit, profit);
    } else {
      left = right;
    }
    right++;
  }
  return max_profit;
};
