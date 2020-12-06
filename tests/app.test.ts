const app = require('../src/app')

test('app.ts のテスト', () => {
  expect(app.app()).toBe(1)
})
