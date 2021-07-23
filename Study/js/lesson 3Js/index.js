// const person = {
//     name: 'Yegor'
// }

// function info(phone, email) {
//     console.log(`Имя: ${this.name}, Телефон:${phone}, Email:${email}`)
// }

//Demo
// info.bind(person)('1234', 'dfdfdsf@fgf')
// info.bind(person, '12345')('dfdfdsf@fgf')
// info.bind(person, '12345','dfdfdsf@fgf')()

//1 Простой
// function bind(fn, context, ...rest) {
//     return fn.bind(context, ...rest)
// }


//2 Способ Без встроенных методов

// function bind(fn, context, ...rest) {
//     return function (...args) {
//         const uniqId = Date.now().toString()

//         context[uniqId] = fn

//         const result = context[uniqId](...rest.concat(args))
//         delete context[uniqId]
//         return result
//     }
// }

// bind(info, person)('12345', 'dfdfdsf@fgf')
// bind(info, person, '12345')('dfdfdsf@fgf')
// bind(info, person, '12345', 'dfdfdsf@fgf')()

// console.log(person)


//Call
// function call(fn, context, ...args) {
//         const uniqId = Date.now().toString()

//         context[uniqId] = fn

//         const result = context[uniqId](...args)
//         delete context[uniqId]
//         return result
// }

// call(info, person, '12345', 'dfdfdsf@fgf')


//Aply
// function apply(fn, context, args) {
//     const uniqId = Date.now().toString()

//     context[uniqId] = fn

//     const result = context[uniqId](...args)
//     delete context[uniqId]
//     return result
// }

// apply(info, person, ['12345', 'dfdfdsf@fgf'])
    
