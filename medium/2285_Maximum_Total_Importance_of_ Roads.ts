// June 28, 2024

// runtime: O(n^2) =>
//  sort(): O(n log n)
//  the first for loop: O(n^2) ... The roads can be length of n^2 when all cities are connected
//  the second for loop: O(n)
// space: O(n) =>
//  arr: O(n)
//  sort(): O(log n)

// https://leetcode.com/problems/maximum-total-importance-of-roads/description/

function maximumImportance(n: number, roads: number[][]): number {
  const arr: number[] = new Array(n + 1).fill(0);
  let maxImportance: number = 0;

  for (const [city1, city2] of roads) {
    arr[city1]++;
    arr[city2]++;
  }

  arr.sort((a, b) => a - b);
  for (let i = n; i > 0; i--) {
    maxImportance += i * arr[i];
  }

  return maxImportance;
}
