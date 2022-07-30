function spriralArray(arr) {
  let row
  let col
  if (arr && arr.length)
    row = arr.length
  if (arr[0] && Array.isArray(arr[0]) && arr[0].length)
    col = arr[0].length
  if (row && col) {
    let spriralArr = []
    let sr = 0
    let er = row - 1
    let sc = 0
    let ec = col - 1

    while ((sr <= er) && (sc <= ec)) {
      for (let i = sc; i <= ec; i++) {
        spriralArr.push(arr[sr][i])
      }
      sr++
      for (let i = sr; i <= er; i++) {
        spriralArr.push(arr[i][ec])
      }
      ec--
      for (let i = ec; i >= sc; i--) {
        spriralArr.push(arr[er][i])
      }
      er--
      for (let i = er; i >= sr; i--) {
        spriralArr.push(arr[i][sc])
      }
      sc++
    }

    return spriralArr
  } else {
    return null
  }
}

console.log(spriralArray([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12]
]))