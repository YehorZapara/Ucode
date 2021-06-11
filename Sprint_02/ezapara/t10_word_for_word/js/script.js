function unique(arr) {
    let result = [];
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
    return result;
  }
  function addWords(obj, newObj){
  obj.words += ' ' + newObj; 
  obj.words = obj.words.split(re);
  obj.words = unique(obj.words);
  obj.words = obj.words.join(' '); 
  return obj.words
  }
  function removeWords(obj, rem){
    rem = rem.split(re);
    obj.words = obj.words.split(re);
    for (let i = 0; i < obj.words.length; ++i){
      for (let j = 0; j < rem.length; ++j){
        if (obj.words[i] == rem[j]) {
          obj.words.splice(i,1);
        }
      }
    }
    obj.words = obj.words.join(' '); 
    return obj.words
  }
  function changeWords(obj, oldWrds, newWrds){
    oldWrds = oldWrds.split(re);
    newWrds = newWrds.split(re);
    obj.words = obj.words.split(re);
    for (let i = 0; i < obj.words.length; ++i){
      for (let j = 0; j < oldWrds.length; ++j){
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
  let re = /\s* \s*/;
  console.log(obj); 
  addWords(obj, 'radio newspapers');
  console.log(obj); 
  removeWords(obj, 'newspapers  radio');
  console.log(obj); 
  changeWords(obj, 'books radio magazines', 'tv internet');
  console.log(obj); 