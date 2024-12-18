const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function test(arr) {
  const object = {};

  for (let element of arr) {
    // console.log(element);
    object[element] = element;
  }
  console.log(object);
}

test(nums);
