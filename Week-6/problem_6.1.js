function maxSum(arr) {
  if (arr && Array.isArray(arr) && arr.length) {

    let max = Number.NEGATIVE_INFINITY
    let maxTill = 0

    arr.forEach((item) => {
      maxTill += item
      if (maxTill > max)
        max = maxTill
      if (maxTill < 0)
        maxTill = 0
    })

    return max
  } else {
    return null
  }
}

console.log(maxSum([1, 2, 3, 4, -10]))
console.log(maxSum([1, 2, 3, 4]))
console.log(maxSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(maxSum([4, -1, 2, 1]))

