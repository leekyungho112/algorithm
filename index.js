let fs = require('fs');
// let calculateAlarm = require('./calculateAlarm');
let ovenTimer = require('./ovenTimer');
let input = fs.readFileSync('input.txt').toString().split('\n');

const result = ovenTimer(input);

console.log(result);
