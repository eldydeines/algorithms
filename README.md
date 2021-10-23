# Data Structures and Algorithms
After covering Big O Notation, we jumped into various topics.
## Divide and Conquer
- countZeros: Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array. Time Complexity: O(log N)
- sortedFrequency: Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array.  Time Complexity: O(log N)
- findRotatedIndex: Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function should return the index of num in the array. If the value is not found, return -1.
Time Complexity: O(log N)
- findRotationCount: Write a function called findRotationCount which accepts an array of distinct numbers sorted in increasing order. The array has been rotated counter-clockwise n number of times. Given such an array, find the value of n. Time Complexity: O(log N)
- findFloor: Write a function called findFloor which accepts a sorted array and a value x, and returns the floor of x in the array. The floor of x in an array is the largest element in the array which is smaller than or equal to x. If the floor does not exist, return -1. Time Complexity: O(log N)

## Linked List O(1)
Develop a class with linked list data structure within Javascript
- push(val): Appends a new node with value val to the tail. Returns undefined.
- unshift(val): Add a new node with value val to the head. Returns undefined.
- pop(): Remove & return tail value. Throws error if list is empty.
- shift(): Remove & return head value. Throws error if list is empty.
- getAt(idx): Retrieve value at index position idx. Throws error if index is invalid.
- setAt(idx, val): Set value of node at index position idx to val. Throws error if index is invalid.
- insertAt(idx, val): Insert a new node at position idx with value val. Throws error if index is invalid. Returns undefined.
- removeAt(idx): Remove & return value at position idx. Throws error if index is invalid.

## Queues
- Make a Queue class. It should include methods for enqueuing, dequeuing, peeking, and checking if the queue is empty.
- Make it throw an error if you try to dequeue from an empty queue.

## Stacks
- Make a Stack class. It should include methods for pushing, popping, peeking, and checking if the stack is empty.
- Make it throw an error if you try to pop from an empty stack.