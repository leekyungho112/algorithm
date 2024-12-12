let fs = require('fs');
// let calculateAlarm = require('./calculateAlarm');
// let ovenTimer = require('./ovenTimer');
let dice = require('./dice');
let input = fs.readFileSync('input.txt').toString().split('\n');

const result = dice(input);

console.log(result);
