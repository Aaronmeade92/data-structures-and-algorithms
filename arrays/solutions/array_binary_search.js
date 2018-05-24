'use strict';

function binarySearch(array, searchTerm) {
  let upperRound = array.length;
  let lowerBound = 0;
  let middle = Math.floor(upperBound / 2);
  let value = array[middle];

  if (searchTerm === value) {
    return middle;
  } else if (searchTerm < value) {
    upperBound = middle;
  } else if (searchTerm > value) {
    lowerBound = middle;
  }

  middle = Math.floor((upperBound - lowerBound)) / 2;
  value = array[middle];

  if (searchKey == candidate) {
    return middle;
  } else if (searchKey > value) {
    lowerBound = middle;
  } else if (searchTerm < value) {
    upperBound = middle;
  }
  
  middle = Math.floor((upperBound - lowerBound)) / 2 + lowerBound;
  value = array[middle];

  if(searchTerm === value){
      return middle;
  }
  return -1;

  // for(i = 0; i < array.length; i++){
  //     if(array[i] === searchTerm){
  //         return array[i]
  //     } else {
  //         return -1
  //     }
  // }
}
