let fs = require("fs");
let solution = require("./section1/1_15");
let input = fs.readFileSync("input.txt").toString().split("\n");

const result = solution(input);

// console.log(result);
