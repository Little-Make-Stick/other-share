import axios from '@/libs/api.request'
import { getToken } from '@/libs/util'

class StreamProxy {
  constructor() {
    this.$axios = axios;
  }

  getStreamProxyList=(page,count)=>{
    return this.$axios.request({
      url: '/api/proxy/list',
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

  getProxyFfmpegCmd=(mediaServerId)=>{
    return this.$axios.request({
      url: '/api/proxy/ffmpeg_cmd/list',
      method: 'get',
      dataType: 'json',
      headers: {
        'Content-Type': 'text/html; charset=UTF-8',
        'token': getToken()
      },
      params: {
        mediaServerId: mediaServerId
      }
    });
  }

  save=(proxyParam)=>{
    return this.$axios.request({
      url: '/api/proxy/save',
      method: 'post',
      dataType: 'json',
      headers: {
        'Content-Type': 'text/html; charset=UTF-8',
        'token': getToken()
      },
      data: proxyParam
    });
  }

  /**
   * 查询ONVIF 拉流代理
   * @returns {*}
   */
  searchOnvif=()=>{
    return this.$axios.request({
      url: '/api/onvif/search?timeout=3000',
      method: 'get',
      dataType: 'json',
      headers: {
        'Content-Type': 'text/html; charset=UTF-8',
        'token': getToken()
      },
      params: {
        mediaServerId: mediaServerId
      }
    });
  }

  /**
   * 播放
   * @param app
   * @param stream
   * @param mediaServerId
   * @returns {*}
   */
  play=(app,stream,mediaServerId)=>{
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
   * @param app
   * @param stream
   * @returns {*}
   */
  deleteStreamProxy=(app,stream)=>{
    return this.$axios.request({
      url: '/api/proxy/del',
      method: 'delete',
      dataType: 'json',
      headers: {
        'Content-Type': 'text/html; charset=UTF-8',
        'token': getToken()
      },
      params: {
        app: app,
        stream: stream
      }
    });
  }

  /**
   *
   * @param app
   * @param stream
   * @returns {*}
   */
  start=(app,stream)=>{
    return this.$axios.request({
      url: '/api/proxy/start',
      method: 'get',
      dataType: 'json',
      headers: {
        'Content-Type': 'text/html; charset=UTF-8',
        'token': getToken()
      },
      params: {
        app: app,
        stream: stream
      }
    });
  }

  /**
   *
   * @param app
   * @param stream
   * @returns {*}
   */
  stop=(app,stream)=>{
    return this.$axios.request({
      url: '/api/proxy/stop',
      method: 'get',
      dataType: 'json',
      headers: {
        'Content-Type': 'text/html; charset=UTF-8',
        'token': getToken()
      },
      params: {
        app: app,
        stream: stream
      }
    });
  }

  /**
   *
   * @param hostName
   * @param username
   * @param password
   * @returns {*}
   */
  getOnvif=(hostName,username,password)=>{
    return this.$axios.request({
      url: '/api/onvif/rtsp',
      method: 'get',
      dataType: 'json',
      headers: {
        'Content-Type': 'text/html; charset=UTF-8',
        'token': getToken()
      },
      params: {
        hostname: hostName,
        timeout: 3000,
        username: username,
        password: password,
      }
    });
  }
}
export default StreamProxy;
