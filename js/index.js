// const firstName = 'Eugene'
// const lastName = 'Kiselev'

// let x = 5
// x **= 2
// console.log();

// let check = (posNum, answer) => {
//     console.log('check' + posNum);
//     return answer;
// }

// const cars = ['Mazda', 'Mersedes', 'Ford']
// const cars = new Array('Mazda', 'Mersedes', 'Ford')
// for (const car of cars) {
//     console.log(car);
// }

// const person = {
//     firstName: 'Eugene',
//     lastName: 'Kiselev',
//     languages: ['ru', 'en', 'ky'],
//     hasWife: true,
//     greet: function () {
//         console.log(`Hello) My name is ${this.firstName}`)
//     }
// }

// person.greet();

// const firstName = 'Eugene'
// const age = 22
// console.log(firstName.toLowerCase());
// console.log(firstName.toUpperCase());

// function logPerson(s, name, age) {
//     console.log(s);
//     console.log(name);
//     console.log(age);
//     return 'Info about person'
// }

// const output = logPerson `Name: ${firstName} Age: ${age}!`
// console.log(output);


//Function declaration
function greet(name) {
    console.log('Hello - ' + name);
}

//function expression
const greet2 = function (name) {
    console.log('Hello 2 - ' + name);
}

// greet('Eugene')
// greet2('Eugene')

// console.log(typeof greet);
// console.log(typeofа greet2);
// console.dir(greet);
// let counter = 0;
// setInterval(() => console.log(++counter), 1000)


// function multiply(number) {
//     return function (secondNumber) {
//         return number * secondNumber
//     }
// }

// const doubler = multiply(2)

// console.log(doubler(10));
// console.log(doubler(5));
// console.log(doubler(3  ));

// const text = 'I love js'

// console.log(text.split('').reverse().join(''));

// const person = {
//     name: 'Eugene',
//     age: 22,
//     married: true,
//     skills: ['csharp', 'javascript', 'golang', 'python'],
//     info() {
//         console.log('this: ', this);
//         console.info('Информация про человека по имени: ', this.name)
//     }
// }
// console.log(Object.keys(person));

// person.info()

// const logger = {
//     keys() {
//         console.log('Object keys: ', Object.keys(this))
//     },

//     keysAndValues() {
//         Object.keys(this).forEach(function (key) {
//             console.log(`"${key}" : ${this[key]}`)
//         }.bind(this))
//     }
// }

// const bound = logger.keys.bind(person)
// bound()

// logger.keysAndValues.call(person)
// logger.keysAndValues.apply(person)

const delay = (wait = 1000) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
            // reject('err78946')
        }, wait);
    })

    return promise
}

// delay(2500)
//     .then(() => console.log("after 2.5 sec"))
//     .catch((err) => console.error('Error: ', err))
//     .finally(() => console.log("finally"))

// async function asyncExample() {
//     await delay(3000)
// }

