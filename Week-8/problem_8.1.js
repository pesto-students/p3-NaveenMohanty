function MaxDepthBST(arr) {
  if (arr && Array.isArray(arr) && arr.length) {
    let depth = 0
    let queue = [0, null]
    let len = arr.length

    while (queue.length) {

      let front = queue.shift()

      if (front !== null) {
        let left = (front * 2) + 1
        let right = (front * 2) + 2

        if ((left < len) && (arr[left]!==null))
          queue.push(left)

        if ((right < len) && (arr[right]!==null))
          queue.push(right)

      } else {
        depth++;
        queue.length && queue.push(null)
      }

    }
    return depth;
  } else {
    throw "Invalid Tree Array";
  }
}

console.log(MaxDepthBST([3, 9, 20, null, null, 15, 7]))
console.log(MaxDepthBST([1, null, 2]))

/**
 * Let n be the number of nodes in BT
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */