import { sDefault } from '..';

describe('sDefault', function () {
  const falsely = ['', undefined, null, Infinity, NaN];

  it('Falsely', () => {
    falsely.forEach((i) => {
      expect(sDefault(i, '--')).toBe('--');
    });
  });

  it('Matcher', () => {
    expect(sDefault('a', '--', ['abc'])).toBe('a');
    expect(sDefault('abc', '--', ['abc'])).toBe('--');

    expect(sDefault('', '--', ['abc'], true)).toBe('--');
    expect(sDefault('', '--', ['abc'])).toBe('');

    expect(sDefault('abc', '--', ['abc'], true)).toBe('--');
    expect(sDefault('abc', '--', ['abc'])).toBe('--');
  });
});
