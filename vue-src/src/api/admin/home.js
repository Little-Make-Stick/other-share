import axios from '@/libs/api.request'
import { getToken } from '@/libs/util'
import request from '@/libs/request'

/**
 * count及
 */
export const countDevices = () => {
  return axios.request({
    url: '/home/countDevices',
    method: 'get',
    dataType: 'json',
    headers: {
      'Content-Type': 'text/html; charset=UTF-8',
      'token': getToken()
    },
    data: {}
  })
}
/**
 * 文件统计
 * @returns {*}
 */
export const documentCount = (type) => {
  return axios.request({
    url: '/home/documentCount/' + type,
    method: 'get',
    dataType: 'json',
    headers: {
      'Content-Type': 'text/html; charset=UTF-8',
      'token': getToken()
    },
    data: {}
  })
}

/**
 * 最近上传文件列表
 * @returns {*}
 */
export const searchDocument = () => {
  return axios.request({
    url: '/home/searchDocument',
    method: 'get',
    dataType: 'json',
    headers: {
      'Content-Type': 'text/html; charset=UTF-8',
      'token': getToken()
    },
    data: {}
  })
}
/**
 * 最近关联警情列表
 * @returns {*}
 */
export const searchAlarm = () => {
  return axios.request({
    url: '/home/searchAlarm',
    method: 'get',
    dataType: 'json',
    headers: {
      'Content-Type': 'text/html; charset=UTF-8',
      'token': getToken()
    },
    data: {}
  })
}


export const apiCount2 = () => {
  return request({
    url: '/api/home/count',
    method: 'post',
    data: {}
  })
}

/**
 * 返回码排序列表
 */
export const apiReturnCode = () => {
  return axios.request({
    url: '/api/home/return-code',
    method: 'post',
    dataType: 'json',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'token': getToken()
    },
    data: {}
  })
}

/**
 * 黑名单排序列表
 */
export const apiBlacklist = () => {
  return axios.request({
    url: '/api/home/blacklist',
    method: 'post',
    dataType: 'json',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'token': getToken()
    },
    data: {}
  })
}

/**
 * 设备信息查询
 * @returns {*}
 */
export const querySystemInfo = () => {
  return axios.request({
    url: '/home/hardware/info',
    method: 'get',
    dataType: 'json',
    headers: {
      'Content-Type': 'text/html; charset=UTF-8',
      'token': getToken()
    },
  })
}
