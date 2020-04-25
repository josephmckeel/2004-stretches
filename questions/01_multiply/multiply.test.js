const { multiply } = require("./multiply");

describe("multiply testing", () => {
  test("it should ensure it receives two numbers", () => {
    // test some values that should fail

    expect(() => multiply("hey", 2)).toThrow("error");

    expect(() => multiply([2], "five")).toThrow("error");
  });

  test("it returns the product of two numbers", () => {
    // test the type of the returned value
    expect(typeof (() => multiply(2, 2))).toBe("number");

    // test that the returned value is correct
    expect(() => multiply(2, 2)).toBe(4);

    // test some other values
    expect(() => multiply(5, 5)).toBe(25);
  });

  test("it is not hardcoded (hint: use random numbers)", () => {
    // test some random values
    expect(typeof (() => multiply(Math.random(), Math.random()))).toBe(
      "number"
    );
  });
});
