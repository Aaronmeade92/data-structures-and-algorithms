'use strict'

class linkedList{
     Node(data){
      this.head = null;
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

    find(k) {
        let thisNode = this.head;
        
        while(thisNode) {
            if(thisNode.k === val){
                return thisNode;
            }

            thisNode = thisNode.next;
        }

        return thisNode;
    }

}

