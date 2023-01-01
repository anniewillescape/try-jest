import * as calc from "../calc";

test("adds 1 + 2 to equal 3", () => {
  expect(calc.sum(1, 2)).toBe(3);
});

test("adds -1 + -1 to equals -2", () => {
  expect(calc.sum(-1, -1)).toBe(-2);
});

test("subtruct 2 - 1 to equal 1", () => {
  expect(calc.sub(2, 1)).toBe(1);
});
