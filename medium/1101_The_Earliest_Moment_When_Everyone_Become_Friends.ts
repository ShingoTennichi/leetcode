// July 10, 2024

// m = logs.length, n = number of people
// runtime: O(Max(mn, m log m)) =>
//  sort(): O(m log m)
//  the first for loop: O(n)
//  the second for loop: O(mn)
//    the for loop itself: O(m)
//    the for loop inside the second for loop: O(n)
// space: O(n) =>
//  friends: O(n)

// https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends/description/

function earliestAcq(logs: number[][], n: number): number {
  const friends: Map<number, Set<number>> = new Map();
  logs.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < n; i++) friends.set(i, new Set([i]));

  for (let i = 0; i < logs.length; i++) {
    const [time, x, y] = logs[i];
    const acquainted: Set<number> = new Set([
      ...friends.get(x)!,
      ...friends.get(y)!,
    ]);
    if (acquainted.size === n) return time;
    for (const person of acquainted) {
      friends.set(person, acquainted);
    }
  }

  return -1;
}
