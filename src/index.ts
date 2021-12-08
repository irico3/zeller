const POINT_DAY = {
  startGregorian: "15821015",
  lastJulian: "15821004",
  errorLast: "00040228",
  ADStart: "00010101",
};

const dayStringTable = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Sat"];

export default (year: number, month: number, day: number) => {
  return dayStringTable[getDayNumber(year, month, day)];
};

const getDayNumber = (year: number, month: number, day: number) => {
  const dateString =
    year.toString().padStart(4) +
    month.toString().padStart(2) +
    day.toString().padStart(2);

  // TODO: 日付が正しいフォーマットかのチェック

  // Gregorian
  if (dateString > POINT_DAY.startGregorian) {
    return zellersCongruence(year, month, day);

    // Julian ~ Gregorian
  } else if (
    POINT_DAY.lastJulian < dateString &&
    dateString < POINT_DAY.startGregorian
  ) {
    throw new Error("invalid date. please check calendar revision rules.");

    // Julian
  } else if (
    dateString < POINT_DAY.lastJulian &&
    POINT_DAY.errorLast < dateString
  ) {
    return zellersCongruence(year, month, day, false);

    // Julian error years
  } else if (
    POINT_DAY.ADStart <= dateString &&
    dateString <= POINT_DAY.errorLast
  ) {
    let dayNumber = zellersCongruence(year, month, day, false) + 1;
    if (dayNumber > 6) dayNumber = 0;
    return dayNumber;

    // before the Western calendar
  } else if (dateString < POINT_DAY.ADStart) {
    throw new Error("A date before the Western calendar is specified.");

    // invalid
  } else {
    throw new Error(`invalid dateString ${dateString}`);
  }
};

const zellersCongruence = (
  year: number,
  month: number,
  day: number,
  isGregorian = true
) => {
  if (month < 3) {
    month += 12;
    year -= 1;
  }

  const C = Math.floor(year / 100);
  const Y = year % 100;

  let l;
  if (isGregorian) {
    l = 5 * C + Math.floor(C / 4);
  } else {
    l = 6 * C + 5;
  }

  const h =
    day + Math.floor((26 * (month + 1)) / 10) + Y + Math.floor(Y / 4) + l;
  return h;
};
