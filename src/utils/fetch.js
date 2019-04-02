/**
 * fetch封装
 * 1，解决了fetch的get，post传递参数的不同
 * 2，添加了fetch默认不携带cookie的配置
 * 3，解决了fetch不能处理错误状态的问题
 * 4，解决fetch，response控制返回值json
 * 5，添加公共参数token
 * 6，统一的错误处理
 */
import { message, Button } from 'antd';


/**
 * 将对象转化位query查询字符串
 * @param {Object} obj
 * @return {String} '?key=value&key=value'
 */
const objParseQuery = (obj) => {
  let queryString = '?'
  for (let key in obj) {
    const val = typeof obj[key] === 'string' ? obj[key] : JSON.stringify(obj[key])
    queryString += `${key}=${val}&`
  }
  queryString = queryString.slice(0, -1)
  return queryString
}

const _fetch = (url, method, data, options = {}) => {
  const token = window.localStorage.getItem('token')
  let request = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'authorization': token
    },
    credentials: 'include',
    mode: 'cors'
  }

  if (method != 'GET') {
    request = Object.assign({}, request, {
      body: JSON.stringify(data)
    })
  } else {
    url += objParseQuery(data)
  }

  return fetch(url, request).then((response) => {
    if (response.status >= 500) {
      message.error('服务端报错');
      return Promise.reject({msg: '服务端报错'})
    }
    return response.json().then((res) => {
      if (response.ok && res.code === 1) {
        return Promise.resolve(res)
      } else {
        message.error(res.msg);
        return Promise.reject(res)
      }
    })
  })
}

export const get = (url, data, options) => {
  return _fetch(url, 'GET', data, options)
}
export const post = (url, data, options) => {
  return _fetch(url, 'POST', data, options)
}
export const put = (url, data, options) => {
  return _fetch(url, 'PUT', data, options)
}
export const remove = (url, data, options) => {
  return _fetch(url, 'DELETE', data, options)
}

export default {
  get,
  post,
  put,
  remove
}