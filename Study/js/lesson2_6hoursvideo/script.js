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

/* const persone ={
    name: "Yegor",
    age: 24,
    greet: function () {
        console.log('greet!')
    }
} */




//Proto
/* const persone = new Object ({
    name: "Yegor",
    age: 24,
    greet: function () {
        console.log('greet!')
    }
})

Object.prototype.sayHello = function () {
    console.log('Hello!')
}
persone.sayHello()

const lena = Object.create(persone)
lena.greet()
lena.name='Elena'

const str = new String ("I am string") */





//Context
/* function hello() {
    console.log('Hello', this)
}

const person = {
    name: "Yegor",
    age: 24,
    sayHello: hello,
    sayHelloWindow: hello.bind(document),
    logInfo: function (job, phone) {
        console.group(`${this.name} info`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}
const lena = {
    name: "Elena",
    age: 23
}
// const fnLenaInfoLog = person.logInfo.bind(lena)
// fnLenaInfoLog('Frontend', '34234-23432-23423')

// const fnLenaInfoLog = person.logInfo.bind(lena,'Frontend', '34234-23432-23423')
// fnLenaInfoLog()

// const fnLenaInfoLog = person.logInfo.bind(lena,'Frontend', '34234-23432-23423')()
// person.logInfo.call(lena,'Frontend', '34234-23432-23423')
// person.logInfo.apply(lena,['Frontend', '34234-23432-23423'])

//==========

const array = [1, 2, 3, 4, 5]
// function multBy(arr, n) {
//     return arr.map((i) => { return i * n })
// }
// console.log(multBy(array, 5))

Array.prototype.multBy = function (n) {
    return this.map((i) => {
        return i * n
    })
}
console.log(array.multBy(2)) */





// Zamikanija
// function createCalcFunction(n) {
//     return function () {
//         console.log(1000*n)
//     }
// }
// const calc = createCalcFunction(42)
// calc()

// function createIncrementore(n) {
//     return function (num) {
//         return n +num
//     }
// }
// const addOne = createIncrementore(1)    
// const addten = createIncrementore(10)

// console.log(addOne(10))
// console.log(addten(10))

/* function urlGeneratore(domain) {
    return function (url) {
        return `https://${url}.${domain}`
    }
}
const comUrl=urlGeneratore('com')
const ruUrl = urlGeneratore('ru')
console.log(comUrl('google'))
console.log(comUrl('netfix'))

console.log(ruUrl('yandex')) */
/* 
function bind(c, fn) {
    return function (...arr) {
        fn.apply(c, arr)
        
    }
}

function logPerson() {
    console.log(`Persone: ${this.name}, ${this.age}, ${this.job}`)
}
const person1 = {name: 'Michael', age: 22, job: 'SMM'}
const person2 = {name: 'Elena', age: 19, job: 'Frontend'}

bind(person1, logPerson)()
bind(person2, logPerson)() */



//Asinchron

/* console.log('Start')
console.log('Start2')

function temeout2sec() {
    console.log('temeout 2sec')
}

window.setTimeout(function () {
    console.log(`Inside temeout, after 2000 seconds`)
}, 2000)

setTimeout(temeout2sec, 0)

console.log('End') */





//Promise
// console.log('Request data...')
// /*setTimeout(()=>{
//     console.log('Prepearig data...')
//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }
//     setTimeout(()=>{
//         backendData.modified = true
//         console.log('Data received', backendData)
//     }, 2000)
// }, 2000) */

// const p = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('Prepearig data...')
//         const backendData = {
//             server: 'aws',
//             port: 2000,
//             status: 'working'
//         }
//         resolve(backendData)
//     }, 2000);
// })

// p.then(data => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true
//             resolve(data)
//         }, 2000);
//     })
//     // p2.then(clientData => {
//     //     console.log('Data received', clientData)
//     // })

// }).then(clientData => {
//     console.log('Data received', clientData)
// })
//     .then(data => {
//         console.log('modified', data)
//     })
//     .catch((err) => {
//         console.error('error: ', err)
//     })
// .finally(()=> console.log('Finaly'))


/* const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}

// sleep(2000).then(()=>console.log('After 2 sec'))
// sleep(3000).then(()=>console.log('After 3 sec'))

Promise.all([sleep(2000), sleep(4000)]).then(()=>{
    console.log('All promises')
})

Promise.race([sleep(2000), sleep(4000)]).then(()=>{
    console.log('Race promises')
}) */




//Objects
/* const person = Object.create(
    {
        calculateAge(){
            console.log('Age: ',new Date().getFullYear() - this.birthYear)
        }
    },
    {
        name: {
            value: 'Yegor',
            enumerable: true,
            writable: true,
            configurable: true
        },
        birthYear: {
            value: 1997,
        },
        age:{
            get(){
                return new Date().getFullYear() - this.birthYear
            },
            set(value){
                console.log('Set age', value)
            }
        }
    })
person.name = "Maxim"

for (let key in person) {
    console.log('Key', key, person[key])
} */





//Classes
// const animal = {
//     name: 'Animal',
//     age: 5,
//     hasTail: true
// }
// class Animal {
//     static type = 'ANIMAL'
//     constructor(option) {
//         this.name = option.name
//         this.age = option.age
//         this.hasTail = option.hasTail
//     }
// voice(){
//     console.log("I am Animal!")
// }    
// } 

// // const animal = new Animal({
// //     name: 'Animal',
// //     age: 5,
// //     hasTail: true
// // })

// class Cat extends Animal{
//     constructor(option){
//         super(option)
//         this.color=option.color

//     }
//     voice(){
//         super.voice()
//         console.log('Iam cat')
//     }
//     get ageInfo(){
//         return this.age*7
//     }
//     set ageInfo(newAge){
//         this.age=newAge
//     }
// }
// const cat = new Cat({
//     name: 'Cat',
//     age: 7,
//     hasTail: true,
//     color: 'black'
// })

// class Component {
//     constructor(selector) {
//         this.$el = document.querySelector(selector)
//     }
//     hide() {
//         this.$el.style.display = 'none'
//     }
//     show() {
//         this.$el.style.display = 'block'
//     }
// }
// class Box extends Component {
//     constructor(option) {
//         super(option.selector)

//         this.$el.style.width = this.$el.style.height = option.size + 'px'
//         this.$el.style.background = option.color
//     }
// }
// const box1 = new Box({
//     selector: '#box1',
//     size: 100,
//     color: 'red'
// })
// const box2 = new Box({
//     selector: '#box2',
//     size: 100,
//     color: 'blue'
// })

// class Circle extends Box {
//     constructor(option) {
//         super(option)

//         this.$el.style.borderRadius = '50%'
//     }
// }
// const c = new Circle({
//     selector: '#circle',
//     size: 90,
//     color: 'green'
// })





//Async Await

// const delay = ms => {
//     return new Promise(r => setTimeout(() => r(), ms))
// }
// // delay(2000).then(()=>console.log('2 sec'))

// const url = 'https://jsonplaceholder.typicode.com/todos'

// /* function fetchTools() {
//     console.log('Fetch todo stared...')
//     // fetch(url).then(response => response.json())
//     return delay(2000).then(() => fetch(url))
//     .then(response => response.json())
// }
// fetchTools().then(data => {
//     console.log('Data:', data)
// }).catch((e) => {
//     console.error(e)
// }) */

// async function fetchAsyncTodos(){
//     console.log('Fetch todo stared...')
//     try {
//     await delay(2000)
//      const response = await fetch(url)
//      const data = await response.json()
//      console.log('Data', data)
//     } catch (e) {
//     console.error(e)
//     }finally{

//     }
// }
// fetchAsyncTodos()





//Proxy
// const person ={
//     name: 'Yegor',
//     age:24,
//     job: 'FullStack'
// }

// const op =new Proxy(person, {
//     get(target,prop){
//         console.log('Target', target)
//         console.log('Prop', prop)
//         return target[prop]
//     }
// })





//Massive
// const people = [
//     { name: 'Vladlen', age: 23, budjet: 30000 },
//     { name: 'Vlad', age: 25, budjet: 40000 },
//     { name: 'Andrew', age: 24, budjet: 20000 },
//     { name: 'Petr', age: 17, budjet: 10000 },
//     { name: 'Yegor', age: 22, budjet: 50000 },
//     { name: 'Tom', age: 20, budjet: 60000 }
// ]

//For
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i])
// }

// for(let person of people){
//     console.log(person)
// }


//ForEach
// people.forEach(person => {
//     console.log(person)
// })


//Map
// const newPeople = people.map(person => `${person.name} (${person.age}) ${person.age *3}`)
// console.log(newPeople)


//Filter
// const adults = []
// for(let i = 0;i<people.length; i++){
//     if (people[i].age>=18) {
//         adults.push(people[i])
//     }
// }
// console.log(adults)

// const adults = people.filter(person=>{
//     if (person.age>=18) {
//         return true
//     }
// })

// const adults = people.filter(person=>person.age>=18)   
// console.log(adults)


//Reduce
// let amount = 0
// for (let i = 0; i < people.length; i++) {
//     amount+=people[i].budjet
// }
// console.log(amount)

// const amount = people.reduce((total, person)=> total+person.budjet,0)
// console.log(amount)


//Find
// const igor = people.find(person=>person.name==='Yegor')
// console.log(igor)
// const igorIndex = people.findIndex(person=>person.name==='Yegor')
// console.log(igorIndex)


//------------
// const amount = people
//     .filter(person => person.budjet > 10000)
//     .map(person => {
//         return {
//             info: `${person.name} (${person.age})`,
//             budjet: Math.sqrt(person.budjet)
//         }
//     })
//     .reduce((total, person) => total + person.budjet, 0)
// console.log(amount)









//Map
// const obj = {
//     name: 'Yegor',
//     age: 24,
//     job: 'FullStack'
// }

// const entries = [
//     ['name', 'Vladilen'],
//     ['age', 26],
//     ['job', 'FullStack']
// ]

// // console.log(Object.entries(obj))
// // console.log(Object.fromEntries(entries))

// const map = new Map(entries)

// console.log(map.get('job'))
// console.log(obj.job)

// map
//     .set('newField', 42)
//     .set(obj, 'Value of object')
//     .set(NaN, 'NaN ??')

// console.log(map.get(NaN))

// map.delete('job')
// console.log(map.has('job'))
// console.log(map.size)
// map.clear()
// console.log(map.size);


//-----------------


// for (const [key, value] of map) {
//     console.log(key, value)
// }

// for (const val of map.values()) {
//     console.log(val)
// }

// for (const key of map.keys()) {
//     console.log(key)
// }

// map.forEach((val, key, m)=>{
//     console.log(val,key)
// })


//-------------------
// const array = Array.from(map)

// const mapObj = Object.fromEntries(map.entries())

// console.log(mapObj)


//----------------------
// const users = [
//     { name: 'Elena' },
//     { name: 'Alex' },
//     { name: 'Irina' }
// ]
// const visits = new Map()
// visits
//     .set(users[0], new Date())
//     .set(users[1], new Date(new Date().getTime() + 1000 * 60))
//     .set(users[2], new Date(new Date().getTime() + 5000 * 60))

// function lastVisit(users) {
//     return visits.get(users)
// }
// console.log(lastVisit(users[2]))








//Set
// const set = new Set([1,2,3,3,3,3,4,5,5,6])

// set.add(10).add(20).add(30).add(20)
// // console.log(set)
// // console.log(set.has(30))
// // console.log(set.size)
// // console.log(set.delete(1))
// // console.log(set.size)
// // console.log(set.clear())
// // console.log(set.size)

// // console.log(set.entries())
// // for (const key of set) {
// //     console.log(key)
// // }


// //--------------------
// function uniqeValues(array) {
//     return Array.from(new Set(array))
// }
// console.log(uniqeValues([1,1,1,2,2,3,4,4,4,5,5,6,6,7,8,9,]))





//WeakMap
// let obj = { name: 'weakmap' }
// // const arr = [obj]
// // obj = null
// // console.log(arr[0])

// const map = new WeakMap([
//     [obj, 'obj data']
// ])
// //get set delete has

// obj = null

// //---------------------
// const cashe = new WeakMap()

// function casheUser(user) {
//     if (!cashe.has(user)) {
//         cashe.set(user, Date.now())
//     }
//     return cashe.get(user)
// }

// let lena = { name: 'Lena' }
// let alex = { name: 'Alex' }
// casheUser(lena)
// casheUser(alex)

// lena =null

// console.log(cashe.has(lena))
// console.log(cashe.has(alex))






//WeakSet
// const users = [
//         { name: 'Elena' },
//         { name: 'Alex' },
//         { name: 'Irina' }
//     ]

//     const visits = new WeakSet()
//     visits.add(users[0]).add(users[1])

//     users.splice(1,1)

//     console.log(visits.has(users[0]))
//     console.log(visits.has(users[1]))


//XHR
// const requestURL = 'https://jsonplaceholder.typicode.com/users'

// function sendRequest(method, url, body = null) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest()

//         xhr.open(method, url)

//         xhr.responseType = 'json'
//         xhr.setRequestHeader('Content-Type', 'application/json')
//         xhr.onload = () => {
//             if (xhr.status >= 400) {
//                 reject(xhr.response)
//             } else {
//                 resolve(xhr.response)
//                 // console.log(JSON.parse(xhr.response))
//             }
//         }

//         xhr.onerror = () => {
//             console.log(xhr.response)
//         }

//         xhr.send(JSON.stringify(body))
//     })
// }

// // sendRequest('GET', requestURL)
// // .then(data=>console.log(data))
// // .catch(err=>console.log(err))

// sendRequest('POST', requestURL, {
//     name: 'Yeegor',
//     age:24
// })
//     .then(data => console.log(data))
//     .catch(err => console.log(err))




//fetch
// const requestURL = 'https://jsonplaceholder.typicode.com/users'

// function sendRequest(method, url, body = null) {
//     const headers = {
//         'Content-Type': 'application/json'
//     }
//     return fetch(url, {
//         method: method,
//         body: JSON.stringify(body),
//         headers: headers
//     }).then(response => {
//         if (response.ok) {
//             return response.json()
//         }
//         return response.json().then(error => {
//             const e = new Error('OOPS')
//             e.data = error
//             throw e
//         })
//     })
// }
// // sendRequest('GET', requestURL)
// //     .then(data => console.log(data))
// //     .catch(err => console.log(err))

// const body = {
//     name: 'Yegor',
//     age: 24
// }
// sendRequest('POST', requestURL, body)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))






//Spread

// const citiesRussia = ['Москва', "Санкт-Петербург", "Казань", "Новосибирск"]
// const citiesEurope = ["Берлин", "Прага", "Париж"]

// const citiesRussiaWithPopulation = {
//     Moscow: 20,
//     SaintPeterburg: 8,
//     Kazan: 5,
//     Novosibirsk: 3
// }

// const citiesEuropeWithPopulation = {
//     Moscow: 26,
//     Berlin: 10,
//     Praga: 3,
//     Paris: 2
// }

// console.log(...citiesRussia)
// console.log(...citiesEurope)

// const allCities = [...citiesEurope, 'Вашингтон', ...citiesRussia]
// const allCities = citiesEurope.concat(citiesRussia)
// console.log(allCities)

// console.log({...citiesRussiaWithPopulation})
// console.log({...citiesRussiaWithPopulation, ...citiesEuropeWithPopulation})
// console.log({...citiesEuropeWithPopulation, ...citiesRussiaWithPopulation})


///Practice
// const numbers = [5, 37, 42, 17]
// console.log(Math.max(5, 37, 42, 17))
// console.log(Math.max(...numbers))
// console.log(Math.max.apply(null, numbers))

// const divs = document.querySelectorAll('div')
// const nodes = [...divs]
// console.log(divs)
// console.log(divs, Array.isArray(divs))
// console.log(nodes, Array.isArray(nodes))
// console.log(divs.map())




//Rest
// const citiesRussia = ['Москва', "Санкт-Петербург", "Казань", "Новосибирск"]
// const citiesEurope = ["Берлин", "Прага", "Париж"]

// const citiesRussiaWithPopulation = {
//     Moscow: 20,
//     SaintPeterburg: 8,
//     Kazan: 5,
//     Novosibirsk: 3
// }

// const citiesEuropeWithPopulation = {
//     Moscow: 26,
//     Berlin: 10,
//     Praga: 3,
//     Paris: 2
// }

// function sum(a, b, ...rest) {
//     // console.log(rest)
//     return a + b + rest.reduce((a, i) => a + i, 0)
// }
// const numbers = [1, 2, 3, 4, 5]

// // console.log(sum(...numbers))

// // const a = numbers[0]
// // const b = numbers[1]

// // const [a,b, ...other]= numbers

// // console.log(a, b, other)


// const person = {
//     name: 'Max',
//     age:20,
//     city:'Moscow',
//     country:'Russia'
// }

// const{name, age, ...address} = person
// console.log(name, age, address)







//Destructirization
// function calcValues(a, b) {
//     return [
//         a + b,
//         a - b,
//         a * b,
//         a / b
//     ]
// }
// const [sum, sub = 'Вычитания нет', mult, ...other] = calcValues(42, 10)
// // const sum = result[0]
// // const sub = result[1]
// // const [sum, sub] = result
// // console.log(sum, mult, other, sub)
// const person = {
//     name: 'Max',
//     age: 20,
//     address: {
//         country: 'Russia',
//         city: 'Moscow'
//     }
// }
// // const name = person.name
// // const {
// //     name: firstName = 'None',
// //     age,
// //     car = 'None',
// //     address:{city: homeTown, country}
// // } = person

// // const {name, ...info}=person

// // console.log(name, info)

// function logPerson({name, age}) {
//     console.log(name+' ', age)
// }
// logPerson(person)





//LocalStorage
//  const myNumber = 42

// //  localStorage.removeItem('number')
// //  console.log(localStorage.getItem('number'))
// //  localStorage.setItem('number', myNumber.toString())
// //  console.log(localStorage.getItem('number'))
// // localStorage.clear()
 
// const object = {
//     name: 'Max',
//     age: 20
// }
// localStorage.setItem('person', JSON.stringify(object))

// const raw = localStorage.getItem('person')
// const person = JSON.parse(raw)
// person.name = 'Vladilen'
// console.log(person)


// //----------------------------
// window.addEventListener('storage', event =>{
//     console.log(event)
// })