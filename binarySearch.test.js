/* Test cases for binary search implementation */
const binarySearch = require('./binarySearch');

test('target of 7 found in [1, 2, 4, 7, 12, 15]', () => {
    let result = binarySearch([1, 2, 4, 7, 12, 15], 7);
    expect(result).toBe(3);
  });

  test('target of 7 not found in [1, 2, 4, 12, 15]', () => {
    let result = binarySearch([1, 2, 4, 12, 15], 7);
    expect(result).toBe(false);
  });

