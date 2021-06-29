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






//Oject


/* const persone = {
    name: 'Yegor',
    isProgrammer: true,
    age: 24,
    languages: ['ru', 'en', 'uk'],
    'complex key': `Complex value`,
    ['key_' + (1 + 3)]: "computed key", //key_4
    greet() {
        console.log("greet from person")
    },
    info() {
        console.log('this', this)
        console.log("information about the persone with name:", this.name)
    }
}
//persone.info()

const logger = {
    keys() {
        console.log("Object Keys: ", Object.keys(this))
    },
    keysAndValues() {
        // Object.keys(this).forEach((key)=>{
        //     console.log('key:', this[key])
        // })
        // const self = this
        Object.keys(this).forEach(function (key) {
            console.log('key:', this[key])
        }.bind(this))
    },
    withParams(top = false, between = false, bottom = false) {
        if(top){
            console.log('-------Start-------')
        }
        Object.keys(this).forEach((key, index, array) => {
            console.log('key:', this[key])
            if(between && index!==array.length-1){
                console.log('--------------')
            }
        })
        if(bottom){
            console.log('-------End-------')
        }
    }
}

// logger.withParams.call(persone, true, true, true)
logger.withParams.apply(persone, [true, true, true]) */


// logger.keysAndValues.call(persone)

// const bound = logger.keys.bind(persone)
// bound()
// logger.keys.call(persone)


/* console.log(persone.name)
console.log(persone['age'])
console.log(persone['complex key'])
console.log(persone)
persone.greet()

persone.age++
persone.languages.push('by')
//persone['key_4'] = undefined
delete persone['key_4']
console.log(persone)
console.log(persone['key_4']) */

/* const name = persone.name;
const age = persone.age;
const languages = persone.languages; */

/* const { name, age: personeAge = 10, languages } = persone

console.log(name, personeAge, languages) */


/* for (const key in persone) {
    if (persone.hasOwnProperty(key)) {
        console.log('key:', key)
        console.log('value: ', persone[key])
    }
} */


/* Object.keys(persone).forEach((key) => {
    console.log('key:', key)
    console.log('value: ', persone[key])
}) */





//Event Loop
/* const timeout = setTimeout(()=>{
    console.log(`After timeout`)
}, 2500)
clearTimeout(timeout)

const interval = setInterval(()=>{
    console.log(`After interval`)
}, 1000)
clearInterval(interval) */

/* const delay = (callback, wait =1000)=>{
    setTimeout(callback, wait)
}
delay(()=>{
    console.log('after2 sec')
},2000) */

/* const delay = (wait = 1000) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Try one more time')
        }, wait)
    })
    return promise   
} */
/* delay(2500)
.then (()=>{
    console.log(`After interval`)
})
.catch (err=>console.error('Error:',err))
.finally (()=> console.log('finaly')) */

/* const getData = () => new Promise(resolve => resolve([1, 1, 2, 3, 5, 8, 13]))
getData().then(data=>console.log(data))
async function asyncExample() {
    try {
        await delay(3000)
        const data = await getData()
        console.log('Data', data)
    } catch (e) {
        console.log(e)
    }finally{
        console.log('Finally')
    }

}
asyncExample() */





//DOM


/* const heading = document.getElementById('hello')
// const heading2 = document.getElementsByTagName('h2')[0]
// const heading2 = document.getElementsByClassName('h2-class')[0]
// const heading2 = document.querySelector('.h2-class')
// const heading2 = document.querySelector('#sub-hello') // Всегда 1 элемент
const heading2 = document.querySelector('h2')


// const heading3 = heading2.nextElementSibling
const h2List = document.querySelectorAll('h2')
const heading3 = h2List[h2List.length - 1]


setTimeout(() => {
  addStylesTo(heading, 'JavaScript')
}, 1500)

const link = heading3.querySelector('a')

link.addEventListener('click', (event) => {
  event.preventDefault()
  console.log('Click on link', event.target.getAttribute('href'))
  const url = event.target.getAttribute('href')

  window.location = url
})


setTimeout(() => {
  addStylesTo(link, 'Практикуйся', 'blue')
}, 3000)

setTimeout(() => {
  addStylesTo(heading2, 'И все получится!', 'yellow', '2rem')
}, 4500)

function addStylesTo(node, text, color = 'red', fontSize) {
  node.textContent = text
  node.style.color = color
  node.style.textAlign = 'center'
  node.style.backgroundColor = 'black'
  node.style.padding = '2rem'
  node.style.display = 'block'
  node.style.width = '100%'

  // falsy: '', undefined, null, 0, false
  if (fontSize) {
    node.style.fontSize = fontSize
  }
}

heading.onclick = () => {
  if (heading.style.color === 'red') {
    heading.style.color = '#000'
    heading.style.backgroundColor = '#fff'
  } else {
    heading.style.color = 'red'
    heading.style.backgroundColor = '#000'
  }
}


heading2.addEventListener('dblclick', () => {
  if (heading2.style.color === 'yellow') {
    heading2.style.color = '#000'
    heading2.style.backgroundColor = '#fff'
  } else {
    heading2.style.color = 'yellow'
    heading2.style.backgroundColor = '#000'
  }
}) */