const mathOperations = {
  sum: function (a, b) { return a + b; },
  diff: function (a, b) { return a - b; },
  product: function (a, b) { return a * b }
}

test("Test sum", () => {
  expect(mathOperations.sum(0.1, 0.2)).toBeCloseTo(0.3)
})

test("Test diff", () => {
  expect(mathOperations.diff(4, 3)).toBe(1)
})

test("Test product", () => {
  expect(mathOperations.product(4, 3)).toBe(12)
})
