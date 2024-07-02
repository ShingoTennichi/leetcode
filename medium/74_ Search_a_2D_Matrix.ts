// July 2, 2024

// runtime:  O(log nm) = O(log n + log m)  =>
//  findRow(): O(log n)
//  binarySearch(): O(log m)
// space: => O(1)

function searchMatrix(matrix: number[][], target: number): boolean {
  const row = findRow(matrix, 0, matrix.length-1, target);
  return binarySearch(matrix[row], target);
};

function findRow(matrix, l, r, target) {
  while(l < r) {
    const mid = l + Math.floor((r-l)/2);
    const lastNum = matrix[mid][matrix[mid].length-1];
    if(lastNum < target) l = mid+1;
    else r = mid;
  }

  return l
}

function binarySearch(arr, target) {
  let l = 0;
  let r = arr.length-1;
  while(l <= r) {
    const mid = l + Math.floor((r-l)/2);
    if(arr[mid] === target) return true;
    if(arr[mid] < target) l = mid+1;
    else r = mid-1;
  }
  return false;
};