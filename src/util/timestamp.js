const SHORT_CHARS =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
module.exports = {
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
 *
 * @deprecated {@link encodeBase62} is now used to generate the timestamp instead
 */
toShort: function (valu) {
  return (
    valu
      .toString()
      .match(/.{1,2}/g)
      ?.map((s) => SHORT_CHARS[parseInt(s)])
      .join("") ?? ""
  );
},

/**
 * Encodes a number as a base-62 value string.
 */
encodeBase62: function (valu) {
  let res = "";
  const mod = 62;

  do {
    res = SHORT_CHARS[valu % mod] + res;
    valu = Math.floor(valu / mod);
  } while (valu > 0);

  return res;
},

/**
 * Translates a Unix EPOCH timestamp to a 62-char expression of the date. See
 * the `toShort()` method for more details on the meaning of the final output.
 */
getTimestamp: function (seconds) {
  const date = new Date(seconds * 1000);
  const dateArr = [
    date.getUTCFullYear(),
    date.getUTCMonth() + 1, // UTC month starts at 0
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
  ];

  return dateArr.map(this.encodeBase62).join(".") + "-0";
},

};