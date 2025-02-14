function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (let [key, value] of map1) {
    if (!map2.has(key)) return false;
    if (map2.get(key) !== value) {
      return false;
    }
  }

  return true;
}
function solution(input) {
  let s = input[0];
  let t = input[1];
  let answer = 0;
  let sh = new Map();
  let sh2 = new Map();
  let left = 0;
  for (let x of t) {
    if (sh.has(x)) {
      sh.set(x, sh.get(x) + 1);
    } else {
      sh.set(x, 1);
    }
  }

  for (let i = 0; i < t.length - 1; i++) {
    if (sh2.has(s[i])) {
      sh2.set(s[i], sh2.get(s[i]) + 1);
    } else {
      sh2.set(s[i], 1);
    }
  }

  for (let right = t.length - 1; right < s.length; right++) {
    if (sh2.has(s[right])) {
      sh2.set(s[right], sh2.get(s[right]) + 1);
    } else {
      sh2.set(s[right], 1);
    }

    if (compareMaps(sh2, sh)) answer++;
    sh2.set(s[left], sh2.get(s[left]) - 1);
    if (sh2.get(s[left]) === 0) {
      sh2.delete(s[left]);
    }

    left++;
  }

  console.log(answer);
}

module.exports = solution;
