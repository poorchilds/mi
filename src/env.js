let baseURL
// process.env.NODE_ENV   用来获取page.json文件中的  --mode的值的
//  "scripts": {
//     "serve": "vue-cli-service serve --mode=development",
//     "text": "vue-cli-service build --mode=text",
//     "build": "vue-cli-service build --mode=production",
//     "lint": "vue-cli-service lint"
//   },
// process.env.NODE_ENV  专门用来获取ndoejs进程中的一些环境变量的
// 为什么可以获取到nodejs中的环境变量，因为这个项目本身就是在nodejs服务器上运行的
switch (process.env.NODE_ENV) {
  case 'development':
    baseURL = 'http://dev-mall-pre.springboot.cn/api'
    break
  case 'text':
    baseURL = 'http://text-mall-pre.springboot.cn/api'
    break
  case 'production':
    baseURL = 'http://prod-mall-pre.springboot.cn/api'
    break
  default:
    baseURL = 'http://dev-mall-pre.springboot.cn/api'
    break
}
export default {
  baseURL
}
