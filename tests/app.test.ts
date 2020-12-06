import { toFizzBuzz } from "../src/lib/FizzBuzz";

test('ユニットテスト #toFizzBuzz', () => {
  expect(toFizzBuzz(1)).toBe(1)
  expect(toFizzBuzz(3)).toBe('Fizz')
  expect(toFizzBuzz(5)).toBe('Buzz')
  expect(toFizzBuzz(15)).toBe('FizzBuzz')
  expect(toFizzBuzz(95)).toBe('FizzBuzz')
  expect(toFizzBuzz(99)).toBe('Fizz')
  expect(toFizzBuzz(100)).toBe('Buzz')
})
