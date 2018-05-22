'use strict'

function binarySearch(array, searchTerm) {

    for(i = 0; i < array.length; i++){
        if(array[i] === searchTerm){
            return array[i]
        } else {
            return -1 
        }
    }
}