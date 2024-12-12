let fs = require('fs');
// let calculateAlarm = require('./calculateAlarm');
// let ovenTimer = require('./ovenTimer');
// let dice = require('./dice');
// let plus = require('./plus');
// let multi = require('./multi');
// let startOne = require('./star_1');
let maxAndMin = require('./maxAndMin');
let input = fs.readFileSync('input.txt').toString().split('\n');

const result = maxAndMin(input);

console.log(result);
