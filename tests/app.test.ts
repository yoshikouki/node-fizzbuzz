import { toFizzBuzz } from "../src/lib/FizzBuzz";

describe('ユニットテスト #toFizzBuzz',() => {
  test('15の倍数は FizzBuzz', () => {
    expect(toFizzBuzz(15)).toBe('FizzBuzz')
    expect(toFizzBuzz(90)).toBe('FizzBuzz')
  })

  test('3の倍数で Fizz', () => {
    expect(toFizzBuzz(3)).toBe('Fizz')
    expect(toFizzBuzz(99)).toBe('Fizz')
  })

  test('5の倍数で Fizz', () => {
    expect(toFizzBuzz(5)).toBe('Buzz')
    expect(toFizzBuzz(100)).toBe('Buzz')
  })

  test('3,5の倍数でない場合はそのまま表示', () => {
    expect(toFizzBuzz(1)).toBe(1)
    expect(toFizzBuzz(98)).toBe(98)
  })
});
