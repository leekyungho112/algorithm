function solution(input) {
  const N = Number(input[0]);
  let groupWordCount = 0;

  for (let i = 1; i <= N; i++) {
    const word = input[i];
    const usedChars = new Set(); // 이미 사용된 문자들을 저장
    let isGroupWord = true;

    for (let j = 0; j < word.length; j++) {
      // 현재 문자가 이전 문자와 다른 경우
      if (j > 0 && word[j] !== word[j - 1]) {
        // 현재 문자가 이전에 사용된 적이 있다면

        if (usedChars.has(word[j])) {
          isGroupWord = false; // 그룹 단어가 아님
          break;
        }
      }
      // 현재 문자를 사용된 문자 목록에 추가
      usedChars.add(word[j]);
    }
    if (isGroupWord) {
      groupWordCount++;
    }
  }

  console.log(groupWordCount);
}

module.exports = solution;
