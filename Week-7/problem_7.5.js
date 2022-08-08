function NextGreaterEle(arr) {
  let stack = [], ans = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    let num = arr[i]
    if (stack.length) {
      let top = stack.pop()
      while (top && (top < num))
        top = stack.pop()
      if (top && (top > num)) {
        ans.unshift(top)
        stack.push(top)
        stack.push(num)
      } else {
        ans.unshift(-1)
        stack.push(num)
      }
    } else {
      stack.push(num)
      ans.unshift(-1)
    }
  }
  return ans
}

console.log(NextGreaterEle([1, 3, 2, 4]))
console.log(NextGreaterEle([6, 8, 0, 1, 3]))
