import webaxios from "@/api/web/libs/webrequest";

/**
 * 登录平台
 * @param user
 * @param password
 * @returns {AxiosPromise}
 */
export const loginToWeb = (user, password) => {
  return webaxios.request({
    url: '/login?username='+user+'&password='+password,
    method: 'post',
    dataType: 'json',
    headers: {
      'Content-Type': 'text/html; charset=UTF-8',
    },
  })
}

export const checkSiteOnWeb = (user, password,host,port) => {
  return webaxios.request({
    url: '/api/site/check?username='+user+'&password='+password+"&host="+host + "&port=" + port,
    method: 'get',
    dataType: 'json',
    headers: {
      'Content-Type': 'text/html; charset=UTF-8',
    },
  })
}
