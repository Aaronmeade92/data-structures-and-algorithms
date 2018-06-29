'use strict';

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
    }

    enqueue(name, animal) {

        const newAnimal = new Animal(name, animal);

        if (!this.tail) {
            this.head = newAnimal;
            this.tail = newAnimal;
            return;
        }

        const oldTail = this.tail;
        this.tail = newAnimal;
        oldTail.next = this.tail;
    }

    dequeue() {

        if (!this.head) {
            return null;
        } 
            const ogHead = this.head;

            this.head = ogHead.next;

            return ogHead.data;
        
    }
}

class Animal {
    constructor(name, value) {
        this.name = name;
        this.data = value;
        this.next = null;
    }

}

const animal = new Queue();
animal.enqueue('Chip', 'dog');
animal.enqueue('Gerogia', 'cat');
animal.enqueue('Amber', 'cat');
animal;

const dqd = animal.dequeue();
dqd;