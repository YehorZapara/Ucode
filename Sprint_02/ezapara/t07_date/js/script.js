const date0 = new Date(1993, 11, 1);
const date1 = new Date(1998, 0, -33);
const date2 = new Date('42 03:24:00');


function getFormattedDate(date0, date1, date2) {
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return date0.toLocaleString('en-GB') +' '+ days[date0.getDay()];
} getFormattedDate(date0, date1, date2)

console.log(getFormattedDate(date0));
console.log(getFormattedDate(date1));
console.log(getFormattedDate(date2));