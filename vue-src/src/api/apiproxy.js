import axios from '@/libs/api.request'
import { getToken } from '@/libs/util'

/** API 代理 */
/*
接口日志
http://localhost:18088/400001/api/device/query/devices/44010200491320000033/channels?page=1&count=15&query=&online=&channelType=
http://159.75.88.24:18080/api/device/query/devices/44010200491320000033/channels?page=1&count=15&query=&online=&channelType=
 */
/**
 * 通道查询
 * @param gbserver  国标服务IP
 * @param device 设备编号
 * @param page
 * @param count
 * @param query
 * @param online
 * @param channelType
 * @returns {AxiosPromise}
 */
export const apiDeviceQueryChannel = (gbserver,device,page, count,query,online,channelType) => {
  return axios.request({
    url: '/gbapi/'+gbserver+'/api/device/query/devices/' + device + '/channels?page='+page + '&count=' + count + '&query=' + query + '&online='+online + '&channelType=' + channelType,
    method: 'get',
    dataType: 'json', //返回的数据格式
    headers: {
      'Content-Type': 'text/html; charset=UTF-8',
      'token': getToken()
    },
  })
}

/*
http://159.75.88.24:18080/api/play/start/44010200491320000033/44010200491320000033
http://159.75.88.24:18080/api/play/stop/44010200491320000033/44010200491320000033
 */

/**
 * 开始播放
 * @param gbserver 国标服务IP
 * @param device 设备编号
 * @param channel 通道
 * @returns {*}
 */
export const playStart = (gbServerId,device,channel) => {
  console.log(gbServerId + " ：" + device + " : " + channel);
  return axios.request({
    url: '/gbapi/'+gbServerId+'/api/play/start/' + device + '/'+channel,
    method: 'get',
    dataType: 'json', //返回的数据格式
    headers: {
      'Content-Type': 'text/html; charset=UTF-8',
      'token': getToken()
    },
  })
}
/**
 * 停止播放
 * @param gbserver 国标服务IP
 * @param device 设备编号
 * @param channel 通道
 * @returns {*}
 */
export const playStop = (gbServerId,device,channel) => {
  return axios.request({
    url: '/gbapi/'+gbServerId+'/api/play/stop/' + device + '/'+channel,
    method: 'get',
    dataType: 'json', //返回的数据格式
    headers: {
      'Content-Type': 'text/html; charset=UTF-8',
      'token': getToken()
    },
  })
}

