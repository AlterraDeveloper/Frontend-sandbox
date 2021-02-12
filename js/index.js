function hello(params) {
    console.log('Hello', this);
}

const person = {
    name: 'Eugene',
    age: 22,
    sayHello: hello,
    sayHelloWindow: hello.bind(window),
    logInfo: function (job) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
        console.log(`Job is ${job}`);
        console.groupEnd()
    }
}

const lena = {
    name: 'Elena',
    age: 23
}

// person.logInfo.bind(lena, 'manager')()
// person.logInfo.call(lena, 'manager')
// person.logInfo.apply(lena, ['manager'])

const array = [1, 2, 3, 4, 5]

// function multBy(arr, n) {
//     return arr.map(i => i * n)
// }

Array.prototype.multBy = function(n) {
    return this.map(i => i * n)
}

console.log(array.multBy(15))