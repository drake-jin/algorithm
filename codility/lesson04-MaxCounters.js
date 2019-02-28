
const solution = (N, A) => {
    let matrixRow = Array.from({ length: N }, () => 0)

    let max = 0
    let nextMax = 0
    for (let K = 0; K < A.length; K += 1) {
        const X = A[K]
        if (X > N) {
            nextMax = max
        } else {
            const index = X - 1
            if (matrixRow[index] >= nextMax) {
                matrixRow[index] = matrixRow[index] + 1
            } else {
                matrixRow[index] = nextMax + 1
            }

            if (max >= matrixRow[index]) {
                max = max
            } else {
                max = matrixRow[index]
            }
        }
    }

    for (let index = 0; index < matrixRow.length; index += 1) {
        if (matrixRow[index] >= nextMax) {
            matrixRow[index] = matrixRow[index]
        } else {
            matrixRow[index] = nextMax
        }
    }
    return matrixRow
}

/*

const solution = (N, A) => {
    let matrixRow = Array.from({length: N}, () => 0);
    
    let max = 0
    let nextMax = 0
    for (let K = 0; K < A.length; K += 1) {
        const X = A[K]
        if (X > N) {
            nextMax = max
        } else {
            const temp = matrixRow[X - 1] >= nextMax ? matrixRow[X - 1] : nextMax
            matrixRow[X - 1] = temp + 1

            max = max >= matrixRow[X - 1] ? max : matrixRow[X - 1]
        }
    }

    for (let index = 0; index < matrixRow.length; index += 1) {
        matrixRow[index] = matrixRow[index] >= nextMax ? matrixRow[index] : nextMax
    }
    return matrixRow
}

*/

/*

const solution = (N, A) => {
  let matrixRow = Array.from({length: N}, () => 0);
  const matrix = A.map((X) => {
      if (X > N) {
          const max = matrixRow.reduce((prev, curr) => prev >= curr ? prev : curr)
          matrixRow = matrixRow.map(() => max)
      } else {
          matrixRow[X - 1] += 1 
      }
      // return Object.assign([], matrixRow)
      return matrixRow
  })
  return matrix[matrix.length -1]
}

*/