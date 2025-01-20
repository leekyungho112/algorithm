function solution(input) {
  const t = Number(input[0]);

  let arr = [];
  let n = 0;
  for (let i = 1; i <= t; i++) {
    n = Number(input[i]);
    arr = [];
    for (let i = 1; i <= n; i++) {
      arr.push(i);
    }

    dfs([], 0);
    console.log();
  }
  function dfs(result, depth) {
    if (depth === n - 1) {
      let str = "";
      for (let i = 0; i < n - 1; i++) {
        str = str + arr[i] + result[i];
      }
      str += arr[n - 1] + "";
      current = eval(str.split(" ").join(""));
      if (current === 0) console.log(str);
      return;
    }

    for (let x of [" ", "+", "-"]) {
      result.push(x);
      dfs(result, depth + 1);
      result.pop();
    }
  }
}

module.exports = solution;
