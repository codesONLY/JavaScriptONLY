/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let maxProfit = 0;
    let minPrice = Number.POSITIVE_INFINITY;
    for(let x in prices){
        minPrice = Math.min(minPrice, prices[x]);
        maxProfit = Math.max(maxProfit, prices[x] - minPrice);
    }
    
    
    return maxProfit
    
};