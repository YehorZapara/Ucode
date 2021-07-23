const { LLData } = require('./LLData')
exports.LList = class {
  constructor() {
    this.head = null
    this.tail = null
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    return this.tail
  }
  add(value) {
    const node = new LLData(value)
    if (this.tail) {
      this.tail.next = node;
      this.tail = node;
      return
    }
    if (!this.head) {
      this.head = node;
    }
    this.tail = node;
  }

  addFromArray(arrayOfData) {
    arrayOfData.map(item => this.add(item));
  }
  remove(value) {
    if (!this.head) {
      return
    }
    if (this.head.data === value) {
      this.head = this.head.next;
      return
    }
    let current = this.head;
    while (current.next) {
      if (current.next.data === value) {
        if (current.next === this.tail) {
          this.tail = current;
        }
        current.next = current.next.next;
        return
      } else {
        current = current.next;
      }
    }
    return
  }
  removeAll(value) {
    while (this.remove(value)) { };
  }
  contains(value) {
    if (!this.head) {
      return null
    }
    let current = this.head
    while (current) {
      if (current.data === value) {
        return true
      }
      current = current.next
    }
    return false
  }
  clear() {
    this.head = this.tail = null;
  }
  count() {
    let count = null;
    let node = this.head;
    while (node) {
      count++;
      node = node.next
    }
    return count;
  }
  toString() {
    let result = [];
    if (!this.head) {
      return '';
    }
    let current = this.head;
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    return result.join(', ');
  }
  *[Symbol.iterator]() {
    let current = this.head;
    while (current) {
      yield current.data;
      current = current.next;
    }
  }
  result = this[Symbol.iterator]();
  next() {
    return this.result.next();
  }
  getIterator() {
    return this[Symbol.iterator]();
  }

  filter(callback) {
    let newList = Object.assign(Object.create(this), JSON.parse(JSON.stringify(this)))
    let currentNode = newList.head
    while (currentNode) {
      if (!callback(currentNode.data)) {
        newList.remove(currentNode.data)
      }
      currentNode = currentNode.next;
    }
    return newList
  }
}



/*
  Task name: LinkedList
*/

const { LList } = require("./LList");

const list = new LList();

list.addFromArray([100, 1, 2, 3, 100, 4, 5, 100]);

list.add(10);

const onlySmallList = list.filter((data) => {
  return data < 18;
});

let sumOfAll = 0;

for (const data of list) {
  sumOfAll += data;
}

console.log([...list]); // [ 100, 1,   2,  3, 100, 4, 5, 100, 10 ]
console.log([...onlySmallList]); // [ 1, 2, 3, 4, 5, 10 ]
console.log(sumOfAll); // 325
console.log(list.contains(10)); // true
console.log(list.contains(22)); // false

list.clear()

console.log([...list]); // []