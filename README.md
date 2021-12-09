# zeller

Find the exact day of the week after the Western calendar.

zeller supports both Julian and Gregorian calendars, and calculates the days of the week since October 15, 1582 according to the Gregorian calendar, and the days of the week by October 4, 1582 according to the Julian calendar.

Note that the period between October 5, 1582 and October 14, 1582 is not supported because it does not exist in both years.
We also do not support leap years before January 1st of the year, when leap years are unstable.

## Getting Started

```
$ npm install --save-dev @iricocco/zeller
```

```js
import zeller from "@iricocco/zeller";

zeller(
  1995, // year
  6, // month 1 ~ 12
  1 // day
);
// results: "Thu"
```

## description
