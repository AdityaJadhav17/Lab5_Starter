// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me.js';

describe('isPhoneNumber', () => {
  test('accepts phone numbers with parentheses around the area code', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
  });

  test('accepts phone numbers with hyphens', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
  });

  test('rejects phone numbers without required separators', () => {
    expect(isPhoneNumber('1234567890')).toBe(false);
  });

  test('rejects non-phone-number text', () => {
    expect(isPhoneNumber('phone number')).toBe(false);
  });
});

describe('isEmail', () => {
  test('accepts standard email addresses', () => {
    expect(isEmail('student@ucsd.edu')).toBe(true);
  });

  test('accepts email usernames with underscores and numbers', () => {
    expect(isEmail('aditya_26@example.com')).toBe(true);
  });

  test('rejects email addresses without an at sign', () => {
    expect(isEmail('student.ucsd.edu')).toBe(false);
  });

  test('rejects email addresses with long top-level domains', () => {
    expect(isEmail('student@ucsd.education')).toBe(false);
  });
});

describe('isStrongPassword', () => {
  test('accepts passwords that start with a letter and meet the minimum length', () => {
    expect(isStrongPassword('Abcd')).toBe(true);
  });

  test('accepts passwords with letters, numbers, and underscores', () => {
    expect(isStrongPassword('Password_1')).toBe(true);
  });

  test('rejects passwords that start with a number', () => {
    expect(isStrongPassword('1Password')).toBe(false);
  });

  test('rejects passwords with special characters', () => {
    expect(isStrongPassword('Pass!')).toBe(false);
  });
});

describe('isDate', () => {
  test('accepts dates with one-digit month and day values', () => {
    expect(isDate('1/2/2026')).toBe(true);
  });

  test('accepts dates with two-digit month and day values', () => {
    expect(isDate('12/31/2026')).toBe(true);
  });

  test('rejects dates in year-first format', () => {
    expect(isDate('2026/12/31')).toBe(false);
  });

  test('rejects dates that use hyphens', () => {
    expect(isDate('12-31-2026')).toBe(false);
  });
});

describe('isHexColor', () => {
  test('accepts three-character hex colors with a hash', () => {
    expect(isHexColor('#fff')).toBe(true);
  });

  test('accepts six-character hex colors without a hash', () => {
    expect(isHexColor('1A2b3C')).toBe(true);
  });

  test('rejects hex colors with too few characters', () => {
    expect(isHexColor('#ff')).toBe(false);
  });

  test('rejects colors with non-hex characters', () => {
    expect(isHexColor('#ggg')).toBe(false);
  });
});
