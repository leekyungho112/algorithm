function solution(input) {
  let [n, m] = input[0].split(" ").map(Number);
  let arr = input[1].split(" ").map(Number);

  let lt = Math.max(...arr);
  let rt = arr.reduce((acc, cur) => acc + cur, 0);
  console.log(lt, rt);
}

module.exports = solution;
