import { defineConfig } from 'umi';
import proxy from './proxy';

const { ENV } = process.env;

export default defineConfig({
  hash: true,
  dva: {
    hmr: true,
  },

  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    // 用户相关的地方须校验
    // { path: '/user', component: 'user',
    //   wrappers: [
    //     '@/components/Authorized',
    //   ],
    // },
  ],
  proxy: proxy[ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
});
