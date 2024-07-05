// June 26, 2024

// runtime:  O(n) => traverse(): O(n), binarySearch(): O(n)
// space: O(n)

function balanceBST(root: TreeNode | null): TreeNode | null {
  const arr: number[] = [];
  traverse(arr, root!);
  return binarySearch(arr, 0, arr.length - 1);
}

function traverse(arr: number[], node: TreeNode): void {
  if (node.left) traverse(arr, node.left);
  arr.push(node.val);
  if (node.right) traverse(arr, node.right);
}

function binarySearch(
  arr: number[],
  left: number,
  right: number
): TreeNode | null {
  if (left > right) return null;
  const mid: number = left + Math.floor((right - left) / 2);
  const newNode: TreeNode = new TreeNode(arr[mid]);
  newNode.left = binarySearch(arr, left, mid - 1);
  newNode.right = binarySearch(arr, mid + 1, right);

  return newNode;
}
