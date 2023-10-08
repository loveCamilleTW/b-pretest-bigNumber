import { describe, expect, test } from "vitest";
import { BigNumber } from "./BigNumber";

describe("BigNumber", () => {
  describe("constructor", () => {
    test("1 should be 1", () => {
      const input = "1";
      const num = new BigNumber(input);
      const actual = num.toString();

      expect(actual).toBe(input);
    });

    test("15 should be 15", () => {
      const input = "15";
      const num = new BigNumber(input);
      const actual = num.toString();

      expect(actual).toBe(input);
    });

    test("99999 should be 99999", () => {
      const input = "99999";
      const num = new BigNumber(input);
      const actual = num.toString();

      expect(actual).toBe(input);
    });
  });

  describe("add", () => {
    test("999 + 1 should be 1000", () => {
      const num = new BigNumber("999");
      num.add(1);

      const actual = num.toString();
      expect(actual).toBe("1000");
    });

    test("2019 + 1 should be 2020", () => {
      const num = new BigNumber("2019");
      num.add(1);

      const actual = num.toString();
      expect(actual).toBe("2020");
    });
  });

  describe("subtract", () => {
    test("2 - 1 should be 1", () => {
      const num = new BigNumber("2");
      num.subtract(1);

      const actual = num.toString();
      expect(actual).toBe("1");
    });

    test("100 - 1 should be 99", () => {
      const num = new BigNumber("100");
      num.subtract(1);

      const actual = num.toString();
      expect(actual).toBe("99");
    });
  });

  describe("divideBy2", () => {
    test("2 divide by 2 should be 1", () => {
      const num = new BigNumber("2");
      num.divideBy2();

      const actual = num.toString();
      expect(actual).toBe("1");
    });

    test("30 divide by 2 should be 15", () => {
      const num = new BigNumber("30");
      num.divideBy2();

      const actual = num.toString();
      expect(actual).toBe("15");
    });

    test("103 divide by 2 should be 51", () => {
      const num = new BigNumber("103");
      num.divideBy2();

      const actual = num.toString();
      expect(actual).toBe("51");
    });
  });
});
