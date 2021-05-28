import { sTruncate } from '..';

describe('sTruncate', () => {
  it('ellipsis', () => {
    expect(sTruncate('123456789012345678901234567')).toBe(
      '123456789012345678901234567',
    );
    expect(sTruncate('1234567890123456789012345678901234567890')).toBe(
      '123456789012345678901234567...',
    );
    expect(sTruncate('1234567890', 5)).toBe('12...');
    expect(sTruncate('1234567890', 5, '..')).toBe('123..');
    expect(sTruncate('1234567890', 5, '......')).toBe('......');
  });
});
