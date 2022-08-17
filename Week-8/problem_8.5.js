function TownJudge(trustList, n) {
  let trustAdjencency = new Map()

  for (let i = 1; i <= n; i++) {
    trustAdjencency.set(i, null)
  }

  for (let ele of trustList) {
    trustAdjencency.set(ele[0], ele[1])
  }

  let judge = trustAdjencency.get(1)

  for (let i = 2; i <= n; i++) {
    let trust = trustAdjencency.get(i)
    if (trust && (trust === judge))
      continue;
    else if ((trust === null) && (i === judge))
      continue;
    else
      return -1;
  }

  return judge;
}

console.log(TownJudge([[1, 2]], 2))
console.log(TownJudge([[1, 3], [2, 3]], 3))
console.log(TownJudge([[1, 3], [2, 3], [3, 1]], 3))

