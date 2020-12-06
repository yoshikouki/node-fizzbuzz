import { toFizzBuzz } from "./lib/FizzBuzz"

const game = () => {
  for (let i = 1; i <= 100; i++) {
    console.log(toFizzBuzz(i))
  }
}

game()
