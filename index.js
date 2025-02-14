let fs = require("fs");
let solution = require("./section5/5_4");
let input = fs.readFileSync("input.txt").toString().split("\n");

const result = solution(input);

// console.log(result);
