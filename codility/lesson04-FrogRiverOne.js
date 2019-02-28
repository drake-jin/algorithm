// 이거 문제 이해를 못하겠음 시발.. . 값이 .. position이 1, 2, 3, 4, 이렇게 순차적으로 있는 나뭇잎을 안밟아도 되는건가? 개 빡도네 진짜..
// 뭐 문제가 이딴식이여

// k : time
// A[k] ; position === N
// X : distance


const solution = (X, A) => {
  const tempMap = {}
  let leaves = 0
  let result = -1
  for (let index = 0; index < A.length; index += 1) {
      if (!tempMap[A[index]]) {
          tempMap[A[index]] = true
          leaves += 1
      }
      
      if (leaves === X) {
          result = index
          break;
      }
  }
  return result
}