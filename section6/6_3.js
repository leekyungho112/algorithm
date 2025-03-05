function solution(input) {
  let board = JSON.parse(input[0]);
  let moves = JSON.parse(input[1]);
  let answer = 0;

  let stack = [];

  moves.forEach((pos) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][pos - 1] !== 0) {
        let doll = board[i][pos - 1];
        board[i][pos - 1] = 0;

        if (doll === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else {
          stack.push(doll);
        }
        break;
      }
    }
  });
  // let lines = [...Array(board[0].length)].map(() => []);
  // let answer = 0;
  // for (let i = board.length - 1; i >= 0; i--) {
  //   for (let j = 0; j < board[0].length; j++) {
  //     if (board[i][j]) {
  //       lines[j].push(board[i][j]);
  //     }
  //   }
  // }
  // for (let m of moves) {
  //   if (lines[m - 1].length > 0) {
  //     let doll = lines[m - 1].pop();

  //     if (stack.length > 0 && stack[stack.length - 1] === m) {
  //       stack.pop();
  //       answer += 2;
  //     } else {
  //       stack.push(doll);
  //     }
  //   }
  // }
  console.log(answer);
}

module.exports = solution;
