import zerror from "../index";

describe("zerror test", () => {
  test.each([
    [1995, 6, 1, "Thu"],
    [4, 3, 1, "Sat"],
    [1, 1, 1, "Sun"],
  ])("year:%o, month:%o, day:%o", (year, month, day, expected) => {
    expect(zerror(year, month, day)).toBe(expected);
  });
});

describe("zerror throw test", () => {
  expect(() => zerror(1582, 10, 11)).toThrow(
    "invalid date. please check calendar revision rules."
  );
  expect(() => zerror(0, 1, 1)).toThrow(
    "A date before the Western calendar is specified."
  );

  expect(() => zerror(1555, 0, 1)).toThrow(`Invalid date. date:1555/0/1`);
});
