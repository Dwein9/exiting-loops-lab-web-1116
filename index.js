// findBy(array, findFn) which looks for a value in array based on the return value of findFn. Return null if the value isn't found.

function breakOut(array, changeValue, stopValue) {
  for (let i = 0, l = array.length; i < l; i++) {
    if ( array[i] === stopValue ) {
      break
    } else {
      array[i] = changeValue
    }
  }
  return array
}

function keepGoing(array, changeValue, skipValue) {
  for (let i = 0, l = array.length; i < l; i++) {
    if (array[i] === skipValue) {
      continue
      }
    array[i] = changeValue
  }
  return array
}

function findBy(array, findFn) {
    return array.find(findFn)
}
