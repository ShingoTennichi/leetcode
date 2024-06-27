// June 27, 2024

// n = houses.length, m = heaters.length
// runtime:  O(max(n log n, m log m)) => sort: O(max(n log n, m log m)), while loop: O(n + m)
// space: O(1)

// https://leetcode.com/problems/heaters/description/

function findRadius(houses: number[], heaters: number[]): number {
  houses.sort((a, b) => a - b);
  heaters.sort((a, b) => a - b);
  let radius: number = 0;
  let houseIdx: number = 0;
  let heaterIdx: number = 0;

  while (houseIdx < houses.length) {
    const currHouse: number = houses[houseIdx];
    const currHeater: number = heaters[heaterIdx];
    const nextHeater: number = heaters[heaterIdx + 1];

    if (nextHeater && currHouse > nextHeater) heaterIdx++;
    else {
      let distance: number = Math.abs(currHouse - currHeater);
      if (nextHeater) {
        distance = Math.min(distance, Math.abs(currHouse - nextHeater));
      }
      radius = Math.max(radius, distance);

      houseIdx++;
    }
  }

  return radius;
}
