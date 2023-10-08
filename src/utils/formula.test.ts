import { describe, expect, test } from "vitest";
import { formula } from "./formula";

function mockFormula(input: string) {
  const n = Number(input);

  if (Number(n) % 2 === 0) {
    return (n / 2 + 2).toString();
  } else {
    return (-(Math.floor(n / 2) - 1)).toString();
  }
}

describe("mockFormula", () => {
  test("n = 1, ans equal = 1", () => {
    expect(mockFormula("1")).toBe("1");
  });

  test("n = 7, ans equal = -2", () => {
    expect(mockFormula("7")).toBe("-2");
  });

  test("n = 8, ans equal = 6", () => {
    expect(mockFormula("8")).toBe("6");
  });

  test("n = 9, ans equal = -3", () => {
    expect(mockFormula("9")).toBe("-3");
  });

  test("n = 10, ans equal = 7", () => {
    expect(mockFormula("10")).toBe("7");
  });

  test("n = 103, ans equal = -50", () => {
    expect(mockFormula("103")).toBe("-50");
  });
});

describe("formula", () => {
  test("n = 1, ans equal = 1", () => {
    expect(formula("1")).toBe("1");
  });

  test("n = 7, ans equal = -2", () => {
    expect(formula("7")).toBe("-2");
  });

  test("n = 8, ans equal = 6", () => {
    expect(formula("8")).toBe("6");
  });

  test("n = 9, ans equal = -3", () => {
    expect(formula("9")).toBe("-3");
  });

  test("n = 10, ans equal = 7", () => {
    expect(formula("10")).toBe("7");
  });

  test("n = 103, ans equal = -50", () => {
    expect(formula("103")).toBe("-50");
  });

  test("ans should equal to mockFormula", () => {
    const input = "99595959595955";
    expect(formula(input)).toBe(mockFormula(input));
  });
});
