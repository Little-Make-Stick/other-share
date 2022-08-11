import axios from '@/libs/api.request'
import { getToken } from '@/libs/util'

/*
接口日志
 */
export const getMapInfo = () => {
  return axios.request({
    /** //admin/map/getMapInfo/ 变成 请求网址: http://admin/map/getMapInfo/
     * /admin/map/getMapInfo/  才对
     */
    url: '/admin/map/getMapInfo/',
    method: 'get',
    dataType: 'json',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'token': getToken()
    }
  })
}
