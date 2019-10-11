import axios from 'axios' // 引入axios请求
import jsonBing from 'json-bigint' // 引入大数字包
// axios.create 方法
// 建议使用 create(相当于复制) 方式，我们可以拥有（多个请求地址）
// 说白了就是复制了一个 axios，拥有和 axios 完全一样的功能，但是配置可以不一样
// 例如我们可以创建多个请求对象，而不同的请求对象拥有不同的 baseURL
// 例如我们可以有 a 请求的拦截器，也可以专门定制 b 请求的拦截器
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn'
})
// 配置处理后端返回数据中超出 js 安全整数范围问题
request.defaults.transformResponse = [ function (data) {
  return data ? jsonBing.parse(data) : {} // 换了一个转化方法 使得 计算更精确 保证id不失真
}

]
export default request
