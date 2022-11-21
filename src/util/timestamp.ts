const SHORT_CHARS =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

/**
 * Transforms a number into a custom 62 char expression of that number,
 * effectively making a "short" version of that number (0-9a-zA-Z). This does
 * NOT convert to a base-62 number.
 *
 * There are vast gaps in the effective translation of numbers, which is why
 * this function is mostly for concisely translating dates prior to the year
 * 2063. Since all other values associated with dates (month, day, hours,
 * minutes, seconds) effectively fall within the range of a single character,
 * this is an accepted shortcoming.
 *
 * Examples:
 *
 * 0 = 0
 *
 * 48 = M
 *
 * 2022 = km (in base-62 this would be wC)
 */
export function toShort(valu: number): string {
  return (
    valu
      .toString()
      .match(/.{1,2}/g)
      ?.map((s) => SHORT_CHARS[parseInt(s)])
      .join("") ?? ""
  );
}

/**
 * Translates a Unix EPOCH timestamp to a 62-char expression of the date. See
 * the `toShort()` method for more details on the meaning of the final output.
 */
export function getTimestamp(seconds: number): string {
  const date = new Date(seconds * 1000);
  const dateArr = [
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
  ];

  return dateArr.map(toShort).join(".") + "-0";
}
