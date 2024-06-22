
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

console.log(vowlesCount('f'))