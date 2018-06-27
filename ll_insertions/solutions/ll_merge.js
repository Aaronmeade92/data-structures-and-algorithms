'use strict';

class linkedList{
    Node(data){
     this.head = null;
     this.root = data;
     this.length = 0;
     this.addToHead(value);
   };

   addToHead(value) {
       const newNode = {value};
       newNode.next = this.head;
       this.head = newNode;
       this.length++;
       return this;
   }

   addToTail(value) {
       const newNode = {value};
       newNode.next = this.root;
       this.length++;
       return this;
   }
}

const L1 = new LinkedList(1).addToHead(3);
const L2 = new LinkedList(2).addToHead(4);
const L3 = new LinkedList(2).addToTail(1);