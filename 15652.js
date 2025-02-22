function solution(input) {
  const [n, m] = input[0].split(" ").map(Number);

  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  let selected = [];
  let answer = "";
  function dfs(arr, depth, start) {
    if (depth === m) {
      let result = [];
      for (let x of selected) result.push(arr[x]);
      for (let x of result) answer += x + " ";
      answer += "\n";
      return;
    }

    for (let i = start; i < arr.length; i++) {
      selected.push(i);
      dfs(arr, depth + 1, i);
      selected.pop();
    }
  }
  dfs(arr, 0, 0);
  console.log(answer);
}

module.exports = solution;
