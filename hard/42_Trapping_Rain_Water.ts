// July 6, 2024

// runtime: O(n) =>
//  each for loop: O(n)
//  reduce(): O(n)
// space: => O(n)
//  trap: O(n)
//  reduce(): O(1)

// https://leetcode.com/problems/trapping-rain-water/

function trap(height: number[]): number {
  const trap = new Array(height.length);
  let maxHeightIndex = 0;
  for (let i = 0; i < height.length; i++) {
    if (height[maxHeightIndex] <= height[i]) maxHeightIndex = i;
    trap[i] = height[maxHeightIndex] - height[i];
  }

  let tempMaxHeightIndex = height.length - 1;
  for (let i = height.length - 1; i > maxHeightIndex; i--) {
    if (height[tempMaxHeightIndex] <= height[i]) tempMaxHeightIndex = i;
    trap[i] = height[tempMaxHeightIndex] - height[i];
  }

  return trap.reduce((a, b) => a + b);
}
