import axios from '@/libs/api.request'
import { getToken } from '@/libs/util'
/**
 * 分页查询文档
 * @param param
 * @returns {*}
 */
export const queryPage = (param) => {
  return axios.request({
    url: '/admin/log/query/page/',
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
export const removeLog = (param) => {
  return axios.request({
    url: '/admin/log/delete/',
    method: 'post',
    dataType: 'json',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'token': getToken()
    },
    data: param
  })
}


