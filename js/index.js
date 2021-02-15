// function createCalcFun(n) {
//     return function(){
//         console.log(n * 1000);
//     }
// }

// const fiveK = createCalcFun(5)
// fiveK() 

// function CreateIncrementor(n) {
//     return function (num) {
//         return n + num
//     }
// }

// const addOneTo = CreateIncrementor(1)
// console.log(addOneTo(10));


function urlGenerator(baseUrl) {
    return function(controller){
        return baseUrl + '/' + controller
    }
}

const accessToGit = urlGenerator('https://gitlab.ua')
// const accessToTrello = urlGenerator('https://trello.io')

console.log(accessToGit('auth'));
console.log(accessToGit('auth2'));
console.log(accessToGit('auth3'));
console.log(accessToGit('auth4'));
console.log(accessToGit('auth5'));
console.log(accessToGit('auth6'));
console.log(accessToGit('auth7'));
// console.log(accessToTrello('register/google/new'));


//моя версия
function bind(object, callbackfn){
    return callbackfn.call(object)
}

//версия Владилена более расширенная
function bindExt(context, fn){
    return function(...args) {
        fn.apply(context, args)
    }
}

function logPerson(){
    console.log(`Person: ${this.name} ${this.age} ${this.job}`);
}

const person1 = {
    name : 'Eugene',
    age: 22,
    job: 'FullStack'
} 

const person2 = {
    name : 'Ivan',
    age: 30,
    job: 'Backend'
} 

bind(person1, logPerson)
bind(person2, logPerson)
bindExt(person1, logPerson)()
bindExt(person2, logPerson)()