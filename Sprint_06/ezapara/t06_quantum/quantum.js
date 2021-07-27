
module.exports.calculateTime = function calculateTime() {
    let time = [];
    let begin = new Date(1939, 0, 1);
    let today = new Date();
    let dif = (Math.abs(Number(begin)) + Number(today)) / 7;
    let now = new Date(Number(begin) + Number(dif));

    time.push(now.getFullYear() - begin.getFullYear());
    time.push(now.getMonth() - begin.getMonth());
    time.push(now.getDate() - begin.getDate());
    return time;
}

/*
  Task name: Quantum
*/

const normal = require('./normal');
const quantum = require('./quantum');

const time = normal.calculateTime();

console.log(`In real life you were absent for ${time.years()} years, ${time.months()} months, ${time.days()} days.`)

const quantumTime = quantum.calculateTime();

console.log(`In quantum space you were absent for ${quantumTime[0]} years, ${quantumTime[1]} months, ${quantumTime[2]} days.`)
