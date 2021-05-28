import { nFormat } from '..';
import { mockNFormat } from './mock';

describe('nFormat', function () {
  it('Numbers', () => {
    const tests = mockNFormat.numbers;
    for (let i = 0; i < tests.length; i++) {
      expect(nFormat(tests[i][0], tests[i][1])).toBe(tests[i][2]);
    }
  });

  it('Bytes', () => {
    const tests = mockNFormat.bytes;
    for (let i = 0; i < tests.length; i++) {
      expect(nFormat(tests[i][0], tests[i][1])).toBe(tests[i][2]);
    }
  });

  it('Time', () => {
    const tests = mockNFormat.time;
    for (let i = 0; i < tests.length; i++) {
      expect(nFormat(tests[i][0], tests[i][1])).toBe(tests[i][2]);
    }
  });

  it('Currency', () => {
    const tests = mockNFormat.currency;
    for (let i = 0; i < tests.length; i++) {
      expect(nFormat(tests[i][0], tests[i][1])).toBe(tests[i][2]);
    }
  });

  it('Percentages', () => {
    const tests = mockNFormat.percentages;
    for (let i = 0; i < tests.length; i++) {
      expect(nFormat(tests[i][0], tests[i][1])).toBe(tests[i][2]);
    }
  });

  it('Falsely', () => {
    const tests = mockNFormat.falsely;
    for (let i = 0; i < tests.length; i++) {
      expect(nFormat(tests[i][0], tests[i][1])).toBe(tests[i][2]);
    }
  });

  it('Clever zhC', () => {
    const tests = mockNFormat.clever;
    for (let i = 0; i < tests.length; i++) {
      expect(nFormat(tests[i][0], tests[i][1])).toBe(tests[i][2]);
    }
  });

  it('zhWYZ', () => {
    const tests = mockNFormat.zhWYZ;
    for (let i = 0; i < tests.length; i++) {
      expect(nFormat(tests[i][0], tests[i][1])).toBe(tests[i][2]);
    }
  });
});
