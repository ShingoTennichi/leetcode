// July 4, 2024

// runtime:  O(n) =>
//  while loop: O(n)
// space: => O(1)

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

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
