/* create a polyfills for array fill function */

Array.prototype.fill = function (value, start, end) {
  console.log(this);
  if (this === null || this === undefined) {
    throw new TypeError("array is null or empty");
  }

  var length = this.length;
  var resObj = new Object(this);
  start = start ? start : 0;
  end = end ? end : length;

  start = start < 0 ? Math.max(start + length, 0) : Math.min(start, length);
  end = end < 0 ? Math.max(end + length, 0) : Math.min(end, length);
  while (start < end) {
    resObj[start] = value;
    start++;
  }
  return resObj;
};

/* Object.defineProperty(Array.prototype, "fill", {
  value: function (value) {
    // Steps 1-2.
    if (this == null) {
      throw new TypeError("this is null or not defined");
    }

    var O = Object(this);

    // Steps 3-5.
    var len = O.length >>> 0;

    // Steps 6-7.
    var start = arguments[1];
    var relativeStart = start >> 0;

    // Step 8.
    var k =
      relativeStart < 0
        ? Math.max(len + relativeStart, 0)
        : Math.min(relativeStart, len);

    // Steps 9-10.
    var end = arguments[2];
    var relativeEnd = end === undefined ? len : end >> 0;

    // Step 11.
    var finalValue =
      relativeEnd < 0
        ? Math.max(len + relativeEnd, 0)
        : Math.min(relativeEnd, len);

    // Step 12.
    while (k < finalValue) {
      O[k] = value;
      k++;
    }

    // Step 13.
    return O;
  },
}); */

console.log([1, 2, 3].fill(4)); // [4, 4, 4]
