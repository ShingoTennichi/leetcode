// July 9, 2024

// runtime: O(n) =>
//  for loop: O(n)
// space: O(1)

// https://leetcode.com/problems/average-waiting-time/description/

function averageWaitingTime(customers: number[][]): number {
  let prev: number = 0;
  let total: number = 0;

  for (let i = 0; i < customers.length; i++) {
    const [arrival, time]: number[] = customers[i];
    total += time;
    if (prev > arrival) {
      total += prev - arrival;
      prev = prev + time;
    } else {
      prev = arrival + time;
    }
  }

  return total / customers.length;
}
