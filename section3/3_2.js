function solution(input) {
  const str = input[0].toLowerCase().replace(/[^a-z0-9]/g, "");

  let answer = "YES";
  let len = str.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (str[i] !== str[len - i - 1]) {
      answer = "NO";
    }
  }
  console.log(answer);
}

module.exports = solution;
