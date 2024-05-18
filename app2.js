

function charCount(str, char) {

    let lowerCaseStr = str.toLowerCase();
    let lowerCaseChar = char.toLowerCase();

    let counter = 0;

    for (let i = 0; i < lowerCaseStr.length; i++) {

        if (lowerCaseStr[i] === lowerCaseChar) {
            counter++;
        }
    }
    return counter;
}

console.log(charCount("Abrakadabraaaaaaa", "a"));
console.log(charCount("hello", "h"));

