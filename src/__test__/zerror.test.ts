import zerror from "../index";

describe("zerror test", () => {
  test.each([
    [1995, 6, 1, "Thu"],
    [1582, 10, 11, undefined],
    [1, 1, 1, "Sat"],
  ])("year:%o, month:%o, day:%o", (year, month, day, expected) => {
    expect(zerror(year, month, day)).toBe(expected);
  });
});
