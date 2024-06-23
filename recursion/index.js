
// recursion creates stack and each get its owne copy of variable

function factorial(n) {
    if (n == 0) {
        return 1;
    }
    return n * factorial(n - 1);
}


function reverseString(str) {
    if (str.length === 0) {
        return
    }

    return str[length - 1] + reverseString(str.substring(0, length))
}

function vowlesCount(str) {
    console.log(str)
    if (str.length === 1) {
        return Number(isVowel(str[0]))
    }
    return vowlesCount(str.substring(0, str.length - 1)) + isVowel(str[str.length - 1])
}

function isVowel(character) {
    let lowercase = character.toLowerCase();
    let vowles = 'aeiou'
    if (vowles.includes(character)) {
        return true
    }
    return false
}

function firstOccurance(arr, findMe, currentIndex = 0) {
    if (arr.length === currentIndex) return -1;

    if (arr[currentIndex] === findMe) return currentIndex

    return firstOccurance(arr, findMe, currentIndex + 1)
}


function fibonacci(n) {
    if (n == 0 || n == 1)
        return n

    return fn(n - 1) + fn(n - 2)
}


function power(n, e) {
    if (e === 0) {
        return 1;
    }
    return (n * power(n, e - 1))
}

function nSum(n) {
    if (n === 1) return 1;

    return n + nSum(n - 1);
}

//  \t
// Input --> A nkit
// A + fn(" nkit") ---> fn('nkit') ---> n + fn(kit) ---> k + fn(it) ---> i+ fn(t) ---> t + fn("") ---> ""
// A + nkit        <--- nkit       <--- n + kit     <--- k + it     <--- i+ t     <--- t + ""     <--- ""
function removeTabsSpaces(str = '') {
    if (str.length === 0) return ""

    let firstChar = str[0];
    let restOfString = str.splice(1);

    if (firstChar === ' ' || firstChar === '\t') {
        return removeTabsSpaces(restOfString)
    }
    else {
        return firstChar + removeTabsSpaces(restOfString)
    }
}


//Input - aabcc
//output - abc

function removeAdjacentDuplicate(str) {
    if (str.length <= 1) {
        return str
    }

    if (str[0] !== str[1]) {
        return str[0] + removeAdjacentDuplicate(str.substring(1, str.length))
    }
    else {
        return removeAdjacentDuplicate(str.substring(1, str.length))
    }
}
//console.log(removeAdjacentDuplicate('AAnkit'))

function recursiveLength(str) {
    if (str === '') {
        return 0
    }
    return 1 + recursiveLength(str.substring(1))
}
//console.log(recursiveLength('Ankit'))

function pallindrome(str) {
    if (str.length <= 1) {
        return true;
    }
    if (str[0] === str[str.length - 1]) {
        return pallindrome(str.substring(1, str.length - 1))
    }
    else { return false; }


}
//console.log(pallindrome("ABA"))

function balanceParantheses(arr, startIndex, counter) {
    if (arr.length === startIndex) {
        return counter === 0
    }

    if (arr[startIndex] === '(') {
        return balanceParantheses(arr, startIndex + 1, counter + 1);
    }
    else if (arr[startIndex] === ')') {
        return balanceParantheses(arr, startIndex + 1, counter - 1);
    }
    else {
        return false;
    }
}