import * as calc from "./calculator.js";

describe("#add", () => {
  describe("Given two numbers are passed", () => {
    describe("When the numbers are 2 and 100", () => {
      it("Then it should return 102", () => {
        expect(calc.add(2, 100)).toBe(102);
      });
    });
    describe("When the numbers are -1 and 50", () => {
      it("Then it should return 49", () => {
        expect(calc.add(-1, 50)).toBe(49);
      });
    });
  });
});

describe("#subtract", () => {
  describe("Given two numbers are passed", () => {
    describe("When the numbers are 100 and 2", () => {
      it("Then it should return 98", () => {
        expect(calc.subtract(100, 2)).toBe(98);
      });
    });
    describe("When the numbers are -1 and 50", () => {
      it("Then it should return -51", () => {
        expect(calc.subtract(-1, 50)).toBe(-51);
      });
    });
  });
});
