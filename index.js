let fs = require("fs");
let solution = require("./section3/3_2");
let input = fs.readFileSync("input.txt").toString().split("\n");

const result = solution(input);

// console.log(result);
