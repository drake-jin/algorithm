const solution = (ary, search) => {
  let timeComplexity = 1
  let worstTimeComplexity = Math.log2(ary.length - 1)
  let left = 0;
  let right = ary.length - 1
  let pivot

  let result = -1
  for (let index = 0; index < worstTimeComplexity; index += 1) {
    pivot = Math.round((left + right) / 2)
    if (search === ary[pivot]) {
      result = pivot
      break;
    } else if (search < ary[pivot]) {
      right = pivot - 1
    } else {
      left = pivot + 1
    }
    timeComplexity += 1
  }

  console.log(`timeComplexity: ${timeComplexity}, worstTimeComplexity: ${worstTimeComplexity}`)
  return result
}


const sequence = Array.from({ length: 10000000 }, (_, i) => i )
console.log(sequence)
const testCase = [
  { ary: sequence, search: 1 },
  { ary: sequence, search: 2 },
  { ary: sequence, search: 3 },
  { ary: sequence, search: 4 },
  { ary: sequence, search: 5 },
  { ary: sequence, search: 6 },
  { ary: sequence, search: 7 },
  { ary: sequence, search: 8 },
  { ary: sequence, search: 9 },
]

const correctCase = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
]

const result = testCase.filter((test, index) => {ls
  console.time(`Case ${index}`)
  const answer = solution(test.ary, test.search)
  console.log(`Answer: ${answer}, correct: ${correctCase[index]}, result: ${answer === correctCase[index]}`)
  console.timeEnd(`Case ${index}`)
  console.log()
  console.log()
  return answer === correctCase[index]
})

console.log('================================================')
console.log(`All pass ${result.length === correctCase.length}`)

