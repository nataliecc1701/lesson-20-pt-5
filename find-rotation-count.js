function findRotationCount(arr) {
  let minPointer = -1;
  let maxPointer = arr.length;
  let i;
  let count=0
  
  if (arr[arr.length-1] > arr[0]) {
    return 0
  }
  
  while (maxPointer - minPointer > 1) {
    if (++count >= 10000) {break}
    i = Math.floor((minPointer + maxPointer) / 2);
    
    if (arr[i] < arr[0]) {
        maxPointer = i;
        console.log(`max ${i}`)
    }
    else {
        minPointer = i;
        console.log(`min ${i}`)
    }
  }
  return maxPointer
}

module.exports = findRotationCount