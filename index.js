let fs = require('fs');
// let calculateAlarm = require('./calculateAlarm');
// let ovenTimer = require('./ovenTimer');
// let dice = require('./dice');
// let plus = require('./plus');
// let multi = require('./multi');
// let startOne = require('./star_1');
// let maxAndMin = require('./maxAndMin');
// let maxLength = require('./maxLength');
// let remainder = require('./remainder');
// let average = require('./average');
let averageOne = require('./average_1');
let input = fs.readFileSync('input.txt').toString().split('\n');

const result = averageOne(input);

console.log(result);
