'use strict';

class linkedList{
    Node(data){
     this.head = null;
     this.length = 0;
     this.append(value);
   };

   append(value) {
       const newNode = {value};
       newNode.next = this.head;
       this.head = newNode;
       this.length++;
       return this;
   };

}

const list = new LinkedList('first').append('second');