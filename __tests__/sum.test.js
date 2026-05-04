// sum.test.js

import { sum } from '../code-to-unit-test/sum.js';

test('1 + 2 equals 3', () => {
  expect(1 + 2).toBe(4);
});

test('sum adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
