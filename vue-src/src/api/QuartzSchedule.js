import axios from "@/libs/api.request";
import { getToken } from '@/libs/util'

class QuartzSchedule {
  constructor() {
    this.$axios = axios;
  }

  /*
  分页查询
   */
  queryPage = (param) => {
    return axios.request({
      url: '/admin/quartz/query/page/',
      method: 'post',
      dataType: 'json',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'token': getToken()
      },
      data: param
    })
  }

  updateQuartzJob = (param) => {
    return axios.request({
      url: '/admin/quartz/update/',
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

export default QuartzSchedule;
