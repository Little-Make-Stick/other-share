import axios from '@/libs/api.request'
import { getToken } from '@/libs/util'

class ParentPlatform {
  constructor() {
    this.$axios = axios;
  }


  /**
   * 上级平台列表
   * @param detail
   * @returns {AxiosPromise}
   */
  getPlatformList=(size,currentPage)=>{
    return this.$axios.request({
      url: '/api/platform/query/' + size + '/' + currentPage,
      method: 'get',
      dataType: 'json',
      headers: {
        'Content-Type': 'text/html; charset=UTF-8',
        'token': getToken()
      },
    });
  }

  /**
   * 删除
   * @param serverGBId
   * @returns {AxiosPromise}
   */
  deletePlatform=(serverGBId)=>{
    return this.$axios.request({
      url: '/api/platform/delete/' + serverGBId,
      method: 'delete',
      dataType: 'json',
      headers: {
        'Content-Type': 'text/html; charset=UTF-8',
        'token': getToken()
      },
    });
  }


  /**
   * 取得服务器配置
   * @returns {AxiosPromise}
   */
  getServerConfig=()=>{
    return this.$axios.request({
      url: '/api/platform/server_config',
      method: 'get',
      dataType: 'json',
      headers: {
        'Content-Type': 'text/html; charset=UTF-8',
        'token': getToken()
      },
    });
  }

  /**
   * 新增保存
   * @param data
   * @returns {AxiosPromise}
   */
  addSave=(data)=>{
    return this.$axios.request({
      url: '/api/platform/save',
      method: 'post',
      dataType: 'json',
      headers: {
        'Content-Type': 'text/html; charset=UTF-8',
        'token': getToken()
      },
      data:data
    });
  }

  /**
   * 是否存在
   * @param deviceGbId
   * @returns {*}
   */
  deviceGBIdExit=(deviceGbId)=>{
    return this.$axios.request({
      url: '/api/platform/exit/'+deviceGbId,
      method: 'post',
      dataType: 'json',
      headers: {
        'Content-Type': 'text/html; charset=UTF-8',
        'token': getToken()
      },
    });
  }


}

export default ParentPlatform;
