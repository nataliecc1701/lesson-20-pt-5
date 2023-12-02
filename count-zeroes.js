function countZeroes(arr) {
  let maxPointer = arr.length - 1;
  let minPointer = 0;
  let i;
  
  // handle edge cases
  if (arr[0] === 0) {
    return arr.length
  }
  if (arr[maxPointer] === 1) {
    return 0
  }
  
  // search until the high pointer points at the first zero
  while (maxPointer - minPointer > 1) {
    i = Math.floor((minPointer + maxPointer) / 2)
    if (arr[i] == 0) {
        maxPointer = i
    }
    else {
        minPointer = i
    }
  }
  // the index of the first zero is equal to the number of nonzero elements before it
  return arr.length - maxPointer
}

module.exports = countZeroes