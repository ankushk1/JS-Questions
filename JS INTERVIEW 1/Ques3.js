//loop through each char in string

function strContains(str, char) {
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == char) {
            return true;
        }
    }
    return false;
}

var s = "I am a string";
console.log(strContains(s, '@'));
console.log(strContains(s, 'a'));

