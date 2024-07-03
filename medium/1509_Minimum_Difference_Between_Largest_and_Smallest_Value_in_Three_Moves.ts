// July 3, 2024

// runtime:  O(n log n) =>
//  sort(): O(n log n)
//  while loop: O(1) ... 4 times
// space: => O(1)

function minDifference(nums: number[]): number {
  if (nums.length <= 4) return 0;
  nums.sort((a, b) => a - b);
  let min = Infinity;
  let l = 0;
  let r = nums.length - 4;
  while (r < nums.length && l < r) {
    min = Math.min(min, nums[r] - nums[l]);
    l++;
    r++;
  }

  return min;
}
