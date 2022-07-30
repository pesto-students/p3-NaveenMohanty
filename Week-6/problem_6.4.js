function findProfit(priceArr) {
  if (priceArr && Array.isArray(priceArr) && priceArr.length) {
    let highPrice = priceArr[priceArr.length - 1]
    let profit = Number.NEGATIVE_INFINITY
    for (let i = priceArr.length - 2; i >= 0; i--) {
      let ithPrice = priceArr[i]
      if (ithPrice > highPrice) {
        highPrice = ithPrice
      } else if (i) {
        prof = highPrice - ithPrice
        if (prof > profit)
          profit = prof
      }
    }
    return profit > 0 ? profit : 0
  } else {
    return null
  }
}

console.log(findProfit([7, 1, 5, 3, 6, 4]))
console.log(findProfit([7, 6, 4, 3, 1]))
