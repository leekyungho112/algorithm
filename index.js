let fs = require("fs");
let solution = require("./section2/2_4");
let input = fs.readFileSync("input.txt").toString().split("\n");

const result = solution(input);

// console.log(result);
