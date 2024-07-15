// July 15, 2024

// runtime: O(n)... n = depth of tree =>
//  the first for loop: O(n)
//  the second for loop: O(n)

// space: O(n) =>
//  adjacent: O(n)
//  nodes: O(n)


// https://leetcode.com/problems/create-binary-tree-from-descriptions/description/

import { TreeNode } from "./0.leetcode_classes";
function createBinaryTree(descriptions: number[][]): TreeNode | null {
  const adjacent: Map<number, TreeNode> = new Map();
  for (const [parent, child, isLeft] of descriptions) {
    if (!adjacent.has(parent)) adjacent.set(parent, new TreeNode(parent));
    if (!adjacent.has(child)) adjacent.set(child, new TreeNode(child));

    if (isLeft) adjacent.get(parent)!.left = adjacent.get(child)!;
    else adjacent.get(parent)!.right = adjacent.get(child)!;
  }

  const nodes: TreeNode[] = [...adjacent.values()];
  for (const node of nodes) {
    if (node.left) adjacent.delete(node.left.val);
    if (node.right) adjacent.delete(node.right.val);
  }

  return adjacent.values().next().value;
}
