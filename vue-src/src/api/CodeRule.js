import axios from '@/libs/api.request'
import { getToken } from '@/libs/util'
import Device from "@/api/Device";

/*编码规则*/
class CodeRule {
  constructor() {
    this.$axios = axios;
  }

  /**
   * 行政区域
   * @param parentId
   * @returns {AxiosPromise}
   */
  findCodeCity=(parentId)=>{
    let url = '/code/city/query/find/'
    if (!!parentId){
      url = url + "?parentId=" + parentId;
    }
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

  /**
   * 行业
   * @returns {AxiosPromise}
   */
  findCodeBusiness=()=>{
    return this.$axios.request({
      url: "/code/business/query/list/",
      method: 'get',
      dataType: 'json',
      headers: {
        'Content-Type': 'text/html; charset=UTF-8',
        'token': getToken()
      },
    });
  }

  /**
   * 类型
   * @returns {AxiosPromise}
   */
  findCodeType=()=>{
    return this.$axios.request({
      url: "/code/type/query/list/",
      method: 'get',
      dataType: 'json',
      headers: {
        'Content-Type': 'text/html; charset=UTF-8',
        'token': getToken()
      },
    });
  }

  /**
   * 网络标识
   * @returns {AxiosPromise}
   */
  findCodeNetIdentity=()=>{
    return this.$axios.request({
      url: "/code/netidentity/query/list/",
      method: 'get',
      dataType: 'json',
      headers: {
        'Content-Type': 'text/html; charset=UTF-8',
        'token': getToken()
      },
    });
  }

}
export default CodeRule;
