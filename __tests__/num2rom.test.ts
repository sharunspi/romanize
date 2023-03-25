const t = require("../index");

describe("numberToRoman", () => {
  it("converts small numbers to Roman numerals", () => {
    expect(t.numberToRoman("small", 1)).toBe("i");
    expect(t.numberToRoman("small", 4)).toBe("iv");
    expect(t.numberToRoman("small", 9)).toBe("ix");
  });

  it("converts big numbers to Roman numerals", () => {
    expect(t.numberToRoman("big", 10)).toBe("X");
    expect(t.numberToRoman("big", 40)).toBe("XL");
    expect(t.numberToRoman("big", 90)).toBe("XC");
  });
});
