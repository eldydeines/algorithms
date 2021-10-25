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

## Recursion
- Product of Nums: Write a function that finds the product of an array of numbers: product([2, 3, 4])   // 24
- Longest Word: Given a list of words, return the length of the longest: longest(["hello", "hi", "hola"])  // 5
- Every Other Character: Write a function that returns a string of every other character: everyOther("hello")  // "hlo"
- Is Palindrome?: Write a function that returns true/false depending on whether passed-in string is a palindrome: 
    -  isPalindrome("tacocat")  // true
    -  isPalindrome("tacodog")  // false
- Find Index: Given an array and a string, return the index of that string in the array (or -1 if not present): let animals = ["duck", "cat", "pony"];
    - findIndex(animals, "cat");  // 1
    - findIndex(animals, "porcupine");   // -1
- Reverse String: Return a copy of a string, reversed: revString("porcupine") // 'enipucrop'
- Gather Strings: Given an object, return an array of all the values in the object that are strings.
- Binary Search: Given an array (not a linked list!) of sorted numbers and a value, return the index of that value. If not found, return -1. This algorithm should run in O(log(N)) time (where N is the number of elements in the array):

## Trees
- sumValues: Given a n-ary tree of integers, return the sum of all the integers.
- countEvens: Given a n-ary tree of integers, return the count of all the even integers.
- numGreater: Given a n-ary tree and a number x, find and return the number of nodes which are greater than x.
- Binary Trees: Here are descriptions of the methods you should write for BinaryTree:
- minDepth: Given a binary tree, find its minimum depth. The minimum depth is the number of nodes along the shortest path from root node down to the nearest leaf node.
- maxDepth: Given a binary tree, find its maximum depth. The maximum depth is the number of nodes along the longest path from root node down to the nearest leaf node.
- maxSum: Given a binary tree, find the maximum path sum. The path may start and end at any node in the tree, but no node can be visited more than once.
- nextLarger: Given a binary tree and a integer x. Find and return the value of the node with next larger element in the tree i.e. find a node with value just greater than x. Return null if no node is present with value greater than x.

## Binary Search Trees
- insert: This function should insert a node in a binary tree. It should return the BinarySearchTree and should be solved using iteration.
- insertRecursively: This function should insert a node in a binary tree. It should return the BinarySearchTree and should be solved using recursion.
- find: This function should find a node in a binary tree. It should return the node if found, otherwise return undefined. This should be solved using iteration.
- findRecursively: This function should find a node in a binary tree. It should return the node if found, otherwise return undefined. This should be solved using recursion.
- dfsPreOrder: This function should search through each node in the binary search tree using pre-order depth first search and return an array containing each node’s value.
- dfsInOrder: This function should search through each node in the binary search tree using in-order depth first search and return an array containing each node’s value.
- dfsPostOrder: This function should search through each node in the binary search tree using post-order depth first search and return an array containing each node’s value.
- bfs: This function should search through each node in the binary search tree using breadth first search and return an array containing each node’s value.

## Graphs
- addVertex/addVertices: This function should add a node to the graph.
- addEdge: This function should add an edge between two nodes in the graph and place each value of the nodes in each array for the value of the node in the adjacency list.
- removeEdge: This function should accept two nodes and remove the edge between them. It should modify the adjacency list to ensure that both values are not in each array for the two nodes which no longer contain the edge.
- removeVertex: This function should remove the node in the array of nodes and also remove all edges that the removed node previously contained.
- depthFirstSearch: This function should return an array of nodes visited using DFS. You can do this iteratively (using a stack) or recursively, but note the order of the results will be different.
- breadthFirstSearch: This function should return an array of vertices visited using BFS.