exports.checkDivision = ((a = 1, b = 60) => {
    for (index = a; index <= b; index++) {
        if (index % 2 === 0 && index % 3 === 0 && index % 10 === 0) {
             console.log('The number ' + index + ' is divisible by 2, is divisible by 3, is divisible by 10');
        }
        else if (index % 2 === 0 && index % 3 === 0) {
            console.log('The number ' + index + ' is divisible by 2, is divisible by 3');
        }
        else if (index % 2 === 0 && index % 10 === 0) {
            console.log('The number ' + index + ' is divisible by 2, is divisible by 10');
        }
        else if (index % 10 === 0 && index % 3 === 0) {
             console.log('The number ' + index + ' is divisible by 3, is divisible by 10');
        }
        else if (index % 2 === 0) {
             console.log('The number ' + index + ' is divisible by 2');
        }

        else if (index % 3 === 0) {
            console.log('The number ' + index + ' is divisible by 3');
        }

        else if (index % 10 === 0) {
             console.log('The number ' + index + ' is divisible by 10');
        }
        else {
            console.log('The number ' + index + ' -');
        }
    }
})


/*
  Task name: Range
*/

const i = require('./index');

console.log('*** Range is 3 - 7 checkDivision(3,7) ***');
i.checkDivision(3, 7);

console.log('\n*** Range is 58 - ... checkDivision(58) ***');
i.checkDivision(58);

console.log('\n*** Range is ... - ... checkDivision() ***');
i.checkDivision();
