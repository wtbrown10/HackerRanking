function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI = 3.1415926535897931952662721893491

    let h = 5

    let r = h.toFixed(3)

    let area = PI * Math.pow(r, 2)

    let perim = 2 * PI * r

    // Print the area of the circle: 
    console.log(area)

    // Print the perimeter of the circle:
    console.log(perim)
}

main();

// let r = readLine();
// const PI = Math.PI;

// // Print the area of the circle:
// console.log(PI*r*r);
// // Print the perimeter of the circle:
// console.log(PI*2*r);