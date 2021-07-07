module.exports = class Access {
    constructor(mark_LXXXV) {
        this.mark_LXXXV = mark_LXXXV
    }
}



/*
  Task name: Access
*/

const Access = require('./access');

const o = new Access;
console.log(o.mark_LXXXV);

o.mark_LXXXV = 'null';
console.log(o.mark_LXXXV);

o.mark_LXXXV = 'INACTIVE';
console.log(o.mark_LXXXV);