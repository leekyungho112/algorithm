let fs = require("fs");
let solution = require("./section8/8_14");
let input = fs.readFileSync("input.txt").toString().split("\n");

const result = solution(input);

// console.log(result);
