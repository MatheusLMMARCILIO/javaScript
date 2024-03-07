const numbers = [10, 18, 1, 15]

// let res = []

// for (const n of numbers) {
//     if (n > 10) {
//         res.push(n)
//     }
// }

// console.log(res)

const gt10 = function(item) {
    return item > 10
}



let res = numbers.filter(gt10)