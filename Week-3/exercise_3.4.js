function createStack() {
  var items = []
  return {
    push(item){
      items.push(item)
    },
    pop(){
      return items.pop()
    },
    getList(){
      return items
    }
  }
}

let stack = createStack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)

console.log(stack.getList())

stack.pop()
stack.pop()

console.log(stack.getList())

console.log(stack.item)