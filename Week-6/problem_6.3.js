function sortArr(arr) {
  if (arr && Array.isArray(arr) && arr.length) {
    let zeros = 0
    let ones = 0
    let twos = 0
    arr.forEach((num) => {
      if (num == 0)
        zeros++
      else if (num == 1)
        ones++
      else if (num == 2)
        twos++
    })
    arr = []
    while (zeros) {
      arr.push(0)
      zeros--
    }
    while (ones) {
      arr.push(1)
      ones--
    }
    while (twos) {
      arr.push(2)
      twos--
    }
    return arr
  } else {
    return null
  }
}

console.log(sortArr([0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 0, 0, 2, 2, 1, 1]))