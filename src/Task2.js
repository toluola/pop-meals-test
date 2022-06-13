const mainArr = [1, 4, 1, 3, 1]

function sumArray(arr) {
  return arr.reduce((partialSum, a) => partialSum + a, 0);
}

function calcTime(arr) {
  let res = null
  arr.forEach((_num, index) => {
    const firstArray = arr.filter((_num, filtIndex) => filtIndex <= index)
    const secondArray = arr.filter((_num, filtIndex) => filtIndex > index)
    if (sumArray(firstArray) === sumArray(secondArray)) {
      return res = 1
    }
  })

  return res
}

calcTime(mainArr);