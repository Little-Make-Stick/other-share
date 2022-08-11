import axios from '@/libs/api.request'
import { getToken } from '@/libs/util'

class CloudRecord {
  constructor() {
    this.$axios = axios;
  }

  /**
   * 云端录像列表
   * @param detail
   * @returns {AxiosPromise}
   */
  getRecordList=(mediaServerId,param)=>{
    console.log(mediaServerId);
    console.log(param);
    return this.$axios.request({
      url: '/record_proxy/'+mediaServerId+'/api/record/list',
      method: 'get',
      dataType: 'json',
      headers: {
        'Content-Type': 'text/html; charset=UTF-8',
        'token': getToken()
      },
      data: param
    });
  }

}
export default CloudRecord;
