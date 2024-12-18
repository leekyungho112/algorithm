function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      // 인덱스 j 부터 1까지 1씩 감소하며 반복
      if (arr[j] < arr[j - 1]) {
        // 한칸씩 왼쪽으로 이동
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else {
        break;
      }
    }
  }
}
