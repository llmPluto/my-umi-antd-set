import qs from 'qs';
var MD5 = require('md5.js');

export default {
  apiSign: (params: { data: {} }, url: string, time: string) => {
    let data = qs.stringify(params.data, { encode: false });
    let sign = `${time.substr(time.length - 7)}${url}${time}$@${data
      .split('&')
      .sort()
      .reverse()
      .join('&&')}$@`;
    return new MD5()
      .update(sign)
      .digest('hex')
      .toLocaleUpperCase();
  },
};
