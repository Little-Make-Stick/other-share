import axios from '@/libs/api.request'
import { getToken } from '@/libs/util'

/**
 * 登录
 * @param account
 * @param password
 * @returns {http.ClientRequest | ClientHttp2Stream | * | never | AxiosPromise<any>}
 */
/*
export const login = (account, password) => {
  console.log(password);
  password = crypto.createHash('md5').update(password, "utf8").digest('hex');
  console.log(password);
  const data = {
    account,
    password
  }
/!*  password = crypto.createHash('md5').update(this.password, "utf8").digest('hex')*!/
  //console.log(data);
  return axios.request({
    url: '/api/user/login',
    method: 'post',
    dataType: 'json',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'token': getToken()
    },
    data: data
  })
}
*/

/**
 * 修改账号
 */
export const update = (account, password) => {
  const data = {
    account,
    password
  }
  return axios.request({
    url: 'user/update',
    method: 'post',
    dataType: 'json',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'token': getToken()
    },
    data: data
  })
}

/**
 * 退出登录
 */
export const logout = () => {
  const data = {}
  return axios.request({
    url: 'auth/logout',
    method: 'get',
    dataType: 'json',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'token': getToken()
    },
    data: data
  })
}

/*
分页用户
 */
export const queryPage = (param) => {
  return axios.request({
    url: '/admin/user/query/page/',
    method: 'post',
    dataType: 'json',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'token': getToken()
    },
    data: param
  })
}

export const addUser = (param) => {
  return axios.request({
    url: '/admin/user/add/',
    method: 'post',
    dataType: 'json',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'token': getToken()
    },
    data: param
  })
}
export const updateUser = (param) => {
  return axios.request({
    url: '/admin/user/update/',
    method: 'post',
    dataType: 'json',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'token': getToken()
    },
    data: param
  })
}

export const removeUser = (param) => {
  return axios.request({
    url: '/admin/user/delete/',
    method: 'post',
    dataType: 'json',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'token': getToken()
    },
    data: param
  })
}
/**
 * 查询用户包含上级机构
 * @param param
 * @returns {*}
 */
export const searchByOrgPath = (param) => {
  return axios.request({
    url: '/admin/user/searchByOrgPath/',
    method: 'post',
    dataType: 'json',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'token': getToken()
    },
    data: param
  })
}

/**
 * 修改密码
 * @param param
 * @returns {*}
 */
export const changePaasword = (param) => {
  return axios.request({
    url: '/admin/user/change/password',
    method: 'post',
    dataType: 'json',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'token': getToken()
    },
    data: param
  })
}


