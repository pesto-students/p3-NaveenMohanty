function checkPair(arr, b) {
  arr.sort((a, b) => (a > b))
  let low = 0
  let high = arr.length > 1 ? 1 : 0
  while ((low < high) && (high < arr.length)) {
    let diff = arr[high] - arr[low]
    if (diff == b)
      return 1
    else if (diff < b)
      high++
    else
      low++
  }
  return 0
}

console.log(checkPair([5, 10, 3, 2, 50, 80], 40))
console.log(checkPair([-10, 20], 30))

/**
 * Time complexity : O(n log n)
 * Space complexity : O(1)
 */
