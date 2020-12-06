export function toFizzBuzz(num: number) {
  if (isFizz(num) && isBuzz(num)) { return 'FizzBuzz' }
  if (isFizz(num)) { return 'Fizz' }
  if (isBuzz(num)) { return 'Buzz' }
  return num
}

function isFizz(num: number) {
  return num % 3 == 0
}

function isBuzz(num: number) {
  return num % 5 == 0
}