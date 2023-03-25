const { numberToRoman } = require("./index");

test("1 eaual to I", () => {
  expect(numberToRoman("small", 1)).toBe("I");
});
