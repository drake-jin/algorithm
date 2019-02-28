

const solution = (A, K) => {
  if (A.length === 0) return A
  else if (A.length === K) return A
  else {
    for (let index = 0; index < K; index += 1) A.splice(0, 0, A.pop())
    return A
  
  }
}


const testValue = [
  { ary: [], K: 3 },
  { ary: [3, 8, 9, 7, 6], K: 3 },
  { ary: [0, 0, 0], K: 1 },
  { ary: [1, 2, 3, 4], K: 4 },
  { ary: [], K: 10 },
  { ary: [-3, -8, -9, -7, -6], K: 3 },
  { ary: [0, 0, 0], K: 1 },
  { ary: [-1, -2, -3, -4], K: 4 },
]

testValue.forEach((v) => {
  console.log(solution(v.ary, v.K))
})

