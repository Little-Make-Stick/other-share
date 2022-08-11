import axios from '@/libs/api.request'
import { getToken } from '@/libs/util'

/*
分页查询
 */
export const queryPage = (param) => {
  return axios.request({
    url: '/admin/quartz/query/page/',
    method: 'post',
    dataType: 'json',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'token': getToken()
    },
    data: param
  })
}

export const addQuartzJob = (param) => {
  return axios.request({
    url: '/admin/quartz/add/',
    method: 'post',
    dataType: 'json',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'token': getToken()
    },
    data: param
  })
}
export const updateQuartzJob = (param) => {
  return axios.request({
    url: '/admin/quartz/update/',
    method: 'post',
    dataType: 'json',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'token': getToken()
    },
    data: param
  })
}
