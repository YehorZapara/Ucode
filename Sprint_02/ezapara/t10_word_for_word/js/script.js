const obj = {
    words: 'newspapers newspapers  books magazines'
};
console.log(obj); // {words: "newspapers newspapers  books magazines"

function addWords(obj, removed, words) {
    return words.splice(1, 0, 'radio');
}
console.log(obj); // {words: "newspapers books magazines radio"}

function removeWords(obj, removed, words) {
    return words.splice(0, 1);
}
console.log(obj); // {words: "books magazines"}

function changeWords(obj, removed, words) {
    return words.splice(0, 1, 'tv internet');
}
console.log(obj); // {words: "tv internet"}