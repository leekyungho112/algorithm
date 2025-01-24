function solution(input) {
  let arr = [];
  let selected = [];
  let answer = "";

  for (let i = 0; i < input.length; i++) {
    let data = input[i].split(" ").map(Number);
    if (data[0] === 0) break;
    else {
      arr = data.slice(1);
      answer = "";
      dfs(0, 0);
    }
    console.log(answer);
  }

  function dfs(depth, start) {
    if (depth === 6) {
      let result = [];
      for (let i of selected) {
        result.push(arr[i]);
      }

      for (let x of result) {
        answer += x + " ";
      }
      answer += "\n";
      return;
    }
    for (let i = start; i < arr.length; i++) {
      selected.push(i);
      dfs(depth + 1, i + 1);
      selected.pop();
    }
  }
}

module.exports = solution;
