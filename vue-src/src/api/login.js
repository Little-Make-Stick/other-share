import axios from '@/libs/api.request'
import { getToken } from '@/libs/util';
import crypto from 'crypto'


/** 此处如用get则会在后台跳到login.html页面*/
export const login = (loginName, password) => {
/*
  console.log(password);
  password = crypto.createHash('md5').update(password, "utf8").digest('hex');
  console.log(password);
*/
  const data = {
    loginName,
    password
  }
  console.log('api/user/login?username='+loginName + "&password=" + password,);
  return axios.request({
    url: 'api/user/login?username='+loginName + "&password=" + password,
    //url: '/api/user/login?username='+loginName + "&password="+password,
    method: 'post',
    dataType: 'json',
    headers: {
      'Content-Type': 'text/html; charset=UTF-8'
    }
  })
}

/**
 * 退出登录
 * @param token
 * @returns {http.ClientRequest | ClientHttp2Stream | * | never | AxiosPromise<any>}
 */
export const logout = (token) => {
  const data = {}
  return axios.request({
    //url: '/api/user/logout',
    url: '/api/user/logout?token=' + token,
    method: 'get',
    dataType: 'json',
    headers: {
      //'Content-Type': 'application/json; charset=UTF-8',
      'Content-Type': 'text/html; charset=UTF-8',
      'token': token
    },
    data: data
  })
}

/** 此处如用get则会在后台跳到login.html页面*/
export const checkUser = (loginName, password) => {
  return axios.request({
    url: 'login?username='+loginName + "&password=" + password,
    method: 'get',
    dataType: 'json',
    headers: {
      'Content-Type': 'text/html; charset=UTF-8',
      'token': getToken()
    }
  })
}
/**
 * 重启服务
 * */
export const restart = () => {
  return axios.request({
    url: 'server/restart',
    method: 'post',
    dataType: 'json',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'token': getToken()
    }
  })
}
