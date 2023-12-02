function findFloor(arr, tgt) {
    let minPointer = -1;
    let maxPointer = arr.length;
    let i;
    
    while (maxPointer - minPointer > 1) {
        i = Math.floor((minPointer + maxPointer) / 2);
        if (arr[i] === tgt) return arr[i]
        else if (arr[i] > tgt) {
            maxPointer = i
        }
        else if(arr[i] < tgt) {
            minPointer = i
        }
    }
    if (minPointer > -1) return arr[minPointer]
    else return -1
}

module.exports = findFloor