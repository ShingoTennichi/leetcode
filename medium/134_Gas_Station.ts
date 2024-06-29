// June 29, 2024

// runtime: O(n) =>
//  both reduce(): O(n)
//  for loop: O(n)

// space: O(1) =>
//  reduce(): O(1)

// https://leetcode.com/problems/gas-station/description/

function canCompleteCircuit(gas: number[], cost: number[]): number {
  const sumOfGas = gas.reduce((a, b) => a + b);
  const sumOfCost = cost.reduce((a, b) => a + b);
  if (sumOfGas < sumOfCost) return -1;

  let total = 0;
  let result = 0;

  for (let index = 0; index < gas.length; index++) {
    total += gas[index] - cost[index];
    if (total < 0) {
      total = 0;
      result = index + 1;
    }
  }
  return result;
}
