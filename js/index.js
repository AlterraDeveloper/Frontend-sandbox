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

// function logChar(string, char) {
//     charQty = 0
//     for (let i = 0; i < string.length; i++) {
//         if (string.charAt(i) === char) charQty++;
//     }
//     return charQty;
// }

// console.log(logChar("qwertyasdqwe", 'i'));

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

// function sum(array) {
//     sumResult = 0
//     for (const item of array) {
//         sumResult += item
//     }
//     return sumResult;
// }

// function range(start, end) {
//     array = []
//     step = arguments[2] !== undefined ? arguments[2] : 1
//     for (let i = start; i <= end; i += step) {
//         array.push(i)
//     }
//     return array
// }

// function reverseArray(array) {
//     reversed = []
//     arrayLength = array.length
//     for (let i = 0; i < arrayLength; i++) {
//         reversed.push(array.pop())
//     }
//     return reversed
// }

// function reverseArrayInPlace(array) {
//     arrayLength = array.length
//     for (let i = 0; i < arrayLength; i++) {
//         array.shift(array.pop())
//     }
//     return reversed
// }
// console.log(sum(range(1, 10)));
// console.log(sum(range(1, 10, 2)));
// console.log(reverseArray(range(1, 10, 2)));
// console.log(reverseArrayInPlace(range(1, 10, 2)));

// let user = null
// console.log(user === null);
// console.log(user == null);

// function linkedListToString(list, output = '') {
//     output += list.value
//     if (list.rest === null) return output
//     return linkedListToString(list.rest, output + '->')
// }

// function arrayToList(array) {
// if (array.length === 0) return list
//     let list = {
//         value: array.pop(),
//         rest: {}
//     }
//     let current = list.rest
//     for (const item of array) {
//         current = {
//             value: item,
//             rest: {}
//         }
//         list.rest = current
//         current = current.rest
//         list = {}
//         for (let i = array.length - 1; i > -1; i--) {
//             list = prepend(array[i], list, i === array.length - 1)
//         }

//         return list
//     }
// }

// function listToArray(list, array = []) {
//     array.push(list.value)
//     if (list.rest === null) return array
//     return listToArray(list.rest, array)
// }

// function prepend(val, list, isFirst) {
//     newList = {
//         value: val,
//         rest: isFirst ? null : list
//     }
//     return newList
// }

// function nth(list, val) {
//     let current = list
//     let position = 0
//     while (current !== null) {
//         if (position === val) return current.value
//         current = current.rest
//         position++
//     }

//     return undefined
// }

// let linkedList = {
//     value: 178,
//     rest: {
//         value: 2324,
//         rest: {
//             value: 89,
//             rest: null
//         }
//     }
// }

// console.log(linkedListToString(linkedList))
// console.log(listToArray(linkedList))
// linkedList = prepend(7, linkedList)
// linkedList = prepend(6, linkedList)
// linkedList = prepend(5, linkedList)
// console.log(linkedListToString(linkedList))
// console.log(linkedListToString(arrayToList([1, 2, 3])));
// console.log(arrayToList([1, 2, 3]));
// console.log(linkedListToString(arrayToList([1, 2, 3])));
// console.log(nth(2, linkedList));
// console.log(nth(7489, linkedList));

// console.log(linkedListToString(arrayToList([10, 20])));
// console.log(arrayToList([10, 20]));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(listToArray(arrayToList([10, 20, 30])));
// // → [10, 20, 30]
// console.log(linkedListToString(prepend(10, prepend(20, null))));
// console.log(prepend(10, prepend(20, null)));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(nth(linkedList, 3));
// console.log(nth(arrayToList([10, 20, 30]), 1));
// console.log(typeof null);
// // → 20

//Deep Equal

// function deepEqual(first, second) {

//     firstType = typeof first
//     secondType = typeof second

//     if (firstType !== secondType) return false

//     if (firstType === 'object' && first !== null && second !== null) {

//         if (Object.keys(first).length === Object.keys(second).length) {

//             for (const key of Object.keys(first)) {
//                 if (deepEqual(first[key], second[key]) === false) return false
//             }
//             return true
//         }

//         return false;

//     } else {
//         return first === second
//     }

// }

// console.log(deepEqual(5, null)) // false
// console.log(deepEqual(null, 5)) //false
// console.log(deepEqual("hdvuie", 5)) //false
// console.log(deepEqual(10, 5)) //false
// console.log(deepEqual('scve', '')) // false
// console.log(deepEqual(null, null)) //true
// console.log(deepEqual('111', '111')) //true
// console.log(deepEqual(5, 5)) //true
// var obj = {
//     here: {
//         is: "an"
//     },
//     object: 2
// }
// console.log(deepEqual(obj, obj)) //true
// console.log(deepEqual(obj, {
//     here: 1,
//     object: 2
// })) //false
// console.log(deepEqual(obj, {
//     here: {
//         is: "an"
//     },
//     object: 2
// })); //true

// function noisy(f) {
//   return function (arg) {
//     console.log("calling with", arg);
//     var val = f(arg);
//     console.log("called with", arg, "- got", val);
//     return val;
//   };
// }

// noisy(Boolean)(0);
// noisy(Boolean)(1);

// function unless(test, then) {
//   if (!test) then();
// }

// function repeat(times, body) {
//   for (let i = 0; i < times; i++) {
//     body(i);
//   }
// }

// repeat(3, (n) => unless(n % 2, () => console.log(n, "is even")));

var ANCESTRY_FILE = JSON.stringify([
  {
    name: "Carolus Haverbeke",
    sex: "m",
    born: 1832,
    died: 1905,
    father: "Carel Haverbeke",
    mother: "Maria van Brussel",
  },
  {
    name: "Emma de Milliano",
    sex: "f",
    born: 1876,
    died: 1956,
    father: "Petrus de Milliano",
    mother: "Sophia van Damme",
  },
  {
    name: "Maria de Rycke",
    sex: "f",
    born: 1683,
    died: 1724,
    father: "Frederik de Rycke",
    mother: "Laurentia van Vlaenderen",
  },
  {
    name: "Jan van Brussel",
    sex: "m",
    born: 1714,
    died: 1748,
    father: "Jacobus van Brussel",
    mother: "Joanna van Rooten",
  },
  {
    name: "Philibert Haverbeke",
    sex: "m",
    born: 1907,
    died: 1997,
    father: "Emile Haverbeke",
    mother: "Emma de Milliano",
  },
  {
    name: "Jan Frans van Brussel",
    sex: "m",
    born: 1761,
    died: 1833,
    father: "Jacobus Bernardus van Brussel",
    mother: null,
  },
  {
    name: "Pauwels van Haverbeke",
    sex: "m",
    born: 1535,
    died: 1582,
    father: "N. van Haverbeke",
    mother: null,
  },
  {
    name: "Clara Aernoudts",
    sex: "f",
    born: 1918,
    died: 2012,
    father: "Henry Aernoudts",
    mother: "Sidonie Coene",
  },
  {
    name: "Emile Haverbeke",
    sex: "m",
    born: 1877,
    died: 1968,
    father: "Carolus Haverbeke",
    mother: "Maria Sturm",
  },
  {
    name: "Lieven de Causmaecker",
    sex: "m",
    born: 1696,
    died: 1724,
    father: "Carel de Causmaecker",
    mother: "Joanna Claes",
  },
  {
    name: "Pieter Haverbeke",
    sex: "m",
    born: 1602,
    died: 1642,
    father: "Lieven van Haverbeke",
    mother: null,
  },
  {
    name: "Livina Haverbeke",
    sex: "f",
    born: 1692,
    died: 1743,
    father: "Daniel Haverbeke",
    mother: "Joanna de Pape",
  },
  {
    name: "Pieter Bernard Haverbeke",
    sex: "m",
    born: 1695,
    died: 1762,
    father: "Willem Haverbeke",
    mother: "Petronella Wauters",
  },
  {
    name: "Lieven van Haverbeke",
    sex: "m",
    born: 1570,
    died: 1636,
    father: "Pauwels van Haverbeke",
    mother: "Lievijne Jans",
  },
  {
    name: "Joanna de Causmaecker",
    sex: "f",
    born: 1762,
    died: 1807,
    father: "Bernardus de Causmaecker",
    mother: null,
  },
  {
    name: "Willem Haverbeke",
    sex: "m",
    born: 1668,
    died: 1731,
    father: "Lieven Haverbeke",
    mother: "Elisabeth Hercke",
  },
  {
    name: "Pieter Antone Haverbeke",
    sex: "m",
    born: 1753,
    died: 1798,
    father: "Jan Francies Haverbeke",
    mother: "Petronella de Decker",
  },
  {
    name: "Maria van Brussel",
    sex: "f",
    born: 1801,
    died: 1834,
    father: "Jan Frans van Brussel",
    mother: "Joanna de Causmaecker",
  },
  {
    name: "Angela Haverbeke",
    sex: "f",
    born: 1728,
    died: 1734,
    father: "Pieter Bernard Haverbeke",
    mother: "Livina de Vrieze",
  },
  {
    name: "Elisabeth Haverbeke",
    sex: "f",
    born: 1711,
    died: 1754,
    father: "Jan Haverbeke",
    mother: "Maria de Rycke",
  },
  {
    name: "Lievijne Jans",
    sex: "f",
    born: 1542,
    died: 1582,
    father: null,
    mother: null,
  },
  {
    name: "Bernardus de Causmaecker",
    sex: "m",
    born: 1721,
    died: 1789,
    father: "Lieven de Causmaecker",
    mother: "Livina Haverbeke",
  },
  {
    name: "Jacoba Lammens",
    sex: "f",
    born: 1699,
    died: 1740,
    father: "Lieven Lammens",
    mother: "Livina de Vrieze",
  },
  {
    name: "Pieter de Decker",
    sex: "m",
    born: 1705,
    died: 1780,
    father: "Joos de Decker",
    mother: "Petronella van de Steene",
  },
  {
    name: "Joanna de Pape",
    sex: "f",
    born: 1654,
    died: 1723,
    father: "Vincent de Pape",
    mother: "Petronella Wauters",
  },
  {
    name: "Daniel Haverbeke",
    sex: "m",
    born: 1652,
    died: 1723,
    father: "Lieven Haverbeke",
    mother: "Elisabeth Hercke",
  },
  {
    name: "Lieven Haverbeke",
    sex: "m",
    born: 1631,
    died: 1676,
    father: "Pieter Haverbeke",
    mother: "Anna van Hecke",
  },
  {
    name: "Martina de Pape",
    sex: "f",
    born: 1666,
    died: 1727,
    father: "Vincent de Pape",
    mother: "Petronella Wauters",
  },
  {
    name: "Jan Francies Haverbeke",
    sex: "m",
    born: 1725,
    died: 1779,
    father: "Pieter Bernard Haverbeke",
    mother: "Livina de Vrieze",
  },
  {
    name: "Maria Haverbeke",
    sex: "m",
    born: 1905,
    died: 1997,
    father: "Emile Haverbeke",
    mother: "Emma de Milliano",
  },
  {
    name: "Petronella de Decker",
    sex: "f",
    born: 1731,
    died: 1781,
    father: "Pieter de Decker",
    mother: "Livina Haverbeke",
  },
  {
    name: "Livina Sierens",
    sex: "f",
    born: 1761,
    died: 1826,
    father: "Jan Sierens",
    mother: "Maria van Waes",
  },
  {
    name: "Laurentia Haverbeke",
    sex: "f",
    born: 1710,
    died: 1786,
    father: "Jan Haverbeke",
    mother: "Maria de Rycke",
  },
  {
    name: "Carel Haverbeke",
    sex: "m",
    born: 1796,
    died: 1837,
    father: "Pieter Antone Haverbeke",
    mother: "Livina Sierens",
  },
  {
    name: "Elisabeth Hercke",
    sex: "f",
    born: 1632,
    died: 1674,
    father: "Willem Hercke",
    mother: "Margriet de Brabander",
  },
  {
    name: "Jan Haverbeke",
    sex: "m",
    born: 1671,
    died: 1731,
    father: "Lieven Haverbeke",
    mother: "Elisabeth Hercke",
  },
  {
    name: "Anna van Hecke",
    sex: "f",
    born: 1607,
    died: 1670,
    father: "Paschasius van Hecke",
    mother: "Martijntken Beelaert",
  },
  {
    name: "Maria Sturm",
    sex: "f",
    born: 1835,
    died: 1917,
    father: "Charles Sturm",
    mother: "Seraphina Spelier",
  },
  {
    name: "Jacobus Bernardus van Brussel",
    sex: "m",
    born: 1736,
    died: 1809,
    father: "Jan van Brussel",
    mother: "Elisabeth Haverbeke",
  },
]);

var ancestry = JSON.parse(ANCESTRY_FILE);
console.log(ancestry.length);

console.log(
  ancestry
    .filter((human) => human.born > 1900 && human.born < 1925)
    .map((human) => human.name)
);

console.log(
  ancestry.reduce((human, current) => {
    if (current.born < human.born) return current;
    return human;
  })
);

let male = (record) => record.sex === "m";
let female = (record) => record.sex === "f";
let age = (record) => record.died - record.born;

let average = (array) => array.reduce((a, b) => a + b) / array.length;

console.log(average(ancestry.filter(male).map(age)));
console.log(average(ancestry.filter(female).map(age)));

let arrays = [[1, 2, 3], [4, 5], [6]];
let fold = (array) => {
  return array.reduce((result, current) => result.concat(current));
};
console.log(fold(arrays));
