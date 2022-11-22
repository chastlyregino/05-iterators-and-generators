/* eslint-disable no-restricted-syntax */
/* eslint-disable func-names */
/* eslint-disable object-shorthand */

function iteratableFibonacci(number) {
  let counter = 0
  let value = 0
  let first = 0
  let second = 1

  return {
    [Symbol.iterator]: function () {
      return {
        next() {
          let result
          if (counter < number) {
            result = { value, done: false }
            value = first + second
            if (counter !== 0) {
              first = second
              second = value
            }
            counter += 1
            return result
          }
          return { value, done: true }
        },
      }
    },
  }
}

iteratableFibonacci(10)
