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
  routes: [{ path: '/', component: '@/pages/index' }],
  proxy: proxy[ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
});
