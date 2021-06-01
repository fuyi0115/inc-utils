import { drFormat } from '..';
import moment from 'moment-timezone';

describe('dFormat', () => {
  const resultArr = ['2021年01月01日', '2021年01月02日'];
  const tests = [
    [['20210101', '20210102'], 'YYYY年MM月DD日'],
    [[moment('20210101'), moment('20210102')], 'YYYY年MM月DD日'],
  ];

  it('Basics', () => {
    tests.forEach((i) => {
      expect(drFormat(i[0], i[1])).toStrictEqual(resultArr);
    });
  });

  it('Set dtKeys', () => {
    tests.forEach((i) => {
      expect(drFormat(i[0], i[1], ['start_dt', 'end_dt', 'c'])).toStrictEqual({
        start_dt: resultArr[0],
        end_dt: resultArr[1],
        c: undefined,
      });
    });
  });
});
