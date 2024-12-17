function solution(input) {
  const N = input[0].trim().split(' ');
  if (N[0] === '') {
    console.log(0);
  } else {
    console.log(N.length);
  }
}

module.exports = solution;
