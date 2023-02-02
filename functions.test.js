const { shuffleArray } = require("./utils");

const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

describe("shuffleArray should", () => {
  // CODE HERE
  it("shuffles test array", async () => {
    expect(shuffleArray(testArr)).not.toBe(testArr);
  });

  test("return array", async () => {
    await expect(shuffleArray(testArr).length).toEqual(testArr.length);
  });
  
});
