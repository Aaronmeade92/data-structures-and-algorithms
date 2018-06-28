class Queue {

    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    enqueue(value) {
  
      const newNode = new Node(value);
  
      if(!this.tail) {
        this.head = newNode;
        this.tail = newNode;
        return;
      }
  
      // [5] -> [7] and [12] just came in
      // how to make [12] the head?
      const oldTail = this.tail;
  
      this.tail = newNode; // [12] -> null
      oldTail.next = this.tail;
      // [12] -> [5] -> [7]
    }
  
    dequeue() {
  
      if(!this.head) {
        return null;
      }
  
      // [7] -> [5] -> [12]
      // remove head and return it
  
      const ogHead = this.head;
  
      this.head = ogHead.next;
  
      return ogHead.data;
    }
  }
  
  class Node {
    constructor(value) {
      this.data = value;
      this.next = null;
    }
  }
  
  const queue = new Queue();
  queue.enqueue(7); // [7]
  queue.enqueue(5); // [7] -> [5]
  queue.enqueue(12); // [7] -> [5] -> [12]
  queue;
  
  