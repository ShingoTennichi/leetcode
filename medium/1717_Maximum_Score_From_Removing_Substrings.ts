// July 12, 2024

// runtime: O(n)... n = s.length =>
//  operate(): O(n)
//    for loop: O(n)

// space: O(n) =>
//  stack: O(n)

// https://leetcode.com/problems/maximum-score-from-removing-substrings/description/

type OperationPriority = [string, number, string, number];
type Operate = {
  updatedStr: string;
  score: number;
};

function maximumGain(s: string, x: number, y: number): number {
  const [operation1, higherScore, operation2, lowerScore]: OperationPriority =
    x > y ? ["ab", x, "ba", y] : ["ba", y, "ab", x];

  const { updatedStr: updatedStr1, score: score1 } = operate(s, operation1, higherScore);
  const { score: score2 } = operate(updatedStr1, operation2, lowerScore);

  return score1 + score2;
}

function operate(s: string, operation: string, points: number): Operate {
  let score: number = 0;
  let stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (stack.length && stack[stack.length - 1] + s[i] === operation) {
      stack.pop();
      score += points;
    } else {
      stack.push(s[i]);
    }
  }

  return {
    updatedStr: stack.join(""),
    score: score,
  };
}
