// July 5, 2024

//n = number of nodes, m = number of neighbors
// ***O(n*m) is incorrect because once an edge is visited, it will be cached and it takes O(1) next time visited which means each edge is checked only once***
// runtime:  O(n+m) =>
//  dfs(): O(n+m)
//  for loop in dfs(): O(m)
// space: => O(n)
//  dfs(): O(n)... max recursion call is n times
//  visited: O(n)

// https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/description/

import { Node } from "./0.leetcode_classes";
function cloneGraph(node: Node | null): Node | null {
  if (!node) return null;
  const visited: Map<number, Node> = new Map();
  return dfs(node, visited);
}

function dfs(node: Node, visited: Map<number, Node>): Node {
  if (visited.has(node.val)) return visited.get(node.val)!;

  const newNode = new Node(node.val);
  visited.set(node.val, newNode);

  for (const neighbor of node.neighbors) {
    const newNeighbor = dfs(neighbor, visited);
    newNode.neighbors.push(newNeighbor);
  }

  return newNode;
}
