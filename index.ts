function numberToRoman(type: "small" | "big", num: number) {
  if (typeof num !== "number") {
    throw new Error("Input value should be number ");
  }

  if (typeof type !== "string") {
    throw new Error("Type should be a string");
  }

  if (type === "big") {
    const romanNumerals = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
    let result = "";
    for (let key in romanNumerals) {
      while (num >= romanNumerals[key]) {
        result += key;
        num -= romanNumerals[key];
      }
    }
    return result;
  } else if (type === "small") {
    const romanNumerals = {
      m: 1000,
      cm: 900,
      d: 500,
      cd: 400,
      c: 100,
      xc: 90,
      l: 50,
      xl: 40,
      x: 10,
      ix: 9,
      v: 5,
      iv: 4,
      i: 1,
    };
    let result = "";
    for (let key in romanNumerals) {
      while (num >= romanNumerals[key]) {
        result += key;
        num -= romanNumerals[key];
      }
    }
    return result;
  }
}
module.exports = {
  numberToRoman,
};
