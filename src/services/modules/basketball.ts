import request from '@/utils/request';

export default {
  // 即时页
  basketballMatchInstants(params: {}): Promise<any> {
    return request('/basketball/match/instants', {
      data: params,
      method: 'post',
    });
  },
};
