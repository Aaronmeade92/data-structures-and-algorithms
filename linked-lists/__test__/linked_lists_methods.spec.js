'use strict';

const LinkedList = require('../lib/linked_lists_methods.js');


describe('linked_list module', () => {

    it('should create a new linked list', () => {

        let newList = new LinkedList();

        expect(newList.head).toBeNull();
    });

    it('should return value of node that has been appended to the Linked Lists', () => {

        let list = new LinkedList();
        let newList = list.append(1);

        // console.log('!!!!!!', newList, '!!!!!');

        expect(newList.head.value).toEqual(1);
    });
    
    it('should return value prepended', () => {

    let list = new LinkedList();
    let newList = list.append(2);

    let nextList = list.prepend(1);
    // console.log('!!!!', nextList, '!!!!!');

    expect(nextList.head.value).toEqual(1);
    })

    it('should return a reversed linked list', () => {

    })
})