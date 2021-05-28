import { dAdd, dSubtract } from '..';
import moment from 'moment-timezone';

describe('dAdd', () => {
  const now = moment();
  it('dAdd', () => {
    expect(dAdd('20210102', 1, 'd')).toBe('20210103');
    expect(dAdd('20210102', -1, 'd')).toBe('20210101');
    expect(dAdd('20210102', 1, 'd', 'YYYY年MM月DD日')).toBe('2021年01月03日');
    expect(dAdd(now, 1, 'd', 'YYYY年MM月DD日')).toBe(
      now.add(1, 'd').format('YYYY年MM月DD日'),
    );
  });

  it('dSubtract', () => {
    expect(dSubtract('20210102', -1, 'd')).toBe('20210103');
    expect(dSubtract('20210102', 1, 'd')).toBe('20210101');
    expect(dSubtract('20210102', -1, 'd', 'YYYY年MM月DD日')).toBe(
      '2021年01月03日',
    );
    expect(dSubtract(now, 1, 'd', 'YYYY年MM月DD日')).toBe(
      now.subtract(1, 'd').format('YYYY年MM月DD日'),
    );
  });
});
