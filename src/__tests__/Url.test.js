import { url } from '..';

describe('url', () => {
  it('Basics', () => {
    const URI = 'http://www.w3school.com.cn/My first/';
    const decodedURI = url(URI);

    expect(decodedURI).toBe('http%3A%2F%2Fwww.w3school.com.cn%2FMy%20first%2F');
    expect(url(decodedURI, true)).toBe(URI);
  });
});
