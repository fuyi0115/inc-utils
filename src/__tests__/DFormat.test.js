import { dFormat } from '../';
import moment from 'moment-timezone';

describe('dFormat', () => {
  const tests = [['20210102', 'YYYY年MM月DD日', '2021年01月02日']];

  it('String', () => {
    tests.forEach((i) => {
      expect(dFormat(i[0], i[1])).toBe(i[2]);
    });
  });

  const now = moment().format('YYYY年MM月DD日');
  const falsely = ['', undefined, null, Infinity, NaN];
  it('CatchException', () => {
    falsely.forEach((i) => {
      expect(dFormat(i, 'YYYY年MM月DD日', true)).toBe(now);
      expect(dFormat(i, 'YYYY年MM月DD日', false)).toBe(i);
    });
  });
});
