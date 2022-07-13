// 1st Implementation of Custome 

/*function customPromise(cb) {
  return {
    then(resolve, reject) {
      cb && cb.call(this, resolve, reject)
    },
  }
}*/

// 2nd Implementation of Custome 

function customPromise(mainCb) {
  this.thenArr = []
  this.status = "pending⌛"
  this.catchArr = () => { }
  this.value = undefined

  this.resolve = (function (value) {
    this.value = value
    this.handleResolve()
    return this
  }).bind(this)

  this.reject = (function (value) {
    this.value = value
    this.handleReject()
    return this
  }).bind(this)

  this.then = function (cb) {
    this.thenArr.push(cb)
    return this
  }

  this.catch = function (cb) {
    this.catchArr = cb
    return this
  }

  this.handleResolve = function () {
    try {
      this.thenArr.forEach((cb) => {
        cb(this.value)
        this.status = "fulfilled👍"
      })
    } catch (error) {
      this.status = "rejected👎"
      this.catchArr(this.value, error)
    }
  }

  this.handleReject = function (error) {
    this.status = "rejected👎"
    this.thenArr = []
    this.catchArr(this.value, error)
  }

  mainCb && mainCb(this.resolve, this.reject)
  return this.value
}

function getNumber() {
  return parseInt(Math.random() * 100)
}

function isDivisibleBy5(tms) {
  let num = getNumber()
  let isDiv = false
  if (num % 5 == 0)
    isDiv = true
  return new customPromise(function (resolve, reject) {
    setTimeout(() => { isDiv ? resolve(`${num} is Divisible By 5`) : reject(`${num} is not Divisible By 5`) }, tms)
  })
}

let prom = isDivisibleBy5(1000).then(console.log).then(console.log).then(console.log).catch(console.log)

console.log(prom.status)
setTimeout(() => console.log(prom.status), 2000)