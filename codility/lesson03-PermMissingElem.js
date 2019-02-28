const solution = (A) => {
    
  const ary = [0]
  let result = 0
  
  A.forEach((v) => {
      ary[v] = v
  })

  for (let index = 0; index < ary.length; index += 1) {
      if (index !== ary[index]) {
          result = index
          break;
      }
  }    
  
  if (A.length === 0) return 1
  else if (A.length > 0 && result === 0) return A.length + 1
  else return result
}
