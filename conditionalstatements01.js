function getLetter(s) {
    let letter = "";
    // Write your code here
    switch (s[0]) {
        case 'a' || 'e' || 'i' || 'o' || 'u':
            letter = 'A'
            break;
        case 'b' || 'c' || 'd' || 'f' || 'g':
            letter = 'B'
            break;
        case 'h' || 'j' || 'k' || 'l' || 'm':
            letter = 'C'
            break;
        case 'n' || 'p' || 'q' || 'r' || 's':
            letter = 'D'
            break;
        case 't':
        case 'v':
        case 'w':
        case 'x':
        case 'y':
        case 'z':
            letter = 'D'
            break;
    }

    console.log(letter)
    // return letter;
}

getLetter('zyxya')