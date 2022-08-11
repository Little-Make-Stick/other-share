import axios from '@/libs/api.request'
import { getToken } from '@/libs/util'

class MediaServer{
  constructor() {
    this.$axios = axios;
  }

  /**
   * 查询流媒体服务器列表
   * @param detail
   * @returns {AxiosPromise}
   */
  getMediaServerList=(detail)=>{
    return this.$axios.request({
      url: '/api/server/media_server/list',
      method: 'get',
      dataType: 'json',
      headers: {
        'Content-Type': 'text/html; charset=UTF-8',
        'token': getToken()
      },
    });
  }

  /**
   * 取得流媒体服务器列表
    * @returns {AxiosPromise}
   */
  getOnlineMediaServerList=()=>{
    return this.$axios.request({
      url: '/api/server/media_server/online/list',
      method: 'get',
      dataType: 'json',
      headers: {
        'Content-Type': 'text/html; charset=UTF-8',
        'token': getToken()
      },
    });
  }
  /**
   * 取得线程负载
   * @param mediaServerId
   * @returns {*}
   */
  getThreadsLoad=(mediaServerId)=>{
    return this.$axios.request({
      url: '/zlm/' + mediaServerId +'/index/api/getThreadsLoad',
      method: 'get',
      dataType: 'json',
      headers: {
        'Content-Type': 'text/html; charset=UTF-8',
        'token': getToken()
      },
    });
  }
/*  export const queryPage = (param) => {
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
  }*/

}
export default MediaServer;
