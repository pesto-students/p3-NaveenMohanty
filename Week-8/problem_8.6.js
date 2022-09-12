function GraphPaths(adjList, n) {
  let adjencencyMap = new Map();
  for (let i = 0; i < n; i++) {
    adjencencyMap.set(i, adjList[i]);
  }
  let paths = [];
  function findPath(src, dest, path = []) {
    if (src === dest)
      return;
    let list = adjencencyMap.get(src);
    path.push(src);
    if (list && list.length > 0) {
      for (let v of list) {
        if (v === dest) {
          let x = [...path]
          x.push(v)
          paths.push(x)
        } else {
          findPath(v, dest, [...path]);
        }
      }
    }
  }

  findPath(0, (n - 1))
  return paths;
}

console.log(GraphPaths([[1, 2], [3], [3], []], 4))
console.log(GraphPaths([[4,3,1],[3,2,4],[3],[4],[]], 5))
