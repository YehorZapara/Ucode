//CLASS OLD
// const Animal = function (options) {
//     this.name = options.name
//     this.color = options.color
//     // this.voice = function () {
//     //     console.log('Base voice from ', this.name)
//     // }
// }

// Animal.prototype.voice = function () {
//     console.log('Base voice from ', this.name)
// }

// const dog = new Animal({ name: 'Rex', color: '#fff' })
// // console.log(Animal.prototype)
// // dog.voice()

// const Cat = function (options) {
//     Animal.apply(this, arguments)
//     this.hasTail = options.hasTail
//     this.type = 'cat'
// }

// Cat.prototype = Object.create(Animal.prototype)
// Cat.prototype.constructor = Cat

// Animal.prototype.voice = function () {
//     console.log('This sound goes from: ', this.name)
// }

// Cat.prototype.voice = function(){
//     Animal.prototype.voice.apply(this, arguments)
//     console.log(this.name + ' says mya')
// }

// const cat = new Cat({ name: 'Murzik', color: '#000', hasTail: true })
// console.log(cat)



// CLASS NEW
// class Animal {
//     constructor(options) {
//         this.name = options.name,
//             this.color = options.color
//     }
// }

// const dog = new Animal({ name: 'Rex', color: 'white' })

// console.log(dog)




//Promise
function noop() {

}

class VladilenPromise {
    constructor(executor) {
        this.queue = []
        this.errorHandler = noop
        this.finallyHandler = noop

        try {
            executor.call(null, this.oneResolve.bind(this), this.oneReject.bind(this))
        } catch (e) {
            this.errorHandler(e)
        } finally {
            this.finallyHandler()
        }

    }

    oneResolve(data) {
        this.queue.forEach(callback => {
            data = callback(data)
        })
        this.finallyHandler()
    }

    oneReject(error) {
        this.errorHandler(error)

        this.finallyHandler()
    }

    then(fn) {
        this.queue.push(fn)
        return this
    }
    catch(fn) {
        this.errorHandler = fn
        return this
    }
    finally(fn) {
        this.finallyHandler = fn
        return this
     }
}

const promise = new VladilenPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('NgRx')
    }, 150)
})

promise
    .then(course => course.toUpperCase())
    .then(title => console.log('Vladilen Promise: ', title))
    .catch(err => console.log('Error: ', err))
    .finally(() => console.log('Finally'))

module.exports = VladilenPromise