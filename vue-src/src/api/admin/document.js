import axios from '@/libs/api.request'
import { getToken } from '@/libs/util'
/**
 * 分页查询文档
 * @param param
 * @returns {*}
 */
export const queryPage = (param) => {
  return axios.request({
    url: '/doc/query/page/',
    method: 'post',
    dataType: 'json',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'token': getToken()
    },
    data: param
  })
}
/**
 * 自定义查询
 * @param param
 * @returns {*}
 */
export const searchPage = (param) => {
  return axios.request({
    url: '/doc/query/searchPage/',
    method: 'post',
    dataType: 'json',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'token': getToken()
    },
    data: param
  })
}
/**
 * 删除，按ID删除
 * 删除前检查，已上报，正在上报的不能删除，删除后要加入文件回收池
 * @param param
 * @returns {*}
 */
export const removeById = (param) => {
  return axios.request({
    url: '/doc/remove/by/' + param,
    method: 'post',
    dataType: 'json',
    headers: {
      'Content-Type': 'text/html; charset=UTF-8',
      'token': getToken()
    },
    //data: param
  })
}

/**
 * 修改
 * @param param
 * @returns {AxiosPromise}
 */
export const updateDocument = (param) => {
  console.log(param);
  return axios.request({
    url: '/doc/update/',
    method: 'post',
    dataType: 'json',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'token': getToken()
    },
    data: param
  })
}


export const downloadById = (param) => {


  return axios.request({
    url: '/doc/download/' + param,
    method: 'get',
    dataType: 'json',
    headers: {
      'Content-Type': 'text/html; charset=UTF-8',
      'token': getToken()
    },
    //data: param
  })
}
