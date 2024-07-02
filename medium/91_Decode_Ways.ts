// July 2, 2024

// runtime:  O(n) =>
//  dfs(): O(n)
// space: =>
//  map: O(n)
//  dfs(): O(n)

function numDecodings(s: string): number {
  const map: Map<number, number> = new Map();
  map.set(s.length, 1);
  map.set(s.length - 1, 1);

  return dfs(s, 0, map);
}

function dfs(s: string, index: number, map: Map<number, number>): number {
  if (s[index] === "0") return 0;
  if (map.has(index)) return map.get(index) as number;

  let count: number = dfs(s, index + 1, map);
  count += s.substring(index, index + 2) <= "26" ? dfs(s, index + 2, map) : 0;

  map.set(index, count);
  return count;
}
