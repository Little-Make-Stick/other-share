import axios from '@/libs/api.request'
import { getToken } from '@/libs/util'

/**
 * 取得当前所有采集状态
 * @returns {*}
 */
export const currentStatus = () => {
  return axios.request({
    url: '/site/current/collects/status',
    method: 'get',
    dataType: 'json',
    headers: {
      'Content-Type': 'text/html; charset=UTF-8',
      'token': getToken()
    },
    data: {}
  })
}
