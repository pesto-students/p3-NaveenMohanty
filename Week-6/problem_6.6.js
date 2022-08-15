function threeSum(arr, num) {
  let nearSum = Number.POSITIVE_INFINITY
  let diffTillNow = Number.POSITIVE_INFINITY
  let len = arr.length - 1
  for (let i = 0; i <= (len - 2); i++) {
    for (let j = 1; j <= (len - 1); j++) {
      for (let k = 2; k <= len; k++) {
        let sum = arr[i] + arr[j] + arr[k]
        let diff = ((sum - num) < 0) ? (sum - num) * -1 : (sum - num)
        if ((sum !== num) && (diffTillNow > diff)) {
          nearSum = sum
          diffTillNow = diff
        }
      }
    }
  }

  return nearSum
}

console.log(threeSum([-1, 1, 1, -4], 1));

/**
 * Time complexity : O(n^3)
 * Space complexity : O(1)
 */