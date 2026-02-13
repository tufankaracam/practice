const { sum } = require("../src/utils");

describe("sum", () => {
  test("2 + 3 = 5 olmalı", () => {
    expect(sum(2, 3)).toBe(5);
  });

  test("negatif sayılar çalışmalı", () => {
    expect(sum(-1, -4)).toBe(-5);
  });

  test("0 ile toplama", () => {
    expect(sum(0, 7)).toBe(7);
  });
});