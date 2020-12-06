const app = require('../src/app')

test('app.ts のテスト', () => {
  console.log = jest.fn()
  app()
  expect(console.log.mock.calls[0][0]).toBe(1)
})
