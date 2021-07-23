const VladilenPromise = require('./promise')

const t = setTimeout

describe('Vladilen Promises', () => {

    let promise
    let executorSpy

    const successResult = 42

    beforeEach(() => {
        executorSpy = jest.fn(resolve => t(() => resolve(), 250))
        promise = new VladilenPromise(executorSpy)
    })

    test('should exists and to be typeof function', () => {
        expect(VladilenPromise).toBeDefined()
        expect(typeof VladilenPromise).toBe('function');

    })

    test('ínstance should have methods: then, catch, finally', () => {
        const promise = new VladilenPromise()
        expect(promise.then).toBeDefined()
        expect(promise.catch).toBeDefined()
        expect(promise.finally).not.toBeUndefined()
    })

    test('should call executor function', () => {
        expect(executorSpy).toHaveBeenCalled()
    })
    test('shold get data in then block and chain them', async () => {
        const result = await promise.then(num => num).then(num => num * 2)
        expect(result).toBe(successResult * 2)
    })
    test('should catch error', () => {
        const errorExecutor = (_, r) => t(() => r(errorResult), 150)
        const errorPromise = new VladilenPromise(errorExecutor)
        return new Promise(resolve => {
            errorPromise.catch(error => {
                expect(error).toBe(errorResult)
                resolve()
            })
        })
    })
    test('should call finally method', async () => {
        const finallySpy = jest.fn(() => { })
        await promise.finally(finallySpy)

        expect(finallySpy).toHaveBeenCalled()
    })
})
