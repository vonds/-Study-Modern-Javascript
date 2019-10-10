
// const johnHeight = 175
// const markHeight = 187
// const johnWeight = 68
// const markWeight = 77

// if ((johnHeight * johnHeight) / johnWeight < (markHeight & markHeight) / markWeight) {
//     console.log("Is mark's BMI higher than john's? True")
// } else {
//     console.log("Is mark's BMI higher than john's? False")
// }

// const johnAverage = (97 + 134 + 105) / 3
// const mikeAverage = (116 + 94 + 123) / 3
// const maryAverage = (97 + 134 + 105) / 3

// if (johnAverage > mikeAverage && johnAverage > maryAverage) {
//     console.log(`John is the winner with an average score of: ${johnAverage}`)
// } else if (mikeAverage > johnAverage && mikeAverage > maryAverage) {
//     console.log(`Mike is the winner with an average score of: ${mikeAverage}`)
// } else if (maryAverage > johnAverage && maryAverage > mikeAverage) {
//     console.log(`Mary is the winner with an average score of: ${maryAverage}`)
// } else {
//     console.log('There is a tie')
// }
function tipCalculator(arr) {
    let tips = []
    let totals = []
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] < 50) {
            tips.push(arr[i] * .2)
            totals.push(arr[i] * .2 + arr[i])
        } else if (arr[i] >= 50 && arr[i] <= 200) {
            tips.push(arr[i] * .15)
            totals.push(arr[i] * .15 + arr[i])
        } else if (arr[i] > 200) {
            tips.push(arr[i] * .1)
            totals.push(arr[i] * .1 + arr[i])

        }
    }
    console.log('this is the tips array', tips)
    console.log('this is the totals array', totals)
}
tipCalculator([124, 48, 268])
