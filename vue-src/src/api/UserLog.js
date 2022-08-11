import axios from "@/libs/api.request";
import { getToken } from '@/libs/util'
import QuartzSchedule from "@/api/QuartzSchedule";

class UserLog {
  constructor() {
    this.$axios = axios;
  }

  /*
分页查询
 */
  queryPage = (param) => {
    return axios.request({
      url: '/userlog/query/exten/page/',
      method: 'post',
      dataType: 'json',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'token': getToken()
      },
      data: param
    })
  }
}
export default UserLog;
