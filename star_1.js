function startOne(input) {
  let n = Number(input[0]);
  let star = '';
  //   for (let i = 0; i < n; i++) {
  //     for (let j = 0; j <= i; j++) {
  //       star += '*';
  //     }
  //     star += '\n';
  //   }

  for (let i = 0; i < n; i++) {
    for (let j = n; j > i; j--) {
      star += '*';
    }
    star += '\n';
  }
  return star;
}

module.exports = startOne;
