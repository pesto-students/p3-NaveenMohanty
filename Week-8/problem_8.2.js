function ValidBST(arr) {
  if (arr && Array.isArray(arr) && arr.length) {
    let queue = [0, null]
    let len = arr.length

    while (queue.length) {

      let front = queue.shift()

      if (front !== null) {
        let left = (front * 2) + 1
        let right = (front * 2) + 2

        if ((left < len) && (arr[left] !== null) && (arr[left] < arr[front]))
          queue.push(left)
        else if ((arr[left] !== null) && (arr[left] > [front]))
          return false

        if ((right < len) && (arr[right] !== null) && (arr[right] > arr[front]))
          queue.push(right)
        else if ((arr[right] !== null) && (arr[right] < arr[front]))
          return false
      }

    }
    return true;
  } else {
    throw "Invalid Tree Array";
  }
}

console.log(ValidBST([2, 1, 3]))
console.log(ValidBST([5, 1, 4, null, null, 3, 6]))

/**
 * Let n be the number of nodes in BST
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */