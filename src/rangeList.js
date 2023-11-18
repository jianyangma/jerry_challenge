const BinarySearch = require('./binarySearch');

class RangeList {
  constructor() {
    this.ranges = [];
    this.binarySearch = new BinarySearch();
  }

  /**
   * Adds a range to the list, merging overlapping or adjacent ranges.
   * @param {Array<number>} range - Array of two integers that specify the beginning and end of the range.
   */
  add(range) {
    if (!range || range.length !== 2 || range[0] > range[1]) {
      throw new Error('Invalid range');
    }

    const [left, right] = range;
    const l = BinarySearch.bisectLeft(this.ranges, left);
    const r = BinarySearch.bisectRight(this.ranges, right);

    const subRange = [];
    if (l % 2 === 0) subRange.push(left);
    if (r % 2 === 0) subRange.push(right);

    this.ranges.splice(l, r - l, ...subRange);
  }

  /**
   * Removes a range from the list, splitting existing ranges if needed.
   * @param {Array<number>} range - Array of two integers that specify the beginning and end of the range.
   */
  remove(range) {
    if (!range || range.length !== 2 || range[0] > range[1]) {
      throw new Error('Invalid range');
    }

    const [left, right] = range;
    const l = BinarySearch.bisectLeft(this.ranges, left);
    const r = BinarySearch.bisectRight(this.ranges, right);

    const subRange = [];
    if (l % 2 === 1) subRange.push(left);
    if (r % 2 === 1) subRange.push(right);

    this.ranges.splice(l, r - l, ...subRange);
  }

  /**
   * Convert the list of ranges in the range list to a string.
   * @returns {string} - A string representation of the range list.
   */
  toString() {
    return this.ranges
      .map((val, index) => (index % 2 === 0 ? `[${val},` : `${val})`))
      .join(' ');
  }
}

module.exports = RangeList;
