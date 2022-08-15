function Node(value, next) {
  this.value = value ? value : null;
  this.next = next ? next : null;
}

class singleLinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0
  }

  push(value) {
    let newNode = new Node(value);
    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.tail = newNode;
      this.head = newNode;
    }
    this.size++;
    return newNode;
  }

  pop() {
    if (this.size) {
      let current = this.head;
      this.size--;
      if (current) {
        let prevPrev = null
        let prev = null;
        while (current) {
          prevPrev = prev;
          prev = current;
          current = current.next;
        }
        if (prevPrev) {
          this.tail = prevPrev;
          this.tail.next = null;
        } else {
          this.tail = null;
          this.head = null;
        }
        return prev;
      } else {
        this.tail = null;
        this.head = null;
        return current;
      }
    } else {
      return null;
    }
  }

  unshift(value) {
    let newNode = new Node(value)
    if (this.size) {
      newNode.next = this.head
      this.head = newNode
    } else {
      this.head = newNode
      this.tail = newNode
    }
    this.size++
    return newNode;
  }

  shift() {
    let Node = null;
    if (this.size === 1) {
      Node = this.head
      this.head = null
      this.tail = null
      this.size--
    } else if (this.size) {
      Node = this.head
      this.head = this.head.next
      this.size--
    }
    return Node;
  }

  insert(value, idx) {
    if (idx === (this.size - 1)) {
      return this.push(value);
    } else if (idx === 0) {
      return this.unshift(value);
    } else if (this.size <= idx) {
      throw "Linked List is size overflow"
    } else if (idx) {
      let newNode = new Node(value)
      let i = 0;
      let current = this.head;
      while (current && (i < (idx - 1))) {
        i++;
        current = current.next;
      }
      newNode.next = current.next
      current.next = newNode
      this.size++;
      return newNode;
    }
    return null;
  }

  remove(idx) {
    if (idx === (this.size - 1)) {
      return this.pop()
    } else if (idx === 0) {
      return this.shift()
    } else if (idx < this.size) {
      let current = this.head;
      let prev = this.head
      let i = 0;
      while (current && (i < idx)) {
        i++;
        prev = current;
        current = current.next;
      }
      prev.next = current.next
      return current;
    } else {
      throw "Index out of range"
    }
  }


  get peek() {
    let current = this.head;
    let list = '';
    while (current) {
      list = list + current.value + (current.next ? ' -> ' : '');
      current = current.next;
    }
    return list;
  }

}


function DetectLoop(list) {
  let slow = list.head
  let fast = list.head
  while (fast) {
    let i = 0
    while (fast && (i < 2)) {
      fast = fast.next
      i++
    }
    if (fast === slow)
      return true
    if (fast)
      slow = slow.next
  }
  return false
}

/* Detect loop in Linked list */

let list = new singleLinkList()

list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
list.push(6)
list.push(7)
list.push(8)

console.log(list.peek)

// Creating loop
list.tail.next = list.head.next.next.next

console.log(DetectLoop(list))

/**
 * Time Complexity : O(n)
 * Space Complexity : O(1)
 */