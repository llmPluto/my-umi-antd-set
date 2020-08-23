const context = require.context('./modules', false, /\.ts$/);
const keys = context.keys();

interface IndexType {
  [name: string]: (...args: any[]) => Promise<any>;
}

let Index: IndexType = {};
context.keys().forEach(key => {
  Index = Object.assign(Index, context(key).default); // 读取出文件中的default模块
});
export default Index;
