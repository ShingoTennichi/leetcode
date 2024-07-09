// July 9, 2024

// runtime:  O(2^n) =>
//  dfs(): O(2^n)
// space: O(n*p)...where n = nums.length, t = number of patterns of index and total =>
//  dfs(): O(n*p)
//  map: O(n*p)

// https://leetcode.com/problems/target-sum/

function findTargetSumWays(nums: number[], target: number): number {
  const map: Map<string, number> = new Map();
  return dfs(nums, 0, 0, target, map);
}

function dfs(
  nums: number[],
  index: number,
  total: number,
  target: number,
  map: Map<string, number>
): number {
  const key: string = `${index}-${total}`;
  if (map.has(key)) return map.get(key)!;
  if (index === nums.length) return total === target ? 1 : 0;
  const count: number =
    dfs(nums, index + 1, total + nums[index], target, map) +
    dfs(nums, index + 1, total + nums[index] * -1, target, map);
  map.set(key, count);
  return count;
}
