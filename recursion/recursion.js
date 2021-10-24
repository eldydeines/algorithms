/** product: calculate the product of an array of numbers. */

function product(nums, idx = 0) {
  if (nums.length == idx) return 1;
  return nums[idx] * product(nums, idx + 1);
}

/** longest: return the length of the longest word in an array of words. */
function longest(words, idx = 0) {
  if (words.length === idx) {
    return 0;
  }
  else if ((words[idx]).length > longest(words.slice(1))) {
    return (words[idx]).length;
  }
  else {
    return (words[idx + 1]).length;
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0) {
  if (str.length <= idx) return '';
  return str[idx] + everyOther(str, idx + 2);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  let currentLength = str.length;
  let newString = str.slice(1, currentLength - 1);

  if (currentLength <= 1) return true;
  if (str[0] !== str[currentLength - 1]) {
    return false;
  }
  else {
    return true && isPalindrome(newString);
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx == arr.length) return -1;
  if (arr[idx] == val) return idx;
  return findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = 0) {
  if (str.length == idx) return '';
  return revString(str, idx + 1) + str[idx];
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let gatheredStrings = [];
  if (typeof obj === 'object' && obj !== null) {
    for (let value of Object.values(obj)) {
      if (value instanceof String || typeof value === 'string') {
        gatheredStrings.push(value);
      }
      if (typeof value === 'object' && value !== null) {
        gatheredStrings.push(...gatherStrings(value));
      }
    }
  }
  return gatheredStrings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, leftSide = 0, rightSide = arr.length) {
  if (leftSide > rightSide) {
    return -1;
  }
  let middleOfArr = Math.floor((rightSide + leftSide) / 2);
  if (arr[middleOfArr] === val) {
    return middleOfArr;
  }
  if (arr[middleOfArr] > val) {
    return binarySearch(arr, val, leftSide, middleOfArr - 1);
  }
  return binarySearch(arr, val, middleOfArr + 1, rightSide);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
