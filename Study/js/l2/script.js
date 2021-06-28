//String


/*const name = "Yegor"
const age = 24

function getAge() {
    return age;
}
 const output = `Hello, my name ${name} and  my age is ${age}`


console.log(output) */

/* const name = "Yegor"
console.log(name.length)
console.log(name.toUpperCase())
console.log(name.charAt(2))
console.log(name.indexOf('!'))
console.log(name.toUpperCase().startsWith('YEG'))
console.log(name.repeat(5))
const string ='    password     '
console.log(string.trim())
console.log(string.trimLeft())
console.log(string.trimRight()) */

/* function logPerson (s, name, age) {
if (age<0) {
    age='hohohohohohohohohohohohoohohohohohohohohohohohohoohohohohohohohoho!'
}
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}
const PersonName='Yegor'
const PersonAge = -1

const output = logPerson`Name: ${PersonName}, Age:${PersonAge}`;
console.log(output)
 */





// Function


/* function greet(name) {
    console.log('Hello - ', name)
}
const greet2 = function greet2 (name){
    console.log("Hello 2 - ",name)
} */
/* greet('lena')
greet2('Dimooooooooooon!!!!')

console.log(typeof greet)
console.dir(greet) */


/*  let counter=0
 const interval = setInterval (function(){
     if(counter===5){
     clearInterval(interval)
    }else console.log(++counter+"tik")
}, 1000) */


/* function greet(name) {
    console.log("Hello- ", name)
}
const arrow = (name)=>{
    console.log("Hello- ", name)
}
const arrow2 = (name)=>console.log("Hello- ", name)
greet('FF')
arrow ('GG')
arrow2 ('GG')

const pow = num=>num**2
console.log(pow(5)) */


/* const sum = (a = 2, b = a * 2) => a + b
console.log(sum(65))

function sumAll(...all) {
    let result = 0;
    for (let num of all) {
        result += num
    } return result
}
const res = sumAll(4, 5, 7, 5, 8, 7, 1, 2)
console.log(res) */


/* function creatMember(name) {
    return function (lastName) {
        console.log(name + lastName)
    }
}
const logWithLastName = creatMember('Yegor');
console.log(logWithLastName('jhsdgf'))
console.log(logWithLastName('jfgfdgffdf')) */




//Arry


/* const cars = ['Mazda', 'Ford', 'Mersedes', 'BMV']
const fib = [1, 1, 2, 3, 5, 8, 13]
const people = [
    { name: 'Yegor', budget: 4040 },
    { name: 'Masha', budget: 4545 },
    { name: 'Igor', budget: 2020 },
    { name: 'John', budget: 3030 }
]
cars.push('Porsh') */
/* 
cars.unshift('Zapaoraozhez')
console.log(cars)

const firstCar = cars.shift()
const lastCar = cars.pop()
console.log(firstCar)
console.log(lastCar)
console.log(cars) */


/* const pow2 = num => num ** 2
const pow2Fib = fib.map(pow2)
const filteretNumbers = pow2Fib.filter((num) => {
    return num > 20
})
console.log(pow2Fib)
console.log(filteretNumbers)
 */

/* const upperCaseCars = cars.map(car => {
    return car.toUpperCase()
})

const pow2 = num => num ** 2
const sqrt = num => Math.sqrt(num)

const pow2Fib = fib.map(pow2).map(Math.sqrt)
console.log(pow2Fib) */

/* console.log(cars.includes('Mazda'))
 */

/* let findedPerson
for (const person of people) {
    if (person.budget === 4545) {
        findedPerson = person
    }
}
console.log(findedPerson); */

/*  const index = people.findIndex(function (person) {
    return person.budget === 4545
})
const person = people.find(function (person) {
    return person.budget === 4545
})
console.log(people[index])
console.log(person)
 */


/* const person = people.find(person => person.budget === 4545)
console.log(person) */


/* //const index = cars.indexOf('BMV')
cars[index] = 'Fulk'
console.log(cars) */

/* console.log(cars.reverse())
console.log(cars) */
/* const text = 'Hello, we are study JS'
const reverseText = text.split('').reverse().join('')
console.log(reverseText) */


/* const people = [
    { name: 'Yegor', budget: 4040 },
    { name: 'Masha', budget: 4545 },
    { name: 'Igor', budget: 2020 },
    { name: 'John', budget: 3030 }
]

const allBudget = people
.filter(person => person.budget>3000)
.reduce(function (acc, person) {
    acc+=person.budget
    return acc
}, 0)
console.log(allBudget)

//const displayItems = allItems.filter(item => item.name.contain(phone)) */




