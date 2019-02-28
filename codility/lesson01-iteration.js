// Goal Complexity
// expected worst-case time complexity is O(log(N));
// expected worst-case space complexity is O(1).

// O(log N) Case: https://stackoverflow.com/questions/2307283/what-does-olog-n-mean-exactly
// 1. the choice of the next element on which to perform some action is one of several possibilities, and only one will need to be chosen.
// 2. the elements on which the action is performed are digits of n
// 

// ---------- Maybe Best Practice -------------
const solution = (N) => {
  const Exponent = 2
  const log2 = Math.log(N) / Math.log(Exponent)
  const length = Math.floor(log2)

  let power = 0
  let zeroCount = 0
  const zeroCounts = []

  for(let index = length; index >= 0; index -= 1) {
    power = Exponent ** index
    if (N === 0) {
      break;
    } else if (N > power) {
      zeroCounts.push(zeroCount)
      zeroCount = 0
      N -= power
    } else if (N === power) {
      zeroCounts.push(zeroCount)
      break;
    } else {
      zeroCount += 1
    }
  }

  return zeroCounts.reduce((prev, curr) => prev - curr >= 0 ? prev : curr)
}

// ------ Second Worst Answer --------
// const solution = (N) => {
//   const inputValue = N.toString(2)
//   let zeroCounts = []
//   let zeroCount = 0

//   for (let index = 0; index < inputValue.length; index += 1) {
//     if (inputValue[index] === '0') {
//       zeroCount += 1
//     } else {
//       zeroCounts.push(zeroCount)
//       zeroCount = 0
//     }
//   }
//   zeroCounts = zeroCounts.filter(v => !!v)

//   if (zeroCounts.length === 0) return 0
//   else if (zeroCounts.length === 1) return zeroCounts[0]
//   else return zeroCounts.reduce((prev, curr) => prev - curr > 0 ? prev : curr)
// }

// ------ Worst Answer --------
/*
const solution = (N) => {
  const inputValue = N.toString(2)
  const split = inputValue.split('')
  const oneIndexesArray = split
    .map((v, i) => '1' === v ? i : false)
    .filter(v => v !== false)

  let results = []
  oneIndexesArray.reduce((prev, curr) => {
    results.push((curr - prev) - 1)
    return curr
  })
  results = results.filter(v => !!v)

  if (results.length === 0) {
    return 0
  } else if (results.length === 1) {
    return results[0]
  } else {
    return results.reduce((prev, curr) => prev - curr > 0 ? prev : curr)
  }
}
*/


const testValue = [
  1025,  // 10000000001
  1024,
  9,
  529,
  20,
  15,
  32,
  1025,
  2049,
  4097,
  4096,
  4095,
]

testValue.forEach((v) => {
  console.log(solution(v))
})