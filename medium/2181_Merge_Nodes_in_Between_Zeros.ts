// July 4, 2024

// runtime:  O(n) =>
//  while loop: O(n)
// space: => O(1)

// https://leetcode.com/problems/merge-nodes-in-between-zeros/description/

import { ListNode } from "./0.leetcode_classes";
function mergeNodes(head: ListNode): ListNode | null {
  let curr: ListNode = head;
  let temp: ListNode | null = curr.next;
  let sum: number = 0;
  while (temp !== null) {
    sum += temp.val;
    if (temp.val === 0) {
      curr.next = temp;
      curr = curr.next;
      curr.val = sum;
      sum = 0;
    }
    temp = temp.next;
  }
  return head.next;
}
