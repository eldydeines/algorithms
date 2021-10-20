// Count Zeroes ----------------------------------------------------------------------------------------------
// Given an array of 1s and 0s which has all 1s first followed by all 0s, 
// write a function called countZeroes, 
// which returns the number of zeroes in the array.

function countZeroes(arr, target = 0) {
    let count = 0;

    let leftBoundary = 0;
    let rightBoundary = arr.length - 1;
    let midPoint = Math.floor(rightBoundary / 2);

    if (arr.length == 2) {
        if (arr[leftBoundary] == 0) {
            count++;
        }
        if (arr[rightBoundary] == 0) {
            count++;
        }
    }
    else
        while (leftBoundary <= rightBoundary) {

            if (target == arr[leftBoundary] && target == arr[rightBoundary]) {
                return rightBoundary - leftBoundary + 1;
            }
            else if (arr[leftBoundary] == 1 && arr[rightBoundary] == 1) {
                return 0;
            }
            else if (arr[midPoint] == 1) {
                leftBoundary = midPoint;
                midPoint = Math.floor((rightBoundary + midPoint) / 2);
                if (midPoint >= leftBoundary) {
                    return arr.length - leftBoundary - 2;
                }
            }
            else {
                rightBoundary = midPoint;
                midPoint = Math.floor(rightBoundary / 2);
                if (midPoint <= leftBoundary) {
                    return arr.length - leftBoundary - 1;
                }
            }

        }

    return count;
}

console.log(countZeroes([1, 1, 1, 1, 0, 0])); //2
console.log(countZeroes([1, 0, 0, 0, 0])); // 4
console.log(countZeroes([0, 0, 0])); // 3
console.log(countZeroes([1, 1, 1, 1])); // 0
console.log(countZeroes([1, 0])); //1
