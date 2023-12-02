function findRotatedIndex(arr, tgt) {
    let minPointer = -1;
    let maxPointer = arr.length;
    let i;
    
    while (maxPointer - minPointer > 1) {
        i = Math.floor((minPointer + maxPointer) / 2);
        if (arr[i] === tgt) return i
        if (tgt >= arr[0]) {
            if (arr[i] > tgt || arr[i] < arr[0]) {
                maxPointer = i;
            }
            else minPointer = i;
        }
        else {
            if (arr[i] < tgt || arr[i] > arr[0]) {
                minPointer = i;
            }
            else maxPointer = i;
        }
    }
    return -1
}

module.exports = findRotatedIndex