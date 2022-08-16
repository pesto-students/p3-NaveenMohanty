function findPath(n, adjecencyArr, src, dest) {
  let adjecencyList = new Map()
  let visited = new Map()

  // Adding vertex to adjecencyList and setting visited map for all vertex to false
  for (let i = 0; i < n; i++) {
    adjecencyList.set(i, [])
    visited.set(i, false)
  }

  // Iterating over edge array to insert edge in adjencencyList
  adjecencyArr.forEach((adjecencyPar) => {
    let list = adjecencyList.get(adjecencyPar[0])
    list.push(adjecencyPar[1])
    adjecencyList.set(adjecencyPar[0], list)
  });

  if (src === dest)
    return true;

  let queue = [src]

  visited.set(src, true)

  while (queue.length) {
    let font = queue.shift()
    let adList = adjecencyList.get(font)
    for (let v of adList) {
      if (!visited.get(v)) {
        if (v === dest)
          return true;
        visited.set(v, true)
        queue.push(v)
      }
    }
  }

  return false;
}

console.log(findPath(3, [[0, 1], [1, 2], [2, 0]], 0, 2))
console.log(findPath(6, [[0, 1], [0, 2], [3, 5], [5, 4], [4, 3]], 0, 5))

/**
 * Let v be the number of Vertex in Graph
 * Time Complexity: O(v)
 * Space Complexity: O(v)
 */
