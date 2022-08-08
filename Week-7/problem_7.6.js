class TwoStackQueue {
  constructor() {
    this.input = []
    this.output = []
  }

  enqueue(item) {
    return this.input.push(item) ? true : false
  }
  dequeue() {
    if (this.output && this.output.length) {
      return this.output.pop()
    } else if (this.input && this.input.length) {
      while (this.input.length > 0) {
        let top = this.input.pop()
        this.output.push(top)
      }
      return this.output.pop()
    } else {
      return null
    }
  }
  get size() {
    return (this.input.length + this.output.length)
  }
}

let stkQueue = new TwoStackQueue()

console.log(stkQueue.size)
console.log(stkQueue)
console.log(stkQueue.enqueue(1))
console.log(stkQueue.enqueue(2))
console.log(stkQueue.enqueue(3))
console.log(stkQueue.size)
console.log(stkQueue)
console.log(stkQueue.dequeue())
console.log(stkQueue.dequeue())
console.log(stkQueue)