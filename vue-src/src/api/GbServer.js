import axios from '@/libs/api.request'
import { getToken } from '@/libs/util'
import Device from "@/api/Device";
/**
 * 国标信令服务器
 */
class GbServer {
  constructor() {
    this.$axios = axios;
  }

  /**
   * 取得信令服务器配置信息
   * @param type :sip sip配置, base用户设置
   * @returns {AxiosPromise}
   */
  getConfig=(type)=>{
    let url="/api/server/config";
    if (!!type){url=url+"?type="+type;}

    return this.$axios.request({
      url: url,
      method: 'get',
      dataType: 'json',
      headers: {
        'Content-Type': 'text/html; charset=UTF-8',
        'token': getToken()
      },
    });
  }
}

export default GbServer;
