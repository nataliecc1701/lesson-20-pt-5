function sortedFrequency(arr, tgt) {
    // I'm not naming all my pointers.
    // the middle two will point to the first and last things that match tgt.
    // the outer ones will be one less/greater, pointing to non-tgts or outside the array
    const pointers = [-1, -1, arr.length, arr.length];
    let i;
    
    // first we do a binary search for tgt
    count = 0;
    while(arr[pointers[2]] !== tgt || arr[pointers[1]] !== tgt) {
        i = Math.floor((pointers[1] + pointers[2]) / 2)
        if (arr[i] === tgt) {
            pointers[1] = i;
            pointers[2] = i;
            break
        }
        else if (arr[i] > tgt) {
            pointers[2] = i;
            // is tgt even in the array?
            if(i === 0) {
                return -1 // I don't know why we return -1
            }
        }
        else {
            pointers[1] = i;
            // is tgt even in the array?
            if(i + 1 === arr.length) {
                return -1 // considering we're counting zero, but the test case expects it
            }
        }
    }
    
    // binary search for the FIRST tgt. pointers[0] will point at the last x < tgt
    while(pointers[1] - pointers[0] > 1) {
        i = Math.floor((pointers[0] + pointers[1]) / 2)
        if (arr[i] === tgt) {
            pointers[1] = i;
        }
        else {
            pointers[0] = i;
        }
    }
    
    // binary search for the LAST tgt
    while(pointers[3] - pointers[2] > 1) {
        i = Math.floor((pointers[3] + pointers[2]) / 2)
        if (arr[i] === tgt) {
            pointers[2] = i;
        }
        else {
            pointers[3] = i;
        }
    }
    
    return pointers[2] - pointers[1] + 1
}

module.exports = sortedFrequency