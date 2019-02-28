const solution = (N) => {
  let [firstPart, ...rest] = N
  let secondPart = rest.reduce((prev, curr) => prev + curr)
  let min = Infinity
  
  for (let index = 1; index < N.length; index++) {
      console.log(firstPart, secondPart, Math.abs(firstPart - secondPart))
      const difference = Math.abs(firstPart - secondPart)
      if (difference < min) {
          min = difference;
      }
      firstPart += N[index]
      secondPart -= N[index]
  }
  return min
}

/*

const solution = (A) => {
  const differenceItems = []
  const sum = A.reduce((a, b) => a + b)    
  
  let p = A[0]
  for (let index = 1; index < A.length; index += 1) {
      differenceItems.push(Math.abs(sum - (p * 2)))
      p += A[index]
  }
  const result = differenceItems.reduce((prev, curr) => prev - curr < 0 ? prev : curr)
  return result
}

*/