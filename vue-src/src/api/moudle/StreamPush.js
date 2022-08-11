import axios from '@/libs/api.request'
import { getToken } from '@/libs/util'

class StreamPush {
  constructor() {
    this.$axios = axios;
  }

  /**
   * 推流列表
   * @param page
   * @param count
   * @returns {AxiosPromise}
   */
  getPushList=(page,count)=>{
    return this.$axios.request({
      url: '/api/push/list',
      method: 'get',
      dataType: 'json',
      headers: {
        'Content-Type': 'text/html; charset=UTF-8',
        'token': getToken()
      },
      params: {
        page: page,
        count: count
      }
    });
  }

  /**
   * 播放推流
   * @param app
   * @param stream
   * @param mediaServerId
   * @returns {*}
   */
  playPuhsh=(app,stream,mediaServerId)=>{
    return this.$axios.request({
      url: '/api/media/stream_info_by_app_and_stream',
      method: 'get',
      dataType: 'json',
      headers: {
        'Content-Type': 'text/html; charset=UTF-8',
        'token': getToken()
      },
      params: {
        app: app,
        stream: stream,
        mediaServerId: mediaServerId
      }
    });
  }

  /**
   * 删除
   * @param row
   * @returns {AxiosPromise}
   */
  removeFromGB=(row)=>{
    return this.$axios.request({
      url: '/api/push/remove_form_gb',
      method: 'delete',
      dataType: 'json',
      headers: {
        'Content-Type': 'text/html; charset=UTF-8',
        'token': getToken()
      },
      data:row
    })
  }
}

export default StreamPush;
