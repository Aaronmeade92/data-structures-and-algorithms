'use strict';

class LinkedList{


    constructor(data){
     this.head = null;
     this.length = 0;
     this.next = null;
   }

   append(value) {
       const newNode = {value};
       newNode.next = this.head;
       this.head = newNode;
       this.length++;
       return this;
   };

   prepend(value) {
       const newNode = {value};
       newNode.next = this.head;
       this.head = newNode;
       return this;
   };
   reverseList(){
       let head = this.head;
       let next = head.next;
   }
}

module.exports = LinkedList;
// const list = new LinkedList('first').append('second');
// const secondList = new LinkedList('second').prepend('first');

