class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    const newVal = new Node(value);
    if (this.isEmpty()) {
      this.first = newVal;
      this.last = newVal;
    } else {
      this.last.next = newVal;
      this.last = newVal
    }

    console.log("ADD -> ", this)
    return this.length++;

  }
  dequeue() {
    if (this.isEmpty()) {
      return this.length;
    }

    this.first = this.first.next;
    if (!this.first) {
      this.last = null;
    }

    console.log("REMOVE -> ", this)
    return this.length--;
  }
  isEmpty() {
    return !this.length;
  };
}

const myQueue = new Queue();
myQueue.enqueue('hui')
myQueue.enqueue('penis')
myQueue.enqueue('suka')
myQueue.dequeue()
console.log(myQueue.peek())
  //Joy
  //Matt
  //Pavel
  //Samir