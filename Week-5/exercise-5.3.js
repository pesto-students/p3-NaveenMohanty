function hasDuplicate(arr) {
  let arrSet = new Set()
  let hasDuplicate = false

  for (let ele of arr) {
    if (!arrSet.has(ele)) {
      arrSet.add(ele)
    } else {
      hasDuplicate = true
      break
    }
  }

  return hasDuplicate
}

console.log(hasDuplicate([1, 2, 3, 4, 3, 9]))