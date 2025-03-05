let fs = require("fs");
let solution = require("./section6/6_3");
let input = fs.readFileSync("input.txt").toString().split("\n");

const result = solution(input);

// console.log(result);
