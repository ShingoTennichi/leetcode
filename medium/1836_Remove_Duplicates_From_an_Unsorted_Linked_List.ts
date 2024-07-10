// July 10, 2024

// runtime: O(n) =>
//  the first while loop: O(n)
//  the second while loop: O(n)
// space: O(n) =>
//  dummy: O(1)
//  duplicated: O(n)

// https://leetcode.com/problems/maximum-total-importance-of-roads/description/

import { ListNode } from "./0.leetcode_classes";
function deleteDuplicatesUnsorted(head: ListNode | null): ListNode | null {
  const dummy: ListNode | null = new ListNode(0, head);
  const duplicated: Map<number, boolean> = new Map();
  let temp: ListNode | null = head;
  while (temp) {
    if (duplicated.has(temp.val)) duplicated.set(temp.val, true);
    else duplicated.set(temp.val, false);
    temp = temp.next;
  }

  let prev: ListNode | null = dummy;
  temp = head;
  while (temp) {
    if (duplicated.get(temp.val)) prev.next = temp.next;
    else prev = temp;
    temp = temp.next;
  }
  return dummy.next;
}
