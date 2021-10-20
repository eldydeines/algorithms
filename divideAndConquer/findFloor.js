// findFloor
// Write a function called findFloor which accepts a sorted array and a value x, 
// and returns the floor of x in the array. The floor of x in an array is the largest 
// element in the array which is smaller than or equal to x. 
// If the floor does not exist, return -1.

function findFloor(arr, val) {

    let leftInd = 0;
    let rightInd = arr.length - 1;

    while (leftInd <= rightInd) {

        let middleInd = Math.floor((leftInd + rightInd) / 2);

        if (arr[rightInd] <= val) {
            return Math.floor(arr[rightInd]);
        }
        if (val <= arr[leftInd]) {
            if (leftInd == 0 && val != arr[leftInd]) {
                return -1;
            }
            else if (arr[leftInd - 1] < val) {
                return arr[leftInd - 1];
            }
            else
                rightInd = middleInd - 1;
        }

        if (arr[middleInd] < val) {
            if (arr[middleInd - 1] > val) {
                return Math.floor(arr[middleInd]);
            }
            leftInd = middleInd + 1;
        }
        else {
            if (arr[middleInd + 1] < val) {
                return Math.floor(arr[middleInd]);
            }
            if (arr[middleInd] == val) {
                return Math.floor(arr[middleInd]);
            }
            rightInd = middleInd - 1;
        }
    }

    return -1;
}


console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 9)); // 8
console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 20)); // 19
console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 0)); // -1

