/**
 * Credit to https://adventofcode.com/ for this exercise

In the list below you have an array of numbers. The goal is to find the two numbers that add up to 2020.

Once you have found those numbers, multiply the numbers and store the result of that in the result variable.
 */


const list = [1721, 979, 366, 299, 675, 1456];

let result;
let target = 2020;

list.sort((a, b) => a - b);

let leftPointer = 0;
let rightPointer = list.length - 1;

while (leftPointer < rightPointer) {
      let sum = list[leftPointer] + list[rightPointer];
      if (sum === target) {
            result = list[leftPointer] * list[rightPointer];
      } else if (sum > target) {
            leftPointer++;
      } else {
            rightPointer--;
      }
      if (result) break;
}

console.log(result);
console.assert(result === 514579, `The result is not correct, it is ${result}, but should be 514579`);