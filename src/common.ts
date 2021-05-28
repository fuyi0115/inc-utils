import moment, { Moment } from 'moment-timezone';
import numeral from 'numeral';
import { includes, isRegExp, truncate } from 'lodash';

export type Duration = moment.unitOfTime.DurationConstructor;
export type Unit = 'W' | 'Y' | 'Z' | 'C';
export type UnitCn = '万' | '亿' | '兆';

function isFalsely(source: any): boolean {
  return (
    ['', undefined, null, Infinity].indexOf(source) !== -1 ||
    Number.isNaN(source)
  );
}

export function url(source: string, decode: boolean): string {
  if (decode) return decodeURIComponent(source);
  return encodeURIComponent(source);
}

export function sDefault(
  source: any,
  holder: any,
  matcher: any,
  containFalsely: boolean,
): any {
  if (matcher) {
    if (Array.isArray(matcher) && includes(matcher, source)) return holder;
    if (isRegExp(matcher) && matcher.test(source)) return holder;
    if (containFalsely && isFalsely(source)) return holder;
  } else if (isFalsely(source)) {
    return holder;
  }
  return source;
}

export function sTruncate(
  source: string,
  length: number = 30,
  omission: string = '...',
): string {
  return truncate(source, { length, omission });
}

function getMoment(source: any): Moment {
  if (moment.isMoment(source)) return source;
  const m = moment(source);
  if (m.isValid()) return m;
  return moment();
}

export function dFormat(
  source: Moment | string,
  format: string,
  catchException: boolean,
): string;
export function dFormat<T>(
  source: T,
  format: string,
  catchException: boolean,
): T;
export function dFormat(source: any, format: string, catchException: boolean) {
  if (catchException) return getMoment(source).format(format);
  if (source) {
    const m = moment(source);
    if (m.isValid()) return m.format(format);
  }
  return source;
}

export function drFormat(
  source: Array<Moment | string>,
  format: string,
): Array<string>;
export function drFormat(
  source: Array<Moment | string>,
  format: string,
  dtKeys: Array<string>,
): object;
export function drFormat(source: any, format: string, dtKeys?: Array<string>) {
  const range = (source || []).length
    ? source.map((item: Moment | string) => dFormat(item, format, true))
    : [];
  if (dtKeys && dtKeys.length) {
    return dtKeys.reduce((acc: Record<string, string>, cur, idx) => {
      acc[cur] = range[idx];
      return acc;
    }, {});
  } else {
    return range;
  }
}

export function dAdd(
  source: any,
  n: number,
  type: Duration,
  format?: string,
): any {
  const m = moment(source);
  if (m.isValid()) return m.add(n, type).format(format || (m as any)._f);
  return source;
}

export function dSubtract(
  source: any,
  n: number,
  type: Duration,
  format?: string,
): any {
  const m = moment(source);
  if (m.isValid()) return m.subtract(n, type).format(format || (m as any)._f);
  return source;
}

const SUFFIX = { W: '万', Y: '亿', Z: '兆', C: '' };
const DIVIDER = { W: 1e4, Y: 1e8, Z: 1e12, C: 1 };
// todo
if ((numeral as any).formats.chinese === undefined) {
  numeral.register('format', 'chinese', {
    regexps: {
      format: /zh[WYZC]?$/,
      unformat: /[万亿兆]$/,
    },
    format(value, format, roundingFunction) {
      const _ = (numeral as any)._;
      const space = _.includes(format, ' zh') ? ' ' : '';
      let type: Unit = 'C';
      if (/zh([WYZC])/.test(format)) {
        type = RegExp.$1 as Unit;
      }
      const v = Math.abs(value);
      if ('WYZ'.split('').indexOf(type) === -1) {
        if (v >= DIVIDER.W && v < DIVIDER.Y) type = 'W';
        else if (v >= DIVIDER.Y && v < DIVIDER.Z) type = 'Y';
        else if (v >= DIVIDER.Z) type = 'Z';
      }
      const newValue = value / (type ? DIVIDER[type] : 1);
      if (type === 'C' && v < 1e4)
        return _.numberToFormat(newValue, '0,0', roundingFunction);
      const output = _.numberToFormat(
        newValue,
        format.replace(/\s?zh[WYZC]?/, ''),
        roundingFunction,
      );
      return `${output}${space}${SUFFIX[type] || ''}`;
    },
    unformat(source) {
      const muitipier = {
        万: 1e4,
        亿: 1e8,
        兆: 1e12,
      };
      const matcher = source.match(/([万亿兆])$/);
      const type: UnitCn = matcher ? (matcher[0] as UnitCn) : '万';
      return (
        Number(source.replace(/\s*[\u4E07\u4EBF\u5146]/, '')) * muitipier[type]
      );
    },
  });
}

export function nFormat(source: any, format: string): any {
  if (isFalsely(source)) return source;
  const n = numeral(source).value();
  if (typeof n !== 'number') return source;
  return numeral(n).format(format);
}
