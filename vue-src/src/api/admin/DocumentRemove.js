import axios from '@/libs/api.request'
import { getToken } from '@/libs/util'

/**
 * 分页查询文档
 * @param param
 * @returns {*}
 */
export const queryPage = (param) => {
  return axios.request({
    url: '/docremove/query/page/',
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
 * 删除
 * @param param
 * @returns {*}
 */
export const removeDocumentRemove = (param) => {
  return axios.request({
    url: '/docremove/delete/',
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
 * 恢复删除文件
 * @param param
 * @returns {*}
 */
export const recallDocument = (param) => {
  return axios.request({
    url: '/docremove/recall/',
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
 * 永久删除原文件
 * @param param
 * @returns {*}
 */
export const packDocument = (param) => {
  return axios.request({
    url: '/docremove/pack/',
    method: 'post',
    dataType: 'json',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'token': getToken()
    },
    data: param
  })
}
