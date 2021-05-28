import numeral from 'numeral';
import moment from 'moment-timezone';
import 'moment/locale/zh-cn';
import 'numeral/locales/chs';

moment.tz.setDefault('Asia/Shanghai');
moment.locale('zh-cn');
numeral.locale('chs');

export {
  nFormat,
  sDefault,
  sTruncate,
  dFormat,
  dAdd,
  dSubtract,
  drFormat,
  url,
} from './common';
