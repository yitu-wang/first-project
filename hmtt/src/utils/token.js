//此文件用于封装token的三种使用方法
const key = 'geek-itheima'
//存储key
export const setToken = (token) => {
  return localStorage.setItem(key, token)
}
//获取key
export const getToken = () => {
  return localStorage.getItem(key)
}
//删除key
export const delToken = () => {
  return localStorage.removeItem(key)
}
