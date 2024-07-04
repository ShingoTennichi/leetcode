// July 4, 2024

// runtime:  O(n) =>
//  for loop: O(n)
//  map(): O(n)
//  indexOf(): O(n)
// space: => O(1) ** answer array is not included in the space complexity **

// https://leetcode.com/problems/product-of-array-except-self/

function productExceptSelf(nums: number[]): number[] {
  let zeros: number = 0;
  let product: number = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) zeros++;
    else product *= nums[i];
  }
  const answer: number[] = new Array(nums.length).fill(0);
  if (zeros > 1) return answer;
  if (zeros === 0) return nums.map((num) => product / num);
  answer[nums.indexOf(0)] = product;
  return answer;
}
