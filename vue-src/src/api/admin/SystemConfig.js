import axios from '@/libs/api.request'
import { getToken } from '@/libs/util'

/*
查询所有参数
 */
export const queryConfig = () => {
  return axios.request({
    url: '/admin/config/query/all',
    method: 'get',
    dataType: 'json',
    headers: {
      'Content-Type': 'text/html; charset=UTF-8',
      'token': getToken()
    },
  })
}

export const updateConfig = (param) => {
  return axios.request({
    url: '/admin/config/update/batch',
    method: 'post',
    dataType: 'json',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'token': getToken()
    },
    data: param
  })
}
