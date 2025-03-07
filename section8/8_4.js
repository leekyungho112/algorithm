function solution(input) {
  const n = Number(input[0]);
  let check = Array(n + 1).fill(0);
  let answer = [];
  function DFS(v) {
    console.log("check", check);
    if (v === n + 1) {
      let tmp = "";
      for (let i = 1; i <= n; i++) {
        if (check[i] === 1) tmp += i + " ";
      }
      if (tmp.length > 0) answer.push(tmp);
    } else {
      check[v] = 1;
      DFS(v + 1);
      check[v] = 0;
      DFS(v + 1);
    }
  }

  DFS(1);
  console.log(answer);
}

module.exports = solution;
