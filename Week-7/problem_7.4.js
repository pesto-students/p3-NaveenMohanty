function ParenthesisChecker(str) {
  let stack = []
  let i = 0
  while (i < str.length) {
    let char = str[i]
    if ([`{`, `(`, `[`].includes(char)) {
      stack.push(char)
    } else if ([`}`, `)`, `]`].includes(char)) {
      let top = stack.pop()
      if ((char === `}`) && (top !== '{'))
        return false
      else if ((char === `)`) && (top !== `(`))
        return false
      else if ((char === `]`) && (top !== `[`))
        return false
    }
    i++
  }
  if (stack.length == 0)
    return true
  else
    return false
}

console.log(ParenthesisChecker(`[()]{}{()()}`)) // True
console.log(ParenthesisChecker(`[(])`)) // False
console.log(ParenthesisChecker(`{([])}`)) // True
console.log(ParenthesisChecker(`()`)) // True
console.log(ParenthesisChecker(`([]`)) // False

/**
 * Time Complexity : O(n)
 * Space Complexity : O(n)
 */



