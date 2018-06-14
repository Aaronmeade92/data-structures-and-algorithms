'use strict';

describe('linked-list module', () => {

    it('should create a new linked list', () => {

        let newList = new LinkedList('1');
        expect(newList.head).toBe('1');
    })
})