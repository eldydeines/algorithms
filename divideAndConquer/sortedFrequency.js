// sortedFrequency --------------------------------------------------------------------------------------------
// Given a sorted array and a number, write a function called 
// sortedFrequency that counts the occurrences of the number in the array

function sortedFrequency(arr, numToCount) {

    function findStart(arr, numToCount, leftInd, rightInd) {

        while (leftInd <= rightInd) {

            let middleInd = Math.floor((leftInd + rightInd) / 2);
            let middleVal = arr[middleInd];


            if (middleVal < numToCount) {
                if (arr[middleInd - 1] == numToCount) {
                    return middleInd - 1;
                }
                leftInd = middleInd + 1;
            }
            else if (middleVal > numToCount) {
                if (arr[middleInd + 1] == numToCount) {
                    return middleInd + 1;
                }

                rightInd = middleInd - 1;
            }
            else {
                if (middleVal == numToCount && arr[middleInd - 1] != numToCount) {
                    return middleInd;
                }
                rightInd = middleInd - 1;
            }
        }
    }

    function findEnd(arr, numToCount, leftInd, rightInd) {

        while (leftInd <= rightInd) {

            let middleInd = Math.floor((leftInd + rightInd) / 2);
            let middleVal = arr[middleInd];

            if (middleVal < numToCount) {
                if (arr[middleInd + 1] == numToCount) {
                    return middleInd + 1;
                }
                leftInd = middleInd + 1;
            }
            else if (middleVal > numToCount) {
                if (arr[middleInd - 1] == numToCount) {
                    return middleInd - 1;
                }
                rightInd = middleInd - 1;
            }
            else {
                if (middleVal == numToCount && arr[middleInd + 1] != numToCount) {
                    return middleInd;
                }
                leftInd = middleInd + 1;
            }
        }

        return -1;
    }

    let leftInd = 0;
    let rightInd = arr.length - 1;

    let startC = findStart(arr, numToCount, leftInd, rightInd);
    let endC = findEnd(arr, numToCount, leftInd, rightInd);

    if (endC / startC == 1 && startC >= 0) {
        return 1;
    }
    else if (endC == -1 || startC == -1) {
        return -1;
    }
    else if (startC == 0 && endC > 0 && endC < arr.length) {
        return endC + 1;
    }
    else {
        return endC - startC + 1;
    }
}

console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)); // 4
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)); // 1
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)); // 2
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)); // -1
