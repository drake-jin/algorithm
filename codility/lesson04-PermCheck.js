const solution = (A) => {
  const tempAry = [0]
  let result = 0
  A.forEach((v) => {
    tempAry[v] = v
  })

  if (A.length !== tempAry.length - 1) return result

  for (let index = 0; index < tempAry.length; index += 1) {
    if (index !== tempAry[index]) {
      result = 0
      break;
    } else {
      result = 1            
    }
  }
  return result
}