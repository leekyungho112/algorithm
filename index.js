let fs = require("fs");
let solution = require("./section7/7_8");
let input = fs.readFileSync("input.txt").toString().split("\n");

const result = solution(input);

// console.log(result);
