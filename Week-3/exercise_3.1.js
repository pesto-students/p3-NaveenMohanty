function Memoize(func) {
  var cache = new Map();
  return function (...args) {
    let value = cache.get(String(...args))
    if (value)
      return value
    else {
      let v = func(...args)
      cache.set(String(args), v)
      return cache.get(String(args))
    }
  }
}

function add(a = 0, b = 0) {
  return a + b
}

const memoizeAdd = Memoize(add);

console.time()
console.log(memoizeAdd(100, 100));//returns 200
console.timeEnd()
console.time()
console.log(memoizeAdd(100));//returns 100
console.timeEnd()
console.time()
console.log(memoizeAdd(100, 200))//returns 300
console.timeEnd()
console.time()
console.log(memoizeAdd(100, 100))//returns 200 without computing
console.timeEnd()