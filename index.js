let fs = require("fs");
let solution = require("./section4/4_5");
let input = fs.readFileSync("input.txt").toString().split("\n");

const result = solution(input);

// console.log(result);
