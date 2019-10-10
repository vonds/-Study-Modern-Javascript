
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
// function tipCalculator(arr) {
//     let tips = []
//     let totals = []
//     for (let i = 0; i <= arr.length; i++) {
//         if (arr[i] < 50) {
//             tips.push(arr[i] * .2)
//             totals.push(arr[i] * .2 + arr[i])
//         } else if (arr[i] >= 50 && arr[i] <= 200) {
//             tips.push(arr[i] * .15)
//             totals.push(arr[i] * .15 + arr[i])
//         } else if (arr[i] > 200) {
//             tips.push(arr[i] * .1)
//             totals.push(arr[i] * .1 + arr[i])

//         }
//     }
//     console.log('this is the tips array', tips)
//     console.log('this is the totals array', totals)
// }
// tipCalculator([124, 48, 268])


// const john = {
//     name: 'John',
//     height: 1.77,
//     mass: 81.6
// }

// const mark = {
//     name: 'Mark',
//     height: 1.77,
//     mass: 81.6
// }

// const johnBMI = john.mass / (john.height * john.height)
// const markBMI = mark.mass / (mark.height * mark.height)

// if (johnBMI < markBMI) {
//     console.log("Is mark's BMI higher than john's? True")
// } else if (johnBMI > markBMI) {
//     console.log("Is mark's BMI higher than john's? False")
// } else {
//     console.log('they have the same BMI')
// }

function tipCalculator(name, arr) {
    let avgTip = 0
    let percentage
    for (let i = 0; i <= arr.length; i++) {
        if (name === 'Mark') {
            if (arr[i] < 50) {
                percentage = .2;
                avgTip += (arr[i] * percentage) / arr.length
            } else if (arr[i] >= 50 && arr[i] <= 200) {
                percentage = .15;
                avgTip += (arr[i] * percentage) / arr.length
            } else if (arr[i] > 200) {
                percentage = .1;
                avgTip += (arr[i] * percentage) / arr.length
            }
        }

        if (name === 'John') {
            if (arr[i] < 100) {
                percentage = .2;
                avgTip += (arr[i] * percentage) / arr.length
            } else if (arr[i] >= 100 && arr[i] <= 300) {
                percentage = .1;
                avgTip += (arr[i] * percentage) / arr.length
            } else if (arr[i] > 300) {
                percentage = .25;
                avgTip += (arr[i] * percentage) / arr.length
            }
        }

    }
    return avgTip

}

const johnTipTotal = tipCalculator('John', [124, 48, 268])
const markTipTotal = tipCalculator('Mark', [77, 375, 110, 45])

if (johnTipTotal > markTipTotal) {
    console.log(`John's families tip total was higher. ${johnTipTotal}`)
} else if (johnTipTotal < markTipTotal) {
    console.log(`Mark's families tip total was higher. ${markTipTotal}`)
} else {
    console.log('Both families tip total were the same')
}