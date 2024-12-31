function solution(input) {
  const N = Number(input[0]);
  const arr = input[1].split(" ").map(Number);
  const set = Array.from(new Set(arr)).sort((a, b) => a - b);

  let map = new Map();
  for (let i = 0; i < set.length; i++) {
    map.set(set[i], i);
  }
  let answer = "";
  for (x of arr) {
    answer += map.get(x) + " ";
  }
  console.log(answer);
}

module.exports = solution;
