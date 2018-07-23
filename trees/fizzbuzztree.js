class BinarySearchTree{

    constructor(){
        this.root = null;
    }

    insert(data){
        
        var newNode = new Node(data);

        if(this.root === null){
            this.rooot = newNode;
        }else{
         this.insertNode(this.root, newNode);
        }
        
    }
}