let array = [2, 3, 6, 6, 5, 7, 9, 12, 8, 10, 15]

function getSecondLargest(nums) {

    let largestNumber = 0
    let secondLargestNumber = 0

    for (let i = 0; i < nums.length; i++) {

        if (largestNumber < nums[i]) {
            largestNumber = nums[i]

        }
    }

    array.splice(array.indexOf(largestNumber), 1)
    // console.log(array)

    number()

    function number() {
        for (let i = 0; i < nums.length; i++) {

            if (secondLargestNumber < nums[i] && nums[i] !== largestNumber) {
                secondLargestNumber = nums[i]
            }

        }
        console.log(`largest: ${largestNumber}`)
        console.log(`second largest: ${secondLargestNumber}`)
        // console.log(array)
    }
}

getSecondLargest(array)


let array = [2, 3, 6, 6, 5];
function getSecondLargest(nums) {
    let largestNum = Math.max(...nums);
    nums = nums.filter(num => num !== largestNum)
    return Math.max(...nums);

}

console.log(getSecondLargest(array));