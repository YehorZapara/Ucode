'use strict';

//Практика урок1

// const question1 = +prompt('Сколько фильмов вы уже просмотрели?');

// const question2 = prompt('Один из последних просмотренных фильмов?');

// const question3 = +prompt('На сколько оцените его');

// const question4 = prompt('Один из последних просмотренных фильмов?');

// const question5 = +prompt('На сколько оцените его');

// const numbersOfFilms = `я Просмотрел ${question1} фильмов`

// const personalMoviesDB = {
//     count: {},
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// }

// personalMoviesDB.count = question1;
// personalMoviesDB.movies[question2]=question4
// personalMoviesDB.movies[question3]=question5
// personalMoviesDB.movies = `${question2}: ${question3}, ${question4}: ${question5}`;

// console.log(personalMoviesDB)


//lesson13
// const num = '100';
// // (num === 50) ? console.log('Ok!') : console.log('Error');

// switch(num){
//     case 49:
//         console.log('Неверно')
//         break;
//     case 50:
//         console.log('Неверно')
//         break;
//     case '100':
//         console.log('верно')
//         break;
//     default: console.log('Не в этот раз')
// }


//lesson14
// let num = 50;
// for (let i = 1; i < 10; i++) {
//     if(i===6){
//         // break;
//         continue
//     }
//     console.log(i)
// }



//Практика урок2
// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }

// if (personalMovieDB.count < 10) {
//     console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Вы классический зритель");
// } else if (personalMovieDB.count >= 30) {
//     console.log("Вы киноман");
// } else {
//     console.log("Произошла ошибка");
// }

// console.log(personalMovieDB);



//lesson17
// const logg = "Hello world";

// console.log(logg.slice(-5))
// console.log(logg.substring(6,11))
// console.log(logg.substr(6,5))


// const num =12.2;
// console.log(Math.round(num));

// const test = '12.2px';
// console.log(parseInt(test))
// console.log(parseFloat(test))





//Практика3
// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//             b = prompt('На сколько оцените его?', '');

//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }

// rememberMyFilms();

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log("Вы классический зритель");
//     } else if (personalMovieDB.count >= 30) {
//         console.log("Вы киноман");
//     } else {
//         console.log("Произошла ошибка");
//     }
// }

// detectPersonalLevel();

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB(personalMovieDB.privat)

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');

//     }
// }
// writeYourGenres()



//Урок21
// function copy(mainObj) {
//     let objCopy = {};
//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key]
//     } return objCopy;
// }



// const number = {
//     a: 2,
//     b: 4,
//     c: {
//         x: 7,
//         y: 3
//     }
// };
// const newNumber = copy(number)
// newNumber.a = 10;
// newNumber.c.x = 10

// // console.log(newNumber)
// // console.log(number)


// const add = {
//     d: 17,
//     e: 1
// }

// const clone = Object.assign({}, add);
// clone.d = 20
// // console.log(add)
// // console.log(clone)


// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice()

// newArray[1] = 'aasdasdasd'
// // console.log(newArray)
// // console.log(oldArray)


// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['worldpress', 'livejuornal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook']

//       console.log(internet)


//lesson 23
// let str = 'some'
// let strObj=new String(str)

// console.log(typeof(str))
// console.log(typeof(strObj))




//Практика 4

// let numberOfFilms;

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function () {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//         while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//             numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         }
//     },
//     rememberMyFilms: function () {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt('Один из последних просмотренных фильмов?', ''),
//                 b = prompt('На сколько оцените его?', '');

//             if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('done');
//             } else {
//                 console.log('error');
//                 i--;
//             }
//         }
//     },
//     detectPersonalLevel: function () {
//         if (personalMovieDB.count < 10) {
//             console.log("Просмотрено довольно мало фильмов");
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             console.log("Вы классический зритель");
//         } else if (personalMovieDB.count >= 30) {
//             console.log("Вы киноман");
//         } else {
//             console.log("Произошла ошибка");
//         }
//     },
//     showMyDB: function (hidden) {
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     },
//     writeYourGenres: function() {
//         for (let i = 1; i < 2; i++) {
//             // let genre = prompt(`Ваш любимый жанр под номером ${i}`);

//             // if (genre === '' || genre == null) {
//             //     console.log('Вы ввели некорректные данные или не ввели их вовсе');
//             //     i--;
//             // } else {
//             //     personalMovieDB.genres[i - 1] = genre;
//             // } 

//             let genres = prompt(`Введите вашы любимые жанры через запятую`).toLowerCase();
//             if (genres === '' || genres == null) {
//                 console.log('Вы ввели некорректные данные или не ввели их вовсе');
//                 i--;
//             } else {
//                 personalMovieDB.genres = genres.split(', ');
//                 personalMovieDB.genres.sort()
//             } 

//         }
//       personalMovieDB.genres.forEach((item, i) => {
//         console.log(`Любимый жанр ${i + 1} - это ${item}`);
//     });  
//     },

//     toggleVisibleMyDB: function () {
//         if (personalMovieDB.privat) {
//             return personalMovieDB.privat = false
//         } else {
//             return personalMovieDB.privat = true
//         }
//     }
// };



//lesson 27

// let x = 5; alert( x++ ); 

// console.log([ ] + false - null+ true)

// let y = 1; let x = y = 2; alert(x); 

// console.log([ ] + 1 + 2)

// alert( "1"[0] )

// console.log(2 && 1 && null && 0 && undefined)
//И запинается на лжи
//Или запинается на правде

// console.log(!!( 1 && 2 ));  
// console.log((1 && 2));

// alert( null || 2 && 3 || 4 ); 

// const a = [1, 2, 3]
// const b = [1, 2, 3]    
// console.log(a == b)

// alert( +"Infinity" ); 

// console.log("Ёжик" > "яблоко")

// console.log( 0 || "" || 2 || undefined || true || falsе)



//lesson 29
// const box = document.getElementById('box'),
//     btns = document.getElementsByTagName('button'),
//     circles = document.getElementsByClassName('circle'),
//     wrapper = document.querySelector('.wrapper'),
//     hearts = wrapper.querySelectorAll('.heart'),
//     oneHeart = wrapper.querySelector('.heart');

// // box.style.backgroundColor='blue'
// // box.style.width = '500px'

// box.style.cssText = `background-color: blue; width:500px`

// btns[1].style.borderRadius = '50%'
// circles[0].style.backgroundColor = 'red'

// // for (let i = 0; i < hearts.length; i++) {
// //     hearts[i].style.backgroundColor = 'blue'   
// // }

// hearts.forEach(item => {
//     item.style.backgroundColor = 'blue';
// })

// const div = document.createElement('div')
// // const text = document.createTextNode('Тут был я')

// div.classList.add('black');

// // document.querySelector('.wrapper').append(div);
// wrapper.append(div)
// // wrapper.(div)
// appendChild
// // wrapper.prepend('div');

// // hearts[0].before(div)
// // hearts[0].after(div)

// // wrapper.insertBefore(div, hearts[1]);

// // circles[0].remove();
// // wrapper.removeChild(hearts[1]);

// // hearts[0].replaceWith(circles[0]);
// // wrapper.replaceChild(circles[0], hearts[0]);

// div.innerHTML = '<h1>Hello World</h1>'

// // div.textContent = 'Hello';

// //beforbegin, afterbegin...
// div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');


//lesson31
// const btns = document.querySelectorAll('button'),
// overlay = document.querySelector('.overlay')

// // btn.onclick = function () {
// //     alert('Click')
// // }

// // btn.onclick = function () {
// //     alert('Second Click')
// // }

// // btn.addEventListener('click', ()=>{
// //     alert('Click')
// // })


// let i = 0
// const deleteElement = (e) => {
//     console.log(e.currentTarget)
//     console.log(e.type)
//     i++;
//     if (i == 1) {
//         btns.removeEventListener('click', deleteElement)
//     }
// }
// // btn.addEventListener('click', (e) => {
// //     e.target.remove()
// //     // alert('Hover')
// // })
// // btn.addEventListener('click', deleteElement)
// // overlay.addEventListener('click', deleteElement)

// btns.forEach(btn => {
// btn.addEventListener('click', deleteElement, {once: true})
// })

// const link = document.querySelector('a')
// link.addEventListener('click', (event) => {
//     event.preventDefault();

//     console.log(event.target)
// })


//lesson 32
// console.log(document.documentElement)
// console.log(document.body.childNodes)

// console.log(document.body.firstChild)
// console.log(document.body.firstElementChild)
// console.log(document.body.lastChild)

// console.log(document.querySelector('#btn').parentNode.parentNode)
// console.log(document.querySelector('#btn').parentNode.parentElement)

// console.log(document.querySelector('[data-current="3"]').nextElementSibling)




//leson 34
//touchstart
//touchmove
//touchend
//touchenter
//touchleave
//touchcancel

//touches
//targetTouches
//changedTouches
// window.addEventListener('DOMContentLoaded', ()=>{
//     const box = document.querySelector('.box');

//     box.addEventListener('touchstart', (e)=>{
//         e.preventDefault()

//         console.log('start')
//         console.log(e.changedTouches)
//     })
//     box.addEventListener('touchmove', (e)=>{
//         e.preventDefault()

//         console.log(e.targetTouches[0].pageX)
//     })
// box.addEventListener('touchend', (e)=>{
//     e.preventDefault()

//     console.log('end')
// })
// })



//lesson35
const li = document.querySelectorAll('li')
console.log(li)


function loadScript(src) {
    const script = document.createElement('script')
    script.src = src
    script.async = false;
    document.body.append(script)
}
loadScript('test.js')
loadScript('test1.js')