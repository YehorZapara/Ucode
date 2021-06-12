function one(arr) {
  let result = [];
  for (let value of arr) {
    if (!result.includes(value)) {
      result.push(value);
    }
  }
  return result;
}

function addWords(obj, newObj) {
  obj.words += ' ' + newObj;
  obj.words = obj.words.split(regex);
  obj.words = one(obj.words);
  obj.words = obj.words.join(' ');
  return obj.words
}

function removeWords(obj, wrds) {
  wrds = wrds.split(regex);
  obj.words = obj.words.split(regex);
  for (let i = 0; i < obj.words.length; ++i) {
    for (let j = 0; j < wrds.length; ++j) {
      if (obj.words[i] == wrds[j]) {
        obj.words.splice(i, 1);
      }
    }
  }
  obj.words = obj.words.join(' ');
  return obj.words
}

function changeWords(obj, oldWrds, newWrds) {
  oldWrds = oldWrds.split(regex);
  newWrds = newWrds.split(regex);
  obj.words = obj.words.split(regex);
  for (let i = 0; i < obj.words.length; i++) {
    for (let j = 0; j < oldWrds.length; j++) {
      if (obj.words[i] == oldWrds[j]) {
        obj.words[i] = newWrds[i];
      }
    }
  }
  obj.words = obj.words.join(' ');
  return obj.words
}

const obj = {
  words: 'newspapers newspapers books magazines'
};

let regex = /\s/;


console.log(obj);
addWords(obj, 'radio newspapers');
console.log(obj);
removeWords(obj, 'newspapers  radio');
console.log(obj);
changeWords(obj, 'books radio magazines', 'tv internet');
console.log(obj);