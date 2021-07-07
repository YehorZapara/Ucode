exports.firstUpper = (str) => {
    if (isNaN(str)) {
        str = str.trim().toLowerCase()
        return str.slice(0, 1).toUpperCase() + str.slice(1) + '$'
    }
    else if (str === null) {
        return '$';
    }
    else {
        return str + '$'
    }
}


/*
  Task name: First upper
*/

const i = require('./index');

console.log(`"testing String": ${i.firstUpper("testing String")}`);
console.log(`"   testing   String": ${i.firstUpper("   testing   String")}`);
console.log(`"07": ${i.firstUpper("07")}`);
console.log(`"": ${i.firstUpper("")}`);
console.log(`null: ${i.firstUpper(null)}`);

console.log(i.firstUpper('   ...I Will Rebuild Krypton Atop His Bones.'));
console.log(i.firstUpper(' 300room FOR yoUr   DESTiny   '));