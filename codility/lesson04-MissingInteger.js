const solution = (A) => {
  const positiveAry = [0]
  let result = 1
  A.forEach((v) => {
      if (v > 0) {
          positiveAry[v] = v
      }
  })

  const incorrectAry = []
  const correctAry = []
  for (let index = 0; index < positiveAry.length; index += 1) {
       if (index !== positiveAry[index]) incorrectAry.push(index)
       else correctAry.push(index)
  }

  if (correctAry.length === positiveAry.length) {
      result = correctAry.length
  } else if (incorrectAry.length > 0) {
      result = incorrectAry[0]
  }
  return result
}