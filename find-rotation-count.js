function findRotationCount(arr) {
  let minPointer = -1;
  let maxPointer = arr.length;
  let i;
  
  if (arr[arr.length-1] > arr[0]) {
    return 0
  }
  
  while (maxPointer - minPointer > 1) {
    i = Math.floor((minPointer + maxPointer) / 2);
    
    if (arr[i] < arr[0]) {
        maxPointer = i;
    }
    else {
        minPointer = i;
    }
  }
  return maxPointer
}

module.exports = findRotationCount