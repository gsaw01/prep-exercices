/**
 * Credit to https://adventofcode.com/ for this exercise

In the list below you have an array of numbers. The goal is to find the three numbers that add up to 2020.

Once you have found those numbers, multiply the numbers and store the result of that in the result variable.
 */


const list = [1721, 979, 366, 299, 675, 1456];
let result;
let target = 2020;

list.sort((a, b) => a - b);

for (let current = 0; current < list.length - 2; current++) {
      let leftPointer = current + 1;
      let rightPointer = list.length - 1;
  
      while (leftPointer < rightPointer) {
          let sum = list[current] + list[leftPointer] + list[rightPointer];
          if (sum === target) {
              result = list[current] * list[leftPointer] * list[rightPointer];
              break;
          } else if (sum < target) {
              leftPointer++;
          } else {
              rightPointer--;
          }
      }
      if (result) break;
}
  
console.log(`Result is ${result}`);

// TEST CODE, do not change
console.assert(result === 241861950, `The result is not correct, it is ${result}, but should be 241861950`);