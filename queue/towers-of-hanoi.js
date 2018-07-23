class Stack {

    constructor() {
        this.count = 0;
        this.storage = {};
    }

    push() {
        this.storage[this.count] = value;
        this.count++;
    }

    pop(){
        if(this.count === 0){
            return undefined;
        }

        this.count--;
        let result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    towersOfHanoi(){
        let stack1 = new Stack();
        let stack2 = new Stack();
        let stack3 = new Stack();
                
    }
}

