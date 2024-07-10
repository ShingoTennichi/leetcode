// July 10, 2024

// runtime: O(m*n) =>
//  canMake(): O(m*n)

// space: O(m*n) =>
//  canMake(): O(m*n)
//  map: O(m*n)

// https://leetcode.com/problems/interleaving-string/description/

function isInterleave(s1: string, s2: string, s3: string): boolean {
  if (s1.length + s2.length !== s3.length) return false;
  const map: Map<string, boolean> = new Map();
  return canMake(s1, s2, s3, 0, 0, 0, map);
}

function canMake(
  s1: string,
  s2: string,
  s3: string,
  idx1: number,
  idx2: number,
  idx3: number,
  map: Map<string, boolean>
): boolean {
  if (s3.length === idx3) return true;
  const key: string = `${idx1}-${idx2}`;
  if (map.has(key)) return map.get(key)!;
  const res1: boolean =
    s1[idx1] === s3[idx3]
      ? canMake(s1, s2, s3, idx1 + 1, idx2, idx3 + 1, map)
      : false;
  const res2: boolean =
    s2[idx2] === s3[idx3]
      ? canMake(s1, s2, s3, idx1, idx2 + 1, idx3 + 1, map)
      : false;
  map.set(key, res1 || res2);
  return res1 || res2;
}
