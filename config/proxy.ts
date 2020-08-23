/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
interface ProxyType {
  [name: string]: {};
}
const proxy: ProxyType = {
  dev: {
    '/api': {
      target: 'http://gallop.5000yuant.com',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  prod: {
    '/api': {
      target: 'http://gallop.feichitiyu.com',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
};

export default proxy;
