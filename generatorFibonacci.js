function generatorFibonacci(number) {
  let counter = 0
  let value = 0
  let first = 0
  let second = 1

  return function* generateFibonacci() {
    do {
      yield value
      value = first + second
      if (counter !== 0) {
        first = second
        second = value
      }
      counter += 1
    } while (counter < number)

    return value
  }
}

const generateSequence = generatorFibonacci(10)
const finalSequence = generateSequence()

console.log([...finalSequence])
