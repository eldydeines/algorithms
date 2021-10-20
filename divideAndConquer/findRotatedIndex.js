// findRotatedIndex
// Write a function called findRotatedIndex which accepts a rotated array of sorted 
// numbers and an integer. The function should return the index of 
// num in the array. If the value is not found, return -1.

function findRotatedIndex(arr, num) {


    let leftInd = 0;
    let rightInd = arr.length - 1;
    let counter = 0;

    while (leftInd <= rightInd) {

        let middleInd = Math.floor((leftInd + rightInd) / 2);
        arr[middleInd];

        if (arr[leftInd] == num) {
            return leftInd;
        }
        else if (arr[rightInd] == num) {
            return rightInd;
        }
        else if (arr[middleInd] == num) {
            return middleInd;
        }
        else if (arr[leftInd] < num && num < arr[middleInd]) {
            rightInd = middleInd;
        }
        else if (arr[middleInd] < num && num < arr[rightInd]) {
            leftInd = middleInd;
        }
        else {
            leftInd = leftInd + 1;
            rightInd = rightInd - 1;
        }
        counter++;
        console.log("C", counter);
    }

    return -1;
}


console.log(findRotatedIndex([3, 4, 1, 2], 4)); // 1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)); // 2
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)); // 6
console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)); // -1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)); // -1