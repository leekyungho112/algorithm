function solution(input) {
  // 특정 길이에 가장 가까운 2의 거듭제곱을 계산하는 함수
  function nearestPowerOfTwo(x) {
    let i = 1;
    while (2 ** i <= x) {
      i += 1;
    }
    return i - 1; // x보다 작은 최대 거듭제곱
  }

  // 입력 값 처리
  const [length, width, height] = input[0].split(" ").map(Number); // 박스 크기
  const n = Number(input[1]); // 큐브 종류 개수
  const cubes = Array(20).fill(0); // 큐브 개수를 저장할 배열

  // 큐브 정보를 배열에 저장 (크기별로 저장)
  for (let i = 2; i <= n + 1; i++) {
    const [size, count] = input[i].split(" ").map(Number);
    cubes[size] = count;
  }

  // 사용할 최대 큐브 크기를 계산 (박스 크기를 기준으로)
  let maxCubeSize = Math.min(
    nearestPowerOfTwo(length),
    nearestPowerOfTwo(width),
    nearestPowerOfTwo(height)
  );

  let totalCubesUsed = 0; // 사용한 큐브 총 개수
  let previousLayerUsed = 0; // 이전 레이어에서 사용한 큐브 개수

  // 큰 큐브부터 작은 큐브 순서로 처리
  for (let i = maxCubeSize; i >= 0; i--) {
    previousLayerUsed *= 8; // 이전 레이어에서 사용된 큐브의 8배 공간 처리

    const cubeSize = 2 ** i; // 현재 큐브의 한 변 크기
    const cubeVolumeFit =
      Math.floor(length / cubeSize) *
      Math.floor(width / cubeSize) *
      Math.floor(height / cubeSize); // 현재 큐브로 채울 수 있는 총 공간

    const cubesNeeded = cubeVolumeFit - previousLayerUsed; // 현재 레이어에서 필요한 큐브 개수
    const cubesUsed = Math.min(cubesNeeded, cubes[i]); // 실제 사용 가능한 큐브 개수

    totalCubesUsed += cubesUsed; // 총 사용한 큐브 개수 갱신
    previousLayerUsed += cubesUsed; // 현재 레이어에서 사용한 큐브 갱신
  }

  // 최종 결과 출력
  const boxVolume = length * width * height; // 박스 전체 부피
  const filledVolume = previousLayerUsed; // 채운 부피

  if (filledVolume === boxVolume) {
    console.log(totalCubesUsed); // 성공적으로 박스를 채운 경우
  } else {
    console.log(-1); // 박스를 채울 수 없는 경우
  }
}

module.exports = solution;
