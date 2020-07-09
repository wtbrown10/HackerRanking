function reverseString(s) {
    if (typeof s != 'string') {
        console.log(`s.split is not a function`)
        console.log(`${s}`)
    } else {
        let reverse = ''
        let word = s.split('')

        for (let i = 0; i < s.length; i++) {

            reverse += word.pop();


        }
        console.log(reverse)
    }
}

reverseString('hello')