// July 6, 2024

// runtime: O(n) =>
//  while for loop: O(n)
// space: => O(1)

// https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/

import { ListNode } from "./0.leetcode_classes";

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let dummy: ListNode | null = new ListNode(0, head);
  let temp: ListNode | null = dummy;
  let curr: ListNode | null = head;
  while (curr) {
    if (n <= 0) temp = temp.next!;
    curr = curr.next;
    n--;
  }
  temp.next = temp.next!.next;

  return dummy.next;
}
