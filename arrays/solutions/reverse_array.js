'use strict';


function reverseArray(array) {
  let reversed = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reversed[(array.length - 1) - i] = array[i];
  }
  return reversed;
}

module.exports = reverseArray;
