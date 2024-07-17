// July 17, 2024

// runtime: O(n) =>
//  while loop: O(n)

// space: O(n) =>
//  forest: O(n)
//  queue: O(n)

// https://leetcode.com/problems/delete-nodes-and-return-forest/description/

import { TreeNode } from "./0.leetcode_classes";
function delNodes(root: TreeNode | null, to_delete: number[]): Array<TreeNode | null> {
  const queue: (TreeNode | null)[] = [root];
  const forest: (TreeNode | null)[] = [];
  const toDeleteSet: Set<number> = new Set(to_delete);
  while (queue.length) {
    const node: TreeNode | null| undefined = queue.shift();
    if (node && toDeleteSet.has(node.val)) {
      queue.push(node.left);
      queue.push(node.right);
    } else if (node) {
      dfs(node, queue, toDeleteSet);
      forest.push(node);
    }
  }

  return forest;
};

function dfs(node: TreeNode | null, queue: (TreeNode | null)[], toDeleteSet: Set<number>) {
  if (!node) return;
  if (node.left && toDeleteSet.has(node.left.val)) {
    queue.push(node.left.left);
    queue.push(node.left.right);
    node.left = null;
  } else {
    dfs(node.left, queue, toDeleteSet);
  }
  if (node.right && toDeleteSet.has(node.right.val)) {
    queue.push(node.right.left);
    queue.push(node.right.right);
    node.right = null;
  } else {
    dfs(node.right, queue, toDeleteSet);
  }
}

