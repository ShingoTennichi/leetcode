// July 5, 2024

// runtime:  O(n) =>
//  while loop: O(n)
// space: => O(1)
//  stack: O(1): max length of the stack is 2
//  queue: O(1): max length of the queue is 2

// https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/description/

function nodesBetweenCriticalPoints(head: ListNode | null): number[] {
  let index: number = 0;
  let curr: ListNode | null = head;
  let prev: ListNode | null = null;
  let prevprev: ListNode | null = null;

  let min: number = Infinity;
  let max: number = -Infinity;
  const stack: number[] = [];
  const queue: number[] = [];

  while (curr !== null) {
    if (isMaximaOrMinima(curr, prev, prevprev)) {
      updateDistance(index, stack, queue);
      if (stack.length === 2) {
        min = Math.min(min, queue[1] - queue[0]);
        max = Math.max(max, stack[1] - stack[0]);
      }
    }
    prevprev = prev;
    prev = curr;
    curr = curr.next;
    index++;
  }

  if (index < 2 || stack.length < 2) return [-1, -1];
  return [min, max];
}

function isMaximaOrMinima(
  curr: ListNode | null,
  prev: ListNode | null,
  prevprev: ListNode | null
) {
  if (!prevprev || !prev) return false;
  return (
    (prev.val > curr!.val && prev.val > prevprev.val) ||
    (prev.val < curr!.val && prev.val < prevprev.val)
  );
}

function updateDistance(index: number, stack: number[], queue: number[]) {
  if (stack.length === 2) stack.pop();
  stack.push(index - 1);
  if (queue.length === 2) queue.shift();
  queue.push(index - 1);
}
