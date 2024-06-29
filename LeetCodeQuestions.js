//*******************************************
// execute this file to get a random question
//*******************************************

const Questions = {
  "Arrays & Hashing": [
    "https://leetcode.com/problems/contains-duplicate/",
    "https://leetcode.com/problems/valid-anagram/",
    "https://leetcode.com/problems/two-sum/",
    "https://leetcode.com/problems/group-anagrams/",
    "https://leetcode.com/problems/longest-consecutive-sequence/",
    "https://leetcode.com/problems/encode-and-decode-strings/",
    "https://leetcode.com/problems/valid-sudoku/",
    "https://leetcode.com/problems/product-of-array-except-self/",
    "https://leetcode.com/problems/top-k-frequent-elements/"
  ],
  "Sliding Window": [
    "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
    "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    "https://leetcode.com/problems/longest-repeating-character-replacement/",
    "https://leetcode.com/problems/permutation-in-string/"
  ],
  "Linked List": [
    "https://leetcode.com/problems/reverse-linked-list/",
    "https://leetcode.com/problems/merge-two-sorted-lists/",
    "https://leetcode.com/problems/reorder-list/",
    "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
    "https://leetcode.com/problems/copy-list-with-random-pointer/",
    "https://leetcode.com/problems/add-two-numbers/",
    "https://leetcode.com/problems/linked-list-cycle/",
    "https://leetcode.com/problems/find-the-duplicate-number/",
    "https://leetcode.com/problems/lru-cache/"
  ],
  "Trees": [
    "https://leetcode.com/problems/invert-binary-tree/",
    "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
    "https://leetcode.com/problems/diameter-of-binary-tree/",
    "https://leetcode.com/problems/balanced-binary-tree/",
    "https://leetcode.com/problems/same-tree/",
    "https://leetcode.com/problems/subtree-of-another-tree/",
    "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
    "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    "https://leetcode.com/problems/binary-tree-right-side-view/",
    "https://leetcode.com/problems/count-good-nodes-in-binary-tree/",
    "https://leetcode.com/problems/validate-binary-search-tree/",
    "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
    "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/"
  ],
  "Tries": [
    "https://leetcode.com/problems/implement-trie-prefix-tree/",
    "https://leetcode.com/problems/design-add-and-search-words-data-structure/"
  ],
  "Backtracking": [
    "https://leetcode.com/problems/subsets/",
    "https://leetcode.com/problems/combination-sum/",
    "https://leetcode.com/problems/permutations/",
    "https://leetcode.com/problems/subsets-ii/",
    "https://leetcode.com/problems/combination-sum-ii/",
    "https://leetcode.com/problems/word-search/",
    "https://leetcode.com/problems/palindrome-partitioning/",
    "https://leetcode.com/problems/letter-combinations-of-a-phone-number/"
  ],
  "Heap / Priority Queue": [
    "https://leetcode.com/problems/kth-largest-element-in-a-stream/",
    "https://leetcode.com/problems/last-stone-weight/",
    "https://leetcode.com/problems/k-closest-points-to-origin/",
    "https://leetcode.com/problems/kth-largest-element-in-an-array/",
    "https://leetcode.com/problems/task-scheduler/",
    "https://leetcode.com/problems/design-twitter/"
  ],
  "Intervals": [
    "https://leetcode.com/problems/insert-interval/",
    "https://leetcode.com/problems/merge-intervals/",
    "https://leetcode.com/problems/non-overlapping-intervals/",
    "https://leetcode.com/problems/meeting-rooms/",
    "https://leetcode.com/problems/meeting-rooms-ii/"
  ],
  "Greedy": [
    "https://leetcode.com/problems/maximum-subarray/",
    "https://leetcode.com/problems/jump-game/",
    "https://leetcode.com/problems/jump-game-ii/",
    "https://leetcode.com/problems/gas-station/",
    "https://leetcode.com/problems/hand-of-straights/",
    "https://leetcode.com/problems/partition-labels/",
    "https://leetcode.com/problems/valid-parenthesis-string/"
  ],
  "1-D Dynamic Programming": [
    "https://leetcode.com/problems/climbing-stairs/",
    "https://leetcode.com/problems/min-cost-climbing-stairs/",
    "https://leetcode.com/problems/house-robber/",
    "https://leetcode.com/problems/house-robber-ii/",
    "https://leetcode.com/problems/longest-palindromic-substring/",
    "https://leetcode.com/problems/palindromic-substrings/",
    "https://leetcode.com/problems/decode-ways/",
    "https://leetcode.com/problems/coin-change/",
    "https://leetcode.com/problems/maximum-product-subarray/",
    "https://leetcode.com/problems/word-break/",
    "https://leetcode.com/problems/longest-increasing-subsequence/",
    "https://leetcode.com/problems/partition-equal-subset-sum/"
  ],
  "2-D Dynamic Programming": [
    "https://leetcode.com/problems/unique-paths/",
    "https://leetcode.com/problems/longest-common-subsequence/",
    "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/"
  ],
  "Bit Manipulation": [
    "https://leetcode.com/problems/single-number/",
    "https://leetcode.com/problems/number-of-1-bits/"
  ],
  "Graphs": [
    "https://leetcode.com/problems/number-of-islands/",
    "https://leetcode.com/problems/clone-graph/",
    "https://leetcode.com/problems/max-area-of-island/",
    "https://leetcode.com/problems/rotting-oranges/",
    "https://leetcode.com/problems/walls-and-gates/",
    "https://leetcode.com/problems/course-schedule-ii/",
    "https://leetcode.com/problems/course-schedule/",
    "https://leetcode.com/problems/pacific-atlantic-water-flow/",
    "https://leetcode.com/problems/surrounded-regions/",
    "https://leetcode.com/problems/redundant-connection/",
    "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
    "https://leetcode.com/problems/graph-valid-tree/"
  ],
  "Two Pointers": [
    "https://leetcode.com/problems/container-with-most-water/",
    "https://leetcode.com/problems/3sum/",
    "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
    "https://leetcode.com/problems/valid-palindrome/",
    "https://leetcode.com/problems/trapping-rain-water/"
  ],
  "Stack": [
    "https://leetcode.com/problems/valid-parentheses/",
    "https://leetcode.com/problems/min-stack/",
    "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
    "https://leetcode.com/problems/generate-parentheses/",
    "https://leetcode.com/problems/daily-temperatures/",
    "https://leetcode.com/problems/car-fleet/",
    "https://leetcode.com/problems/largest-rectangle-in-histogram/"
  ],
  "Binary Search": [
    "https://leetcode.com/problems/binary-search/",
    "https://leetcode.com/problems/search-a-2d-matrix/",
    "https://leetcode.com/problems/koko-eating-bananas/",
    "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/"
  ]
}

const QuestionArray = Object.values(Questions).flat();
console.log(QuestionArray[getRandomIndex(0, QuestionArray.length)]);

function getRandomIndex(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}