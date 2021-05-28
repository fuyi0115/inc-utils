export const mockNFormat = {
  numbers: [
    // [100.5, '0', '101'],
    // [100.2, '+0', '+100'],
    // [1000.21, '0,0', '1,000'],
    // [1000.22, '0,0.0', '1,000.2'],
    // [1000.23, '0,0.000', '1,000.230'],
    // [10, '000.00', '010.00'],
    // [0.23, '0.0[0000]', '0.23'],
    // [1460, '0a', '1千'],
    // [1230974, '0.0a', '1.2百万'],
    // [1230974000, '0.0a', '1.2十亿'],

    [10000, '0,0.0000', '10,000.0000'],
    [10000.23, '0,0', '10,000'],
    [10000.23, '+0,0', '+10,000'],
    [-10000, '0,0.0', '-10,000.0'],
    [10000.1234, '0.000', '10000.123'],
    [100.1234, '00000', '00100'],
    [1000.1234, '000000,0', '001,000'],
    [10, '000.00', '010.00'],
    [10000.1234, '0[.]00000', '10000.12340'],
    [-10000, '(0,0.0000)', '(10,000.0000)'],
    [-0.23, '.00', '-.23'],
    [-0.23, '(.00)', '(.23)'],
    [0.23, '0.00000', '0.23000'],
    [0.23, '0.0[0000]', '0.23'],
    [1230974, '0.0a', '1.2百万'],
    [1460, '0 a', '1 千'],
    [-104000, '0a', '-104千'],
    [1, '0o', '1.'],
    [100, '0o', '100.'],
  ],
  bytes: [
    [1024, '0b', '1KB'],
    [1024, '0b', '1KB'],
    [2048, '0 ib', '2 KiB'],
    [3072, '0.0 b', '3.1 KB'],
    [7884486213, '0.00b', '7.88GB'],
    [3467479682787, '0.000 ib', '3.154 TiB'],
  ],
  time: [
    [25, '00:00:00', '0:00:25'],
    [238, '00:00:00', '0:03:58'],
    [63846, '00:00:00', '17:44:06'],
  ],
  currency: [
    [1000.234, '$0,0.00', '¥1,000.23'],
    [1000.2, '0,0[.]00 $', '1,000.20 ¥'],
    [1001, '$ 0,0[.]00', '¥ 1,001'],
    [-1000.234, '($0,0)', '(¥1,000)'],
    [-1000.234, '$0.00', '-¥1000.23'],
    [1230974, '($ 0.00 a)', '¥ 1.23 百万'],
  ],
  percentages: [
    [0.9543, '0.00%', '95.43%'],
    [1, '0%', '100%'],
    [0.974878234, '0.000%', '97.488%'],
    [-0.43, '0 %', '-43 %'],
    [0.43, '(0.000 %)', '43.000 %'],
  ],
  exponential: [
    [1123456789, '0,0e+0', '1e+9'],
    [12398734.202, '0.00e+0', '1.24e+7'],
    [0.000123987, '0.000e+0', '1.240e-4'],
  ],
  falsely: [
    [null, '0', null],
    ['', '0', ''],
    [undefined, '0', undefined],
    [Infinity, '0', Infinity],
    [NaN, '0', NaN],
  ],
  clever: [
    [123, '0,0.00zhC', '123'],
    [1234, '0,0.00zhC', '1,234'],
    [123456, '0,0.00zhC', '12.35万'],
    [1234567890, '0,0.00zhC', '12.35亿'],
    [12345678900000, '0,0.00zhC', '12.35兆'],
  ],
  zhWYZ: [
    [1000, '0,0.0zhW', '0.1万'],
    [100000000, '0,0zhW', '10,000万'],
    [100000000, '0,0.00zhW', '10,000.00万'],
    [100000000000, '0,0zhY', '1,000亿'],
    [100000000000, '0,0.00zhY', '1,000.00亿'],
    [1000000000000000, '0,0zhZ', '1,000兆'],
    [1000000000000000, '0,0.00zhZ', '1,000.00兆'],
  ],
};
