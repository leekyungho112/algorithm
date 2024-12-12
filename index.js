let fs = require('fs');
// let calculateAlarm = require('./calculateAlarm');
// let ovenTimer = require('./ovenTimer');
// let dice = require('./dice');
let plus = require('./plus');
let input = fs.readFileSync('input.txt').toString().split('\n');

const result = plus(input);

console.log(result);
