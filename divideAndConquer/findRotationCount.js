// findRotationCount
// Write a function called findRotationCount which accepts an array of distinct 
// numbers sorted in increasing order. 
// The array has been rotated counter-clockwise n number of times. 
// Given such an array, find the value of n.
function findRotationCount(arr) {

    let leftInd = 0;
    let rightInd = arr.length - 1;

    if (arr[leftInd] < arr[rightInd]) {
        return 0;
    }
    else {

        while (leftInd <= rightInd) {

            let middleInd = Math.floor((leftInd + rightInd) / 2);

            if (arr[leftInd] >= arr[middleInd] && arr[leftInd] > arr[rightInd]) {
                rightInd = middleInd;
            }
            else if (((middleInd + 1) == rightInd) && (arr[middleInd] > arr[rightInd])) {
                return middleInd + 1;
            }
            else if (((leftInd + 1) == rightInd) && (arr[leftInd] > arr[leftInd])) {
                return leftInd + 1;
            }
            else if (arr[leftInd] < arr[middleInd] && arr[leftInd] < arr[rightInd]) {
                rightInd = middleInd - 1;
            }
            else
                leftInd = middleInd;
        }
    }
    return -1;
}

console.log(findRotationCount([15, 18, 2, 3, 6, 12])); // 2
console.log(findRotationCount([7, 9, 11, 12, 5])); // 4
console.log(findRotationCount([7, 9, 11, 12, 15])); // 0