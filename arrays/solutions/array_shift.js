'use strict'
function insertArray(array, value) {
  
  let middle = array.length%2 === 1 ? (array.length + 1)/2 : array.length/2;

  let newArray = [];
for(let i = 0; i < array.length + 1; i++){

  if (i < middle) {
      newArray[i] = array[i];
        } else if(i === middle){
            newArray[i] = value
        }else {
            newArray[i] = array[i - 1]; 
        }
    }
    return newArray
}

insertArray([1, 2, 4, 5], 3)