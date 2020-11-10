function findSolution(target) {
    function find(start, history) {
        if (start == target)
            return history;
        else if (start > target)
            return null;
        else
            return find(start + 5, '(' + history + ' + 5)') ||
                find(start * 3, '(' + history + ' * 3)');
    }
    return find(1, "1");
}

function min(firstNum, secondNum) {
    return firstNum < secondNum ? firstNum : secondNum;
}

function isEven(number) {
    number = number > 0 ? number : -number;
    if (number == 0) return true;
    else if (number == 1) return false;
    else return isEven(number - 2);
}
// console.log(isEven(50));
// console.log(isEven(75));
// console.log(isEven(-2));

function countChar(string, char) {
    charQty = 0
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === char) charQty++;
    }
    return charQty;
}

console.log(countChar("qwertyasdqwe", 'i'));