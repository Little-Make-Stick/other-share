import axios from '@/libs/api.request'
import { getToken } from '@/libs/util'

/*
分页用户
 */
export const queryPage = (param) => {
  return axios.request({
    url: '/admin/source/map/query/page/',
    method: 'post',
    dataType: 'json',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'token': getToken()
    },
    data: param
  })
}

export const addSourceMap = (param) => {
  return axios.request({
    url: '/admin/source/map/add/',
    method: 'post',
    dataType: 'json',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'token': getToken()
    },
    data: param
  })
}
export const updateSourceMap = (param) => {
  return axios.request({
    url: '/admin/source/map/update/',
    method: 'post',
    dataType: 'json',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'token': getToken()
    },
    data: param
  })
}

export const removeSourceMap = (param) => {
  return axios.request({
    url: '/admin/source/map/delete/',
    method: 'post',
    dataType: 'json',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'token': getToken()
    },
    data: param
  })
}
