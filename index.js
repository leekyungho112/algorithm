let fs = require('fs');
let calculateAlarm = require('./calculateAlarm');
let input = fs.readFileSync('input.txt').toString().split('\n');

const result = calculateAlarm(input);

console.log(result.hour, result.minute);
