// June 26, 2024

// runtime:  O(log n) => findLeftMost(): O(log n), findRightMost(): O(log n)
// space: O(1)

function searchRange(nums: number[], target: number): number[] {
  const leftMost: number = findLeftMost(nums, target, 0, nums.length - 1);
  if (nums[leftMost] !== target) return [-1, -1];
  if (nums[leftMost + 1] !== target) return [leftMost, leftMost];
  const rightMost: number = findRightMost(
    nums,
    target,
    leftMost + 1,
    nums.length - 1
  );
  return [leftMost, rightMost];
}

function findLeftMost(
  nums: number[],
  target: number,
  left: number,
  right: number
): number {
  while (left < right) {
    const mid: number = left + Math.floor((right - left) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

function findRightMost(
  nums: number[],
  target: number,
  left: number,
  right: number
) {
  let temp: number = left;
  while (left < right) {
    const mid: number = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) temp = mid;
    if (nums[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[left] === target ? left : temp;
}
