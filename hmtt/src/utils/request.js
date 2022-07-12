//基于axios封装网络请求
import theAxios from 'axios'
//因为要用到this.router，但是js文件中没有this实例，所以要引入router
import router from '@/router'
import  Notify  from '@/ui/Notify.js'
import { getToken, setToken, delToken } from './token'
import { freshTokenAPI } from '@/api/index.js'
const axios = theAxios.create({
  baseURL: 'http://toutiao.itheima.net/',
  timeout: 20000, //20s无响应直接判定超时
})
// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    //判断本地的token，并且判断是否携带请求体
    if (getToken()?.length > 0 && config.headers.Authorization === undefined) {
      config.headers.Authorization = `Bearer ${getToken()}`
    }
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)
// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response
  },
  async function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    if (error.response.status === 401) {
      //被注释的代码是之前的方式,表示当token过期,直接清空并跳转登录页
      // delToken()
      // Notify({ type: 'warning', message: '需要进行登录' })
      // router.replace('/login')
      //接下来是新的方式,表示当token过期时直接更新的新的token
      const res = await freshTokenAPI()
      setToken(res.data.data.token)
      error.config.headers.Authorization = 'Bearer ' + res.data.data.token
      return axios(error.config)
    } else if (
      error.response.status === 500 &&
      error.config.url === '/v1_0/authorizations' &&
      error.config.method === 'put'
    ) {
      //刷新的token也过期了,必须再次登录
      localStorage.clear() //清除本地所有的值
      localStorage.setItem('hash', location.hash)
      Notify({ type: 'warning', message: '需要进行登录' })
      router.replace('/login')
    }
    return Promise.reject(error)
  }
)

export default ({
  url,
  method = 'GET',
  params = {},
  data = {},
  headers = {},
}) => {
  return axios({
    url,
    method,
    params,
    data,
    headers,
  })
}
