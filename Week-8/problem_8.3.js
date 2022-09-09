function LevelOrderTravers(arr) {
  if (arr && Array.isArray(arr) && arr.length) {
    let levelArrs = []
    let levelArr = []
    let queue = [0, null]
    let len = arr.length

    while (queue.length) {

      let front = queue.shift()

      if (front !== null) {
        let left = (front * 2) + 1
        let right = (front * 2) + 2

        if ((left < len) && (arr[left] !== null))
          queue.push(left)

        if ((right < len) && (arr[right] !== null))
          queue.push(right)

        levelArr.push(arr[front])
      } else {
        levelArrs.push(levelArr)
        levelArr = []
        queue.length && queue.push(null)
      }

    }

    if (levelArr && levelArr.length)
      levelArrs.push(levelArr)

    return levelArrs;
  } else {
    throw "Invalid Tree Array";
  }
}

console.log(LevelOrderTravers([3, 9, 20, null, null, 15, 7]))
console.log(LevelOrderTravers([1]))
console.log(LevelOrderTravers([5, 1, 4, null, null, 3, 6]))

/**
 * Let n be the number of nodes in BT
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */