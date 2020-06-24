// 'use strict';
// process.stdin.resume();
// process.stdin.setEncoding('utf-8');
// let inputString = '';
// let currentLine = 0;
// process.stdin.on('data', inputStdin => {
//     inputString += inputStdin;
// });
// process.stdin.on('end', _ => {
//     inputString = inputString.trim().split('\n').map(string => {
//         return string.trim();
//     });
//     main();
// });
// function readLine() {
//     return inputString[currentLine++];
// }
// function getLetter(s) {
//     let letter;
//     // Write your code here
//     switch (true) {
//         case 'aeiou'.includes(s[0]):
//             letter = 'A';
//             break;
//         case 'bcdfg'.includes(s[0]):
//             letter = 'B';
//             break;
//         case 'hjklm'.includes(s[0]):
//             letter = 'C';
//             break;
//         case 'npqrstvwxyz'.includes(s[0]):
//             letter = 'D';
//             break;
//     }
//     return letter;
// }




function vowelsAndConsonants(s) {
    const theWord = s;
    for (let i = 0; i < s.length; i++) {
        let word = s.split('')
        if (word[i] == 'a' || word[i] == 'e' || word[i] == 'i' || word[i] == 'o' || word[i] == 'u') {
            console.log(word[i])

        }

        // else if (i == s.length - 1) {

        //     consonants(theWord);
        // }

    }
    consonants(theWord)

} function consonants(w) {
    for (let j = 0; j < w.length; j++) {
        let newWord = w.split('')
        if (newWord[j] == 'a' || newWord[j] == 'e' || newWord[j] == 'i' || newWord[j] == 'o' || newWord[j] == 'u') { } else {
            console.log(newWord[j])
        }

    }
}

vowelsAndConsonants("learnjavascriptloopsinhackerrankweekofcode")