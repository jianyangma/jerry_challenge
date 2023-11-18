class BinarySearch {
  /**
   * Binary search to find the index where a number should be inserted
   * in a sorted array to maintain ascending order.
   * @param {Array<number>} arr - The sorted array.
   * @param {number} num - The number to find the insertion index for.
   * @returns {number} - The insertion index.
   */
  static bisectLeft(arr, num) {
    let lo = 0;
    let hi = arr.length;
    while (lo < hi) {
      const mid = Math.floor((lo + hi) / 2);
      if (arr[mid] < num) {
        lo = mid + 1;
      } else {
        hi = mid;
      }
    }
    return lo;
  }

  /**
   * Binary search to find the index where a number should be inserted
   * in a sorted array to maintain ascending order. This version returns
   * an index that is one position to the right of the found index.
   * @param {Array<number>} arr - The sorted array.
   * @param {number} num - The number to find the insertion index for.
   * @returns {number} - The insertion index.
   */
  static bisectRight(arr, num) {
    let lo = 0;
    let hi = arr.length;
    while (lo < hi) {
      const mid = Math.floor((lo + hi) / 2);
      if (arr[mid] <= num) {
        lo = mid + 1;
      } else {
        hi = mid;
      }
    }
    return lo;
  }
}

module.exports = BinarySearch;
