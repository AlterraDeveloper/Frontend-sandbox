// function findSolution(target) {
//     function find(start, history) {
//         if (start == target)
//             return history;
//         else if (start > target)
//             return null;
//         else
//             return find(start + 5, '(' + history + ' + 5)') ||
//                 find(start * 3, '(' + history + ' * 3)');
//     }
//     return find(1, "1");
// }

// function min(firstNum, secondNum) {
//     return firstNum < secondNum ? firstNum : secondNum;
// }

// function isEven(number) {
//     number = number > 0 ? number : -number;
//     if (number == 0) return true;
//     else if (number == 1) return false;
//     else return isEven(number - 2);
// }
// console.log(isEven(50));
// console.log(isEven(75));
// console.log(isEven(-2));

// function countChar(string, char) {
//     charQty = 0
//     for (let i = 0; i < string.length; i++) {
//         if (string.charAt(i) === char) charQty++;
//     }
//     return charQty;
// }

// console.log(countChar("qwertyasdqwe", 'i'));

// function phi(table) {
//     return (table[3] * table[0] - table[2] * table[1]) /
//         Math.sqrt((table[2] + table[3]) *
//             (table[0] + table[1]) *
//             (table[1] + table[3]) *
//             (table[0] + table[2]))
// }

// //from url https://eloquentjavascript.net/2nd_edition/code/jacques_journal.js
// let JOURNAL = [{
//         "events": ["carrot", "exercise", "weekend"],
//         "squirrel": false
//     },
//     {
//         "events": ["bread", "pudding", "brushed teeth", "weekend", "touched tree"],
//         "squirrel": false
//     },
//     {
//         "events": ["carrot", "nachos", "brushed teeth", "cycling", "weekend"],
//         "squirrel": false
//     },
//     {
//         "events": ["brussel sprouts", "ice cream", "brushed teeth", "computer", "weekend"],
//         "squirrel": false
//     },
//     {
//         "events": ["potatoes", "candy", "brushed teeth", "exercise", "weekend", "dentist"],
//         "squirrel": false
//     },
//     {
//         "events": ["brussel sprouts", "pudding", "brushed teeth", "running", "weekend"],
//         "squirrel": false
//     },
//     {
//         "events": ["pizza", "brushed teeth", "computer", "work", "touched tree"],
//         "squirrel": false
//     },
//     {
//         "events": ["bread", "beer", "brushed teeth", "cycling", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["cauliflower", "brushed teeth", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["pizza", "brushed teeth", "cycling", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["lasagna", "nachos", "brushed teeth", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["brushed teeth", "weekend", "touched tree"],
//         "squirrel": false
//     },
//     {
//         "events": ["lettuce", "brushed teeth", "television", "weekend"],
//         "squirrel": false
//     },
//     {
//         "events": ["spaghetti", "brushed teeth", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["brushed teeth", "computer", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["lettuce", "nachos", "brushed teeth", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["carrot", "brushed teeth", "running", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["brushed teeth", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["cauliflower", "reading", "weekend"],
//         "squirrel": false
//     },
//     {
//         "events": ["bread", "brushed teeth", "weekend"],
//         "squirrel": false
//     },
//     {
//         "events": ["lasagna", "brushed teeth", "exercise", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["spaghetti", "brushed teeth", "reading", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["carrot", "ice cream", "brushed teeth", "television", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["spaghetti", "nachos", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["cauliflower", "ice cream", "brushed teeth", "cycling", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["spaghetti", "peanuts", "computer", "weekend"],
//         "squirrel": true
//     },
//     {
//         "events": ["potatoes", "ice cream", "brushed teeth", "computer", "weekend"],
//         "squirrel": false
//     },
//     {
//         "events": ["potatoes", "ice cream", "brushed teeth", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["peanuts", "brushed teeth", "running", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["potatoes", "exercise", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["pizza", "ice cream", "computer", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["lasagna", "ice cream", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["cauliflower", "candy", "reading", "weekend"],
//         "squirrel": false
//     },
//     {
//         "events": ["lasagna", "nachos", "brushed teeth", "running", "weekend"],
//         "squirrel": false
//     },
//     {
//         "events": ["potatoes", "brushed teeth", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["carrot", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["pizza", "beer", "work", "dentist"],
//         "squirrel": false
//     },
//     {
//         "events": ["lasagna", "pudding", "cycling", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["spaghetti", "brushed teeth", "reading", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["spaghetti", "pudding", "television", "weekend"],
//         "squirrel": false
//     },
//     {
//         "events": ["bread", "brushed teeth", "exercise", "weekend"],
//         "squirrel": false
//     },
//     {
//         "events": ["lasagna", "peanuts", "work"],
//         "squirrel": true
//     },
//     {
//         "events": ["pizza", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["potatoes", "exercise", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["brushed teeth", "exercise", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["spaghetti", "brushed teeth", "television", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["pizza", "cycling", "weekend"],
//         "squirrel": false
//     },
//     {
//         "events": ["carrot", "brushed teeth", "weekend"],
//         "squirrel": false
//     },
//     {
//         "events": ["carrot", "beer", "brushed teeth", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["pizza", "peanuts", "candy", "work"],
//         "squirrel": true
//     },
//     {
//         "events": ["carrot", "peanuts", "brushed teeth", "reading", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["potatoes", "peanuts", "brushed teeth", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["carrot", "nachos", "brushed teeth", "exercise", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["pizza", "peanuts", "brushed teeth", "television", "weekend"],
//         "squirrel": false
//     },
//     {
//         "events": ["lasagna", "brushed teeth", "cycling", "weekend"],
//         "squirrel": false
//     },
//     {
//         "events": ["cauliflower", "peanuts", "brushed teeth", "computer", "work", "touched tree"],
//         "squirrel": false
//     },
//     {
//         "events": ["lettuce", "brushed teeth", "television", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["potatoes", "brushed teeth", "computer", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["bread", "candy", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["potatoes", "nachos", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["carrot", "pudding", "brushed teeth", "weekend"],
//         "squirrel": false
//     },
//     {
//         "events": ["carrot", "brushed teeth", "exercise", "weekend", "touched tree"],
//         "squirrel": false
//     },
//     {
//         "events": ["brussel sprouts", "running", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["brushed teeth", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["lettuce", "brushed teeth", "running", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["candy", "brushed teeth", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["brussel sprouts", "brushed teeth", "computer", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["bread", "brushed teeth", "weekend"],
//         "squirrel": false
//     },
//     {
//         "events": ["cauliflower", "brushed teeth", "weekend"],
//         "squirrel": false
//     },
//     {
//         "events": ["spaghetti", "candy", "television", "work", "touched tree"],
//         "squirrel": false
//     },
//     {
//         "events": ["carrot", "pudding", "brushed teeth", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["lettuce", "brushed teeth", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["carrot", "ice cream", "brushed teeth", "cycling", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["pizza", "brushed teeth", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["spaghetti", "peanuts", "exercise", "weekend"],
//         "squirrel": true
//     },
//     {
//         "events": ["bread", "beer", "computer", "weekend", "touched tree"],
//         "squirrel": false
//     },
//     {
//         "events": ["brushed teeth", "running", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["lettuce", "peanuts", "brushed teeth", "work", "touched tree"],
//         "squirrel": false
//     },
//     {
//         "events": ["lasagna", "brushed teeth", "television", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["cauliflower", "brushed teeth", "running", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["carrot", "brushed teeth", "running", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["carrot", "reading", "weekend"],
//         "squirrel": false
//     },
//     {
//         "events": ["carrot", "peanuts", "reading", "weekend"],
//         "squirrel": true
//     },
//     {
//         "events": ["potatoes", "brushed teeth", "running", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["lasagna", "ice cream", "work", "touched tree"],
//         "squirrel": false
//     },
//     {
//         "events": ["cauliflower", "peanuts", "brushed teeth", "cycling", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["pizza", "brushed teeth", "running", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["lettuce", "brushed teeth", "work"],
//         "squirrel": false
//     },
//     {
//         "events": ["bread", "brushed teeth", "television", "weekend"],
//         "squirrel": false
//     },
//     {
//         "events": ["cauliflower", "peanuts", "brushed teeth", "weekend"],
//         "squirrel": false
//     }
// ];


// function hasEvent(event, entry) {
//     return entry.events.indexOf(event) != -1
// }

// function tableFor(event, journal) {
//     var table = [0, 0, 0, 0]
//     for (const entry of journal) {
//         let index = 0
//         if (hasEvent(event, entry)) index += 1
//         if (entry.squirrel) index += 2
//         table[index] += 1
//     }
//     return table
// }

// const correlations = {}

// for (const entry of JOURNAL) {
//     for (const event of entry.events) {
//         if (event in correlations) continue;
//         correlations[event] = phi(tableFor(event, JOURNAL))
//         if (correlations[event] > 0.1 || correlations[event] < -0.1)
//             console.log(event + ' : ' + correlations[event]);
//     }
// }

// const actionX = 'action X'

// for (const entry of JOURNAL) {
//     if (hasEvent('peanuts', entry) && !hasEvent('brushed teeth', entry))
//         entry.events.push(actionX)
// }

// console.log(phi(tableFor(actionX, JOURNAL)));

function sum(array) {
    sumResult = 0
    for (const item of array) {
        sumResult += item
    }
    return sumResult;
}

function range(start, end) {
    array = []
    step = arguments[2] !== undefined ? arguments[2] : 1
    for (let i = start; i <= end; i += step) {
        array.push(i)
    }
    return array
}

function reverseArray(array) {
    reversed = []
    arrayLength = array.length
    for (let i = 0; i < arrayLength; i++) {
        reversed.push(array.pop())
    }
    return reversed
}

function reverseArrayInPlace(array) {
    arrayLength = array.length
    for (let i = 0; i < arrayLength; i++) {
        array.shift(array.pop())
    }
    return reversed
}
// console.log(sum(range(1, 10)));
// console.log(sum(range(1, 10, 2)));
// console.log(reverseArray(range(1, 10, 2)));
// console.log(reverseArrayInPlace(range(1, 10, 2)));

// let user = null
// console.log(user === null);
// console.log(user == null);

function linkedListToString(list, output = '') {
    output += list.value
    if (list.rest === null) return output
    return linkedListToString(list.rest, output + '->')
}

function arrayToList(array) {
    let list = {}
    for (let i = array.length - 1; i > -1; i--) {
        list = prepend(array[i], list, i === array.length - 1)
    }

    return list
}

function listToArray(list, array = []) {
    array.push(list.value)
    if (list.rest === null) return array
    return listToArray(list.rest, array)
}

function prepend(val, list, isFirst) {
    newList = {
        value: val,
        rest: isFirst ? null : list
    }
    return newList
}

function nth(list, val) {
    let current = list
    let position = 0
    while (current !== null) {
        if (position === val) return current.value
        current = current.rest
        position++
    }

    return undefined
}

let linkedList = {
    value: 178,
    rest: {
        value: 2324,
        rest: {
            value: 89,
            rest: null
        }
    }
}

// console.log(linkedListToString(linkedList))
// console.log(listToArray(linkedList))
// linkedList = prepend(7, linkedList)
// linkedList = prepend(6, linkedList)
// linkedList = prepend(5, linkedList)
// console.log(linkedListToString(linkedList))
// console.log(arrayToList([1, 2, 3]));
// console.log(linkedListToString(arrayToList([1, 2, 3])));
// console.log(nth(2, linkedList));
// console.log(nth(7489, linkedList));

console.log(linkedListToString(arrayToList([10, 20])));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(linkedListToString(prepend(10, prepend(20, null))));
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(linkedList, 1));
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20